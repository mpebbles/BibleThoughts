const user = require("../models/User");

function setSessionVal(req, docId) {
  req.session.val = docId;
}

exports.login = [
  (req, res, next) => {
    user
      .findOne({
        phrase: req.body.phrase,
        pin: req.body.pin
      })
      .exec(function(err, document) {
        // TODO: return unique identifier
        if (document) {
          setSessionVal(req, document._id);
          res.sendStatus(200);
        } else {
          res.sendStatus(400);
        }
      });
  }
];

exports.logout = [
  (req, res, next) => {
    req.session.val = "";
    res.sendStatus(200);
  }
];

exports.deleteAccount = [
  (req, res, next) => {
    try {
      user.deleteOne({ _id: req.session.val }).exec();
      req.session.val = "";
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  }
];

exports.createAccount = [
  (req, res, next) => {
    user
      .findOne({
        phrase: req.body.phrase,
        pin: req.body.pin
      })
      .exec(function(err, document) {
        if (!document) {
          new user({
            phrase: req.body.phrase,
            pin: req.body.pin
          }).save(function(err, doc) {
            if (err) {
              console.log(err);
            }
            setSessionVal(req, document._id);
            res.sendStatus(200);
          });
        } else {
          // account already exists
          res.sendStatus(409);
        }
      });
  }
];

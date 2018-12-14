const user = require("../models/User");

exports.login = [
  (req, res, next) => {
    user
      .findOne({
        phrase: req.body.phrase,
        pin: req.body.pin
      })
      .exec(function(err, document) {
        // TODO: return unique identifier
        if (document) res.sendStatus(200);
        else {
          res.sendStatus(400);
        }
      });
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
            res.send(200);
          });
        } else {
          // account already exists
          res.sendStatus(409);
        }
      });
  }
];

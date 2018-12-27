const user = require("../models/User");
const tagDoc = require("../models/Tags");

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

exports.addResource = [
  (req, res, next) => {
    user
      .findOneAndUpdate(
        { _id: req.session.val },
        { $push: { resources: { link: req.body.link, text: req.body.text } } }
      )
      .exec(function(err, document) {
        if (!document) {
          res.sendStatus(400);
          return;
        }
        res.sendStatus(200);
      });
  }
];

exports.deleteResource = [
  (req, res, next) => {
    user
      .findOneAndUpdate(
        { _id: req.session.val },
        { $pull: { resources: { link: req.body.link } } }
      )
      .exec(function(err, document) {
        if (!document) {
          res.sendStatus(400);
          return;
        }
        res.sendStatus(200);
      });
  }
];

exports.getResources = function(req, res, next) {
  user.findOne({ _id: req.session.val }).exec(function(err, document) {
    if (!document) {
      res.sendStatus(400);
      return;
    }
    res.send(JSON.stringify(document.resources));
  });
};

exports.isLoggedIn = function(req, res, next) {
  user.findOne({ _id: req.session.val }).exec(function(err, document) {
    if (!document) {
      res.sendStatus(400);
      return;
    }
    res.sendStatus(200);
  });
};

exports.addContent = [
  (req, res, next) => {
    user
      .findOneAndUpdate(
        { _id: req.session.val },
        { $push: { content: { text: req.body.text } } },
        { new: true } // to get updated document
      )
      .exec(function(err, document) {
        if (!document) {
          res.sendStatus(400);
          return;
        }

        // insert tags into DB
        req.body.tags.map(tag => {
          new tagDoc({
            tag: tag.tag,
            userRef: document._id,
            contentRef: document.content[document.content.length - 1]._id
          }).save(function(err, doc) {
            if (err) {
              console.log(err);
            }
          });
        });

        res.send(document.content[document.content.length - 1]._id);
      });
  }
];

exports.getEntries = function(req, res, next) {
  user.findOne({ _id: req.session.val }).exec(function(err, document) {
    if (!document) {
      res.sendStatus(400);
      return;
    }
    tagDoc.find({userRef: req.session.val}).exec(function(err, tags) {
      res.send({content: document.content, tags: tags});
    });
  });
};

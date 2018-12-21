const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Tags = new Schema({
  tag: { type: String, maxLength: 50 },
  userRef: { type: ObjectId },
  contentRef: { type: ObjectId }
});

module.exports = mongoose.model("Tags", Tags);

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  phrase: {type: String, maxlength: 150},
  pin: {type: Number, max: 999999}
});

module.exports = mongoose.model("User", User);

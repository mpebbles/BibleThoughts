const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  phrase: { type: String, maxlength: 150 },
  pin: { type: Number, max: 999999 },
  resources: [
    {
      link: { type: String, maxLength: 500, unique: true },
      text: { type: String, maxLength: 50 },
      required: false
    }
  ],
  content: [
    {
      text: { type: String, maxLength: 15000, unique: true },
      required: false
    }
  ]
});

module.exports = mongoose.model("User", User);

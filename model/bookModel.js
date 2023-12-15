const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  turfId: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  event: {
    type: Array,
  },
});

module.exports = mongoose.model("Book", bookSchema);

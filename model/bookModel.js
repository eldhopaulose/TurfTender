const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  userId: {
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
});

module.exports = mongoose.model("Book", bookSchema);

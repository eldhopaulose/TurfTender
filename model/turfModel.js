const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const turfSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    event: {
      type: Array,
      required: true,
    },
    facilities: {
      type: Array,
      required: true,
    },
    availableDates: {
      type: String,
      required: true,
    },
    workingHours: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createdDate: {
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Turfs", turfSchema);

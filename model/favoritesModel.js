const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const favoritesSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  turfId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Favorites", favoritesSchema);

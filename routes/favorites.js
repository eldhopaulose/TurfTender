const express = require("express");
const {
  favorites,
  getFavorites,
} = require("../controller/favoritesController");
const requireUserAuth = require("../middleware/requireUserAuth");

const router = express.Router();
router.use(requireUserAuth);
router.post("/:id", favorites); // Change to POST if you're creating a new favorite
router.get("/getfavorites", getFavorites);

module.exports = router;

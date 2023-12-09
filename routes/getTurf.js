const express = require("express");
const {
  getAllTurf,
  getSingleTurf,
  turfBook,
} = require("../controller/getTurfController");
const requireUserAuth = require("../middleware/requireUserAuth");
const router = express.Router();

router.use(requireUserAuth);
router.get("/:category", getAllTurf);
router.get("/single/:id", getSingleTurf);
router.post("/single/book/:id", turfBook);

module.exports = router;

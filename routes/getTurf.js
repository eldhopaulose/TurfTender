const express = require("express");
const { getAllTurf } = require("../controller/getTurfController");
const requireUserAuth = require("../middleware/requireUserAuth");
const router = express.Router();

router.use(requireUserAuth);
router.get("/:category", getAllTurf);

module.exports = router;

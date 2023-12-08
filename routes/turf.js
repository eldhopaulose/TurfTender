var express = require("express");
const { createTurf } = require("../controller/turfController");
const requireAdminAuth = require("../middleware/requireAdminAuth");
var router = express.Router();

router.post("/", requireAdminAuth, createTurf);

module.exports = router;

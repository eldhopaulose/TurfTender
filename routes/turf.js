var express = require("express");
const {
  createTurf,
  turfImageAdd,
  turfDetailsUpdate,
} = require("../controller/turfController");
const requireAdminAuth = require("../middleware/requireAdminAuth");
var router = express.Router();

router.post("/", requireAdminAuth, createTurf);
router.put("/image/:id", requireAdminAuth, turfImageAdd);
router.put("/turf-details/:id", requireAdminAuth, turfDetailsUpdate);

module.exports = router;

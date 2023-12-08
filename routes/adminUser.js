var express = require("express");
const {
  adminSinupUser,
  adminSinupUserOtpConfirm,
  adminLoginUser,
} = require("../controller/adminUSerController");

var router = express.Router();

router.post("/login", adminLoginUser);
router.post("/signup", adminSinupUser);
router.post("/signup/otp", adminSinupUserOtpConfirm);

module.exports = router;

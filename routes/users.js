var express = require("express");
const {
  userSignup,
  sinupUserOtpConfirm,
  loginUser,
} = require("../controller/userController");
var router = express.Router();

router.post("/login", loginUser);
router.post("/signup", userSignup);
router.post("/signup/otp", sinupUserOtpConfirm);

module.exports = router;

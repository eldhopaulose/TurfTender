var express = require("express");
const requireUserAuth = require("../middleware/requireUserAuth");
const {
  userSignup,
  sinupUserOtpConfirm,
  loginUser,
  userDataUpdate,
  userPassUpdate,
} = require("../controller/userController");
var router = express.Router();

router.post("/login", loginUser);
router.post("/signup", userSignup);
router.post("/signup/otp", sinupUserOtpConfirm);
router.put("/details-update", requireUserAuth, userDataUpdate);
router.put("/password", requireUserAuth, userPassUpdate);

module.exports = router;

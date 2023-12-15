var express = require("express");
const requireAdminAuth = require("../middleware/requireAdminAuth");
const {
  adminSinupUser,
  adminSinupUserOtpConfirm,
  adminLoginUser,
  adminDataUpdate,
  adminPassUpdate,
} = require("../controller/adminUSerController");

var router = express.Router();

router.post("/login", adminLoginUser);
router.post("/signup", adminSinupUser);
router.post("/signup/otp", adminSinupUserOtpConfirm);
router.put("/data", requireAdminAuth, adminDataUpdate);
router.put("/password-update", requireAdminAuth, adminPassUpdate);

module.exports = router;

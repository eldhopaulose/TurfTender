const AdminUser = require("../model/adminUserModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_ADMIN, { expiresIn: "3d" });
};

//login
const adminLoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const adminUser = await AdminUser.adminLogin(email, password);

    const token = createToken(adminUser._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//signup
const adminSinupUser = async (req, res) => {
  const {
    name,
    mobileNumber,
    email,
    address,
    district,
    pincode,
    password,
    avatar,
  } = req.body;

  try {
    const adminUser = await AdminUser.adminSignup(
      name,
      mobileNumber,
      email,
      address,
      district,
      pincode,
      password,
      avatar
    );
    res.status(200).json({ adminUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const adminSinupUserOtpConfirm = async (req, res) => {
  const {
    name,
    mobileNumber,
    email,
    address,
    district,
    pincode,
    password,
    avatar,
    otp, // Add OTP to the request body
  } = req.body;

  try {
    const adminUserOtp = await AdminUser.adminSignupOtpConfirm(
      otp,
      name,
      mobileNumber,
      email,
      address,
      district,
      pincode,
      password,
      avatar
    );
    console.log(adminUserOtp);
    res.status(200).json({ adminUserOtp });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { adminSinupUser, adminSinupUserOtpConfirm, adminLoginUser };

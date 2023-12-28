const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_USER, { expiresIn: "3d" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const adminUser = await User.login(email, password);

    const token = createToken(adminUser._id);

    const admin = adminUser.admin;

    res.status(200).json({ email, token, admin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const userSignup = async (req, res) => {
  const { email, password, name, mobileNumber, avatar } = req.body;
  console.log(email, password, name, mobileNumber, avatar);
  try {
    const user = await User.siginup(
      email,
      password,
      name,
      mobileNumber,
      avatar
    );
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const sinupUserOtpConfirm = async (req, res) => {
  const { email, password, name, mobileNumber, avatar, otp } = req.body;

  try {
    const userOtp = await User.SignupOtpConfirm(
      email,
      password,
      name,
      mobileNumber,
      avatar,
      otp
    );
    console.log(userOtp);
    res.status(200).json({ userOtp, success: "Registration Success" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const userDataUpdate = async (req, res) => {
  try {
    const { email, name, mobileNumber, avatar } = req.body;
    const userId = req.user._id;
    console.log(userId);
    const update = await User.findByIdAndUpdate(userId, {
      email,
      name,
      mobileNumber,
      avatar,
    });
    console.log(update);
    res.status(200).json({ update });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const userPassUpdate = async (req, res) => {
  try {
    const { password } = req.body;
    const userId = req.user._id;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const update = await User.findByIdAndUpdate(userId, {
      password: hash,
    });
    console.log(update);
    res.status(200).json({ update });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  userSignup,
  sinupUserOtpConfirm,
  loginUser,
  userDataUpdate,
  userPassUpdate,
};

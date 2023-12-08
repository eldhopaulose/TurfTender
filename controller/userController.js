const User = require("../model/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_USER, { expiresIn: "3d" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const adminUser = await User.login(email, password);

    const token = createToken(adminUser._id);

    res.status(200).json({ email, token });
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
    res.status(200).json({ userOtp });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { userSignup, sinupUserOtpConfirm, loginUser };

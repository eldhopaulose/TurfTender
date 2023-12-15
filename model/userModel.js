const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const nodemailer = require("nodemailer");
require("dotenv").config();

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
});

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: Number(587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

let globalOtp;

userSchema.statics.siginup = async function (
  email,
  password,
  name,
  mobileNumber,
  avatar
) {
  console.log(email, password, name, mobileNumber, avatar);
  try {
    if (!email || !password || !name || !mobileNumber || !avatar) {
      throw Error("All fields must be filled user");
    }

    if (!validator.isEmail(email)) {
      throw Error("Email not valid");
    }
    const isStrongPassword = validator.isStrongPassword(password, {
      minLength: 6,
      minLowercase: 0,
      minUppercase: 0,
      minNumbers: 0,
      minSymbols: 0,
    });

    if (!isStrongPassword) {
      throw Error("Password not strong enough");
    }
    const exists = await this.findOne({ email });

    if (exists) {
      throw Error("Email already in use");
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    globalOtp = otp;

    // Send OTP via email
    const mailOptions = {
      from: "eldhopaulose025@gmail.com",
      to: email,
      subject: "Verification OTP for Signup",
      text: `Your OTP for signup is: ${otp}`,
    };

    try {
      const mail = await transporter.sendMail(mailOptions);
      console.log("OTP email sent successfully");
      return otp;
    } catch (error) {
      console.error("Error sending OTP email:", error);
      throw Error("Error sending OTP email");
    }
  } catch (error) {
    console.error("Error during admin signup:", error);
    throw error;
  }
};

userSchema.statics.SignupOtpConfirm = async function (
  email,
  password,
  name,
  mobileNumber,
  avatar,
  otp
) {
  try {
    console.log(otp);
    if (globalOtp !== otp) {
      throw new Error("Incorrect OTP");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // Create admin user
    const response = await this.create({
      email,
      password: hash,
      name,
      mobileNumber,
      avatar,
      admin: false,
      otp: globalOtp,
    });

    console.log(" user created successfully", globalOtp);
    return response;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All field must be filled");
  }
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorect email");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }
  return user;
};

module.exports = mongoose.model("User", userSchema);

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const turfRouter = require("./routes/turf");
const usersRouter = require("./routes/users");
const adminUser = require("./routes/adminUser");
const getTurfRouter = require("./routes/getTurf");
const getfavoritesRouter = require("./routes/favorites");
const getBookingDetailsRouter = require("./routes/getBookingDetails");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/admin", turfRouter);
app.use("/api/admin/user", adminUser);
app.use("/api/admin/", getBookingDetailsRouter);

app.use("/api/users", usersRouter);
app.use("/api/turf", getTurfRouter);
app.use("/api/favorites", getfavoritesRouter);

// Connect to MongoDB
mongoose
  .connect(process.env.MOGO_URI)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.error("Database Connection Error:", err));

module.exports = app;

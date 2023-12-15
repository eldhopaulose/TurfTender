const Turf = require("../model/turfModel");
const Book = require("../model/bookModel");
const User = require("../model/userModel");

const getAllTurf = async (req, res) => {
  const event = req.params.category;
  console.log(event);
  try {
    const turf = await Turf.find({ event }).sort({ createdAt: -1 });
    res.status(200).json({ turf });
  } catch (error) {
    return res.status(404).json({ error: "No Turf" });
  }
};

const getSingleTurf = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const turf = await Turf.findById(id); // Use findById instead of find
    if (!turf) {
      return res.status(404).json({ error: "No Turf" });
    }
    res.status(200).json({ turf });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const turfBook = async (req, res) => {
  try {
    const user_id = req.user._id;
    const turfId = req.params.id;
    console.log(user_id, turfId);
    const { time, rate, date } = req.body;

    const user = await User.findById(user_id);

    if (!user) {
      throw new Error("username not found");
    }

    const username = user.name;
    const mobileNumber = user.mobileNumber;

    console.log(username);

    const book = await Book.create({
      name: username,
      mobileNumber: mobileNumber,
      turfId: turfId,
      time: time,
      rate: rate,
      date: date,
    });
    res.status(200).json({ book });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllTurf, getSingleTurf, turfBook };

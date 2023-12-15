const Turf = require("../model/turfModel");

const createTurf = async (req, res) => {
  const {
    images,
    name,
    address,
    rate,
    event,
    facilities,
    availableDates,
    workingHours,
    description,
  } = req.body;
  console.log(images);
  try {
    const date = new Date();
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const user_id = req.user._id;
    const data = await Turf.create({
      images,
      name,
      address,
      rate,
      event,
      facilities,
      description,
      availableDates,
      workingHours,
      createdDate:
        date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear(),
      month: month[date.getMonth()],
      day: weekday[date.getDay()],
      user_id,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

const turfImageAdd = async (req, res) => {
  try {
    const { images } = req.body;
    const user_id = req.user._id;
    const { id } = req.params;

    // Ensure user exists before attempting to update
    const existingUser = await Turf.find(user_id);
    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Use findOneAndUpdate for flexibility
    const imageUpdate = await Turf.findOneAndUpdate(
      { _id: id },
      { $push: { images: images } },
      { new: true }
    );

    console.log("Image Update:", imageUpdate);
    res.status(200).json({ imageUpdate });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

const turfDetailsUpdate = async (req, res) => {
  try {
    const {
      name,
      address,
      rate,
      event,
      facilities,
      availableDates,
      workingHours,
      description,
    } = req.body;
    const user_id = req.user._id;
    const { id } = req.params;

    const existingUser = await Turf.find(user_id);
    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    const TurfDetailsUpdate = await Turf.findOneAndUpdate(
      { _id: id },
      {
        name,
        address,
        rate,
        $push: { event: event, facilities: facilities },
        availableDates,
        workingHours,
        description,
      },
      { new: true }
    );
    res.status(200).json({ TurfDetailsUpdate });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createTurf, turfImageAdd, turfDetailsUpdate };

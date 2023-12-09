const Turf = require("../model/turfModel");

const createTurf = async (req, res) => {
  const {
    image,
    name,
    address,
    rate,
    event,
    facilities,
    availableDates,
    workingHours,
    description,
  } = req.body;
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
      image,
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

module.exports = { createTurf };

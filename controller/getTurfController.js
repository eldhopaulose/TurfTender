const Turf = require("../model/turfModel");

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

module.exports = { getAllTurf };

const Book = require("../model/bookModel");

const getAllDetails = async (req, res) => {
  try {
    const userId = req.user._id;
    const day = req.params.day;
    const month = req.params.month;
    const year = req.params.year;

    // Use these variables to construct the date or handle as needed
    const date = `${day}/${month}/${year}`;
    console.log(date);

    const bookingDetails = await Book.find({
      date,
    });

    if (!bookingDetails || bookingDetails.length === 0) {
      return res.status(404).json({ error: "No booking details found." });
    }

    res.status(200).json({ bookingDetails });
  } catch (error) {
    console.error("Error fetching booking details:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

const totalRevenue = async (req, res) => {
  res.status(200).json({ data: "50000" });
};
const totalRevenueGraph = async (req, res) => {
  res.status(200).json({
    expenses: [
      { month: "January", totalExpense: 1500 },
      { month: "February", totalExpense: 2000 },
      { month: "March", totalExpense: 1200 },
      { month: "April", totalExpense: 1800 },
      { month: "May", totalExpense: 2500 },
      { month: "June", totalExpense: 1700 },
      { month: "July", totalExpense: 1900 },
      { month: "August", totalExpense: 2200 },
      { month: "September", totalExpense: 1600 },
      { month: "October", totalExpense: 2000 },
      { month: "November", totalExpense: 2100 },
      { month: "December", totalExpense: 1800 },
    ],
  });
};

const turfAdminBook = async (req, res) => {
  try {
    const turfId = req.params.id;
    console.log(turfId);
    const { time, rate, date, name, mobileNumber, event } = req.body;
    console.log(time, rate, date, name, mobileNumber, event);

    const book = await Book.create({
      name: name,
      mobileNumber: mobileNumber,
      turfId: turfId,
      time: time,
      rate: rate,
      date: date,
      event: event,
    });
    res.status(200).json({ book });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllDetails,
  totalRevenue,
  totalRevenueGraph,
  turfAdminBook,
};

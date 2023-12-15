const express = require("express");

const requireAdminAuth = require("../middleware/requireAdminAuth");
const {
  getAllDetails,
  totalRevenue,
  totalRevenueGraph,
  turfAdminBook,
} = require("../controller/getBookingDetailsControler");
const router = express.Router();

router.use(requireAdminAuth);
router.get("/booking/details/:day/:month/:year", getAllDetails);
router.get("/booking/details/revenue", totalRevenue);
router.get("/booking/details/graph", totalRevenueGraph);
router.post("/booking/adminbook/:id", turfAdminBook);

module.exports = router;

const express = require("express");
const { verifyToken } = require("../middlewares/Auth");
const upload = require("../middlewares/upload");
// routes/car.js
const router = express.Router();
const {
  createCarPost,
  getAllCars,
  getMyCars,
  getCars,
  updateCar,
  deleteCar,
} = require("../controllers/car");

// POST: Create a new car post
router.post("/", createCarPost);

// Fetch all car posts
router.get("/all", getAllCars);

// Get cars with search, filter, and pagination
router.get("/search", getCars);

// GET: Fetch all car posts by the logged-in renter
router.get("/my-cars", getMyCars);

// Update car
router.put("/:id", updateCar);

// Delete car
router.delete("/:id", deleteCar);

module.exports = router;

const Car = require("../models/Car");

// POST: Create a new car post
const createCarPost = async (req, res) => {
  try {
    const { title, description, pricePerDay, location } = req.body;
    console.log("request data", req.files);
    const images = req?.files?.map((file) => file.path);

    const car = new Car({
      renter: req.user.id,
      title,
      description,
      pricePerDay,
      location,
      images,
    });

    await car.save();
    res
      .status(201)
      .json({ success: true, data: car, message: "Car posted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET: Fetch all car posts
const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find().populate("renter", "name email");
    res.status(200).json({ success: true, data: cars });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET: Fetch all car posts by the logged-in renter
const getMyCars = async (req, res) => {
  try {
    const cars = await Car.find({ renter: req.user.id });
    res.status(200).json({ success: true, data: cars });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, pricePerDay, location } = req.body;

    // Find the car by ID
    const car = await Car.findById(id);

    // Check if car exists and belongs to the logged-in renter
    if (!car || car.renter.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ success: false, message: "Unauthorized or car not found" });
    }

    // Update the car details
    car.title = title || car.title;
    car.description = description || car.description;
    car.pricePerDay = pricePerDay || car.pricePerDay;
    car.location = location || car.location;

    // Save the updated car
    await car.save();

    res
      .status(200)
      .json({ success: true, data: car, message: "Car updated successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete car
const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the car by ID
    const car = await Car.findById(id);

    // Check if car exists and belongs to the logged-in renter
    if (!car || car.renter.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ success: false, message: "Unauthorized or car not found" });
    }

    // Delete the car
    await car.remove();

    res
      .status(200)
      .json({ success: true, message: "Car deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Search, filter, and paginate cars
const getCars = async (req, res) => {
  try {
    const {
      search,
      minPrice,
      maxPrice,
      location,
      page = 1,
      limit = 10,
    } = req.query;

    // Create a filter object
    const filter = {};

    // Search by title or location
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { location: { $regex: search, $options: "i" } },
      ];
    }

    // Filter by price range
    if (minPrice)
      filter.pricePerDay = { ...filter.pricePerDay, $gte: Number(minPrice) };
    if (maxPrice)
      filter.pricePerDay = { ...filter.pricePerDay, $lte: Number(maxPrice) };

    // Filter by location
    if (location) filter.location = { $regex: location, $options: "i" };

    // Pagination logic
    const skip = (Number(page) - 1) * Number(limit);

    // Fetch cars from the database
    const cars = await Car.find(filter).skip(skip).limit(Number(limit));

    // Get total count for pagination
    const total = await Car.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: cars,
      pagination: {
        total,
        page: Number(page),
        pages: Math.ceil(total / limit),
        limit: Number(limit),
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createCarPost,
  getAllCars,
  getMyCars,
  getCars,
  updateCar,
  deleteCar,
};

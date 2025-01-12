const express = require("express");
const {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
} = require("../controllers/auth");
const { protect } = require("../middlewares/Auth");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);

router.post("/logout", (req, res) => {
  res
    .clearCookie("token", { httpOnly: true, secure: true, sameSite: "strict" })
    .status(200)
    .json({ message: "Logged out successfully" });
});

module.exports = router;

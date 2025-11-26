import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, birthday, number, email, password } = req.body;

    if (!firstName || !lastName || !birthday || !number || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const user = new User({
      firstName,
      lastName,
      birthday,
      number,
      email,
      password,
    });

    await user.save();

    const token = generateToken(user._id);

    return res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        firstName,
        lastName,
        email,
      },
    });

  } catch (error) {
    console.log("Register error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

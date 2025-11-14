import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

const generateToken = (userID) => {
  return jwt.sign({ userID }, process.env.JWT_SECRET, {expiresIn: "7d"});
}

router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    if (username.length < 6) {
        return res.status(400).json({ message: "Username must be at least 6 characters" });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const profileImage = req.file ? req.file.path : "";

    const user = new User({ 
        username, 
        email, 
        password,
        profileImage,
    });

    await user.save();

    const token = generateToken(user._id);
    res.status(201).json({ 
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      }
    });

  } catch (error) {
    console.log("Error during registration:", error);
    res.status(500).json({ message: "Internal Server error" });
  }
    res.send("User registered");
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user){
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = generateToken(user._id);
    res.status(201).json({ 
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      }
    });

  } catch (error) {
      console.log("Error during login:", error);
      res.status(500).json({ message: "Internal Server error" });
  }
});

export default router;
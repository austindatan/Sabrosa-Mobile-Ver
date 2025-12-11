import express from 'express';
import User from '../models/User.js'; // Make sure this points to your User model

const router = express.Router();

// PUT route to update user profile
router.put("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const { firstName, lastName, number, email } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !number || !email) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Find user by ID and update
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { firstName, lastName, number, email },
      { new: true, runValidators: true } // return updated document & validate
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found." });
    }

    // Return updated user as JSON
    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser
    });

  } catch (error) {
    console.error("--- ERROR UPDATING USER PROFILE ---");
    console.error("Error Message:", error.message);
    console.error("Error Name:", error.name);
    if (error.errors) console.error("Validation Errors:", error.errors);
    console.error("-------------------------------------");

    res.status(500).json({
      error: "Failed to update profile due to server error",
      internalError: error.name
    });
  }
});

export default router;

import express from 'express';
import User from '../models/User.js'; 

const router = express.Router();


router.put("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const { firstName, lastName, number, email } = req.body;

    
    if (!firstName || !lastName || !number || !email) {
      return res.status(400).json({ error: "All fields are required." });
    }

    
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { firstName, lastName, number, email },
      { new: true, runValidators: true } 
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found." });
    }

    
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

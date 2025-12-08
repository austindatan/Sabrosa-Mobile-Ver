import express from 'express';
import DeliveryAddress from '../models/Address.js';

const router = express.Router();

// POST route to add a new delivery address
router.post("/add", async (req, res) => {
    try {
        const { user: userId, address } = req.body;

        if (!userId || !address) {
            return res.status(400).json({ error: "User ID and address are required." });
        }
        
        // 1. Create the new document instance
        const newAddress = new DeliveryAddress({
            user: userId,
            address: address, 
            // Note: latitude/longitude fields are not in your schema, 
            // but Mongoose ignores extra data by default.
        });

        // 2. Attempt to save
        await newAddress.save();

        res.status(201).json({ 
            message: "Address saved successfully!", 
            address: newAddress 
        });

    } catch (error) {
        // 💡 CRUCIAL DEBUGGING STEP: Log the detailed Mongoose error
        console.error("--- ERROR SAVING DELIVERY ADDRESS ---");
        console.error("Error Message:", error.message);
        console.error("Error Name:", error.name);
        // If it's a Mongoose validation error, details will be here:
        if (error.errors) {
            console.error("Validation Errors:", error.errors);
        }
        console.error("-------------------------------------");

        // Send a generic 500 status back to the client so the frontend stops saving
        res.status(500).json({ 
            error: "Failed to save address due to a server error.",
            // Send the error name to the frontend for better debugging
            internalError: error.name
        });
    }
});

export default router;
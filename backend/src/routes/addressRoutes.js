import express from 'express';
import DeliveryAddress from '../models/Address.js';

const router = express.Router();


router.post("/add", async (req, res) => {
    try {
        const { user: userId, address } = req.body;

        if (!userId || !address) {
            return res.status(400).json({ error: "User ID and address are required." });
        }
        
        
        const newAddress = new DeliveryAddress({
            user: userId,
            address: address, 
            
            
        });

       
        await newAddress.save();

        res.status(201).json({ 
            message: "Address saved successfully!", 
            address: newAddress 
        });

    } catch (error) {
        
        console.error("--- ERROR SAVING DELIVERY ADDRESS ---");
        console.error("Error Message:", error.message);
        console.error("Error Name:", error.name);
        
        if (error.errors) {
            console.error("Validation Errors:", error.errors);
        }
        console.error("-------------------------------------");

        
        res.status(500).json({ 
            error: "Failed to save address due to a server error.",
            
            internalError: error.name
        });
    }
});

export default router;
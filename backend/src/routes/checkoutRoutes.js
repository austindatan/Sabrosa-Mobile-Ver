import express from "express";
import Cart from "../models/Cart.js";
import User from "../models/User.js";
import DeliveryAddress from "../models/Address.js";
import PaymentMethod from "../models/PaymentMethod.js";

const router = express.Router();

router.get("/preview/:userId", async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await User.findById(userId).select('firstName lastName number');
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const deliveryAddress = await DeliveryAddress.findOne({ user: userId }).sort({ createdAt: -1 });

        const cart = await Cart.findOne({ user: userId }).populate({
             path: "items.product",
             select: 'productName price productImages' 
        });

        // 🛑 CRITICAL FIX: Changed findOne (singular) to find (multiple) 
        // to correctly initialize the 'defaultMethods' array expected by the loop.
        const defaultMethods = await PaymentMethod.find({ user: userId, isDefault: true }); 
        
        let defaultPaymentKey = 'cod'; // Default fallback
        let defaultCardNumber = null;
        let defaultGcashNumber = null;
        
        for (const method of defaultMethods) {
            if (method.type === 'Credit Card' && method.cardNumber) {
                // Store masked card number for display
                defaultCardNumber = `**** ${method.cardNumber.slice(-4)}`;
                defaultPaymentKey = 'card';
            } else if (method.type === 'GCash' && method.gcashNumber) {
                // Store full GCash number for display
                defaultGcashNumber = method.gcashNumber;
                defaultPaymentKey = 'gcash';
            } else if (method.type === 'Cash') {
                defaultPaymentKey = 'cod';
            }
        }
        
        // Ensure the default key is set correctly based on the found method
        // (This block can be simplified but we'll leave it to match your original intent)
        if (defaultMethods.length === 0) {
             defaultPaymentKey = 'cod';
        } else if (defaultMethods.find(m => m.type === 'GCash')) {
             defaultPaymentKey = 'gcash';
        } else if (defaultMethods.find(m => m.type === 'Credit Card')) {
             defaultPaymentKey = 'card';
        }
        
        const cartItems = cart 
            ? cart.items.filter(item => item.status === "Added")
            : [];
        
        // 5. Construct the final response payload
        const responsePayload = {
            userInfo: {
                recipient: `${user.firstName} ${user.lastName}`,
                phone: user.number,
            },
            address: {
                label: "Primary Delivery",
                line1: deliveryAddress ? deliveryAddress.address : 'No delivery address saved.',
            },
            cartItems: cartItems.map(item => ({
                id: item.product._id, 
                name: item.product.productName,
                price: item.product.price,
                qty: item.quantity,
                imageUri: item.product.productImages && item.product.productImages.length > 0
                    ? item.product.productImages[0] 
                    : null 
            })),
            
            // ✅ Updated keys (match what the frontend is expecting)
            defaultPayment: defaultPaymentKey,
            cardDisplayNumber: defaultCardNumber,   
            gcashDisplayNumber: defaultGcashNumber, 
        };

        res.status(200).json(responsePayload);

    } catch (err) {
        // Log the detailed error for debugging
        console.error("CHECKOUT PREVIEW ERROR:", err); 
        res.status(500).json({ error: "Failed to load checkout preview" });
    }
});

export default router;
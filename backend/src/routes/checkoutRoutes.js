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

        
        
        const defaultMethods = await PaymentMethod.find({ user: userId, isDefault: true }); 
        
        let defaultPaymentKey = 'cod'; 
        let defaultCardNumber = null;
        let defaultGcashNumber = null;
        
        for (const method of defaultMethods) {
            if (method.type === 'Credit Card' && method.cardNumber) {
                
                defaultCardNumber = `**** ${method.cardNumber.slice(-4)}`;
                defaultPaymentKey = 'card';
            } else if (method.type === 'GCash' && method.gcashNumber) {
                
                defaultGcashNumber = method.gcashNumber;
                defaultPaymentKey = 'gcash';
            } else if (method.type === 'Cash') {
                defaultPaymentKey = 'cod';
            }
        }
        
        
        
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
            
            
            defaultPayment: defaultPaymentKey,
            cardDisplayNumber: defaultCardNumber,   
            gcashDisplayNumber: defaultGcashNumber, 
        };

        res.status(200).json(responsePayload);

    } catch (err) {
        
        console.error("CHECKOUT PREVIEW ERROR:", err); 
        res.status(500).json({ error: "Failed to load checkout preview" });
    }
});

export default router;
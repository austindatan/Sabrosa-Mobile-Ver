
import express from "express";
import Cart from "../models/Cart.js";
import Order from "../models/Order.js";
import User from "../models/User.js";
import DeliveryAddress from "../models/Address.js"; 
import PaymentMethod from "../models/PaymentMethod.js"; 

const router = express.Router();


router.get("/user/:userId", async (req, res) => {
    try {
        const orders = await Order.find({ user: req.params.userId }).populate({
            path: "items.product",
            populate: {
                path: "brand"
            }
        });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

router.post("/place", async (req, res) => {
    try {
        const { userId, selectedPayment, total, subtotal, deliveryFee, tax, items } = req.body;

        if (!userId) {
            return res.status(400).json({ error: "User ID is required." });
        }

        
        
        const user = await User.findById(userId).select('firstName lastName number');
        
        const deliveryAddress = await DeliveryAddress.findOne({ user: userId }).sort({ createdAt: -1 });

        if (!user || !deliveryAddress) {
            return res.status(404).json({ error: "User or Delivery Address not found." });
        }

        
        let paymentDetails = { type: selectedPayment, details: null };

        if (selectedPayment === 'card' || selectedPayment === 'gcash') {
            const defaultMethod = await PaymentMethod.findOne({
                user: userId,
                isDefault: true,
                
                type: selectedPayment === 'card' ? 'Credit Card' : 'GCash'
            });

            if (defaultMethod) {
                if (selectedPayment === 'card' && defaultMethod.cardNumber) {
                    paymentDetails.details = `**** ${defaultMethod.cardNumber.slice(-4)}`;
                } else if (selectedPayment === 'gcash' && defaultMethod.gcashNumber) {
                    paymentDetails.details = defaultMethod.gcashNumber;
                }
            }
        }

        
        const order = new Order({
            user: userId,
            items: items.map(item => ({
                product: item.id,
                name: item.name,
                price: item.price,
                quantity: item.qty,
            })),
            
            deliveryAddress: {
                recipient: `${user.firstName} ${user.lastName}`,
                phone: user.number,
                address: deliveryAddress.address,
            },
            paymentMethod: paymentDetails,
            subtotal: subtotal,
            deliveryFee: deliveryFee,
            tax: tax,
            total: total,
            status: 'Pending',
        });

        await order.save();

        
        const cart = await Cart.findOne({ user: userId });

        if (cart) {
            const orderedProductIds = items.map(item => item.id.toString());

            
            cart.items = cart.items.filter(item =>
                !orderedProductIds.includes(item.product.toString()) ||
                item.status !== "Added"
            );

            await cart.save();
        }

        res.status(201).json({
            message: "Order placed successfully! Cart items moved to order.",
            orderId: order._id
        });

    } catch (err) {
        console.error("ORDER PLACEMENT ERROR:", err);
        res.status(500).json({ error: "Failed to place order" });
    }
});

export default router;
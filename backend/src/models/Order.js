// models/Order.js
import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    // Captures a snapshot of the ordered items
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
            name: { type: String, required: true },
            price: { type: Number, required: true },
            quantity: { type: Number, required: true },
        },
    ],
    deliveryAddress: {
        address: { type: String, required: true },
    },
    // Captures payment details
    paymentMethod: {
        type: { type: String, required: true }, 
        details: { type: String, default: null }, 
    },
    // Financials
    subtotal: { type: Number, required: true },
    deliveryFee: { type: Number, required: true },
    tax: { type: Number, required: true },
    total: { type: Number, required: true },
    
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Shipping', 'Delivered', 'Cancelled'],
        default: 'Pending',
    },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Order', OrderSchema);
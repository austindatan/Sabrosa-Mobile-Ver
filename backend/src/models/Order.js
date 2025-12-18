
import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

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

    paymentMethod: {
        type: { type: String, required: true },
        details: { type: String, default: null },
    },

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


OrderSchema.index({ user: 1, createdAt: -1 });

export default mongoose.model('Order', OrderSchema);
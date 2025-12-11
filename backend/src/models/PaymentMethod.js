import mongoose from "mongoose";

const PaymentMethodSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    type: {
        type: String,
        enum: ["Credit Card", "GCash", "Cash"],
        required: true,
    },
    cardNumber: {
        type: String,
        default: null,
    },
    gcashNumber: {
        type: String,
        default: null,
    },
    isDefault: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

// Add compound index for efficient querying by user and sorting by isDefault/createdAt
PaymentMethodSchema.index({ user: 1, isDefault: -1, createdAt: -1 });

export default mongoose.model("PaymentMethod", PaymentMethodSchema);

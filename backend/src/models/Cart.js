import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        items: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },
                quantity: {
                    type: Number,
                    default: 1,
                    min: 1,
                },
                // ✅ NEW FIELD: Status of the individual item
                status: {
                    type: String,
                    enum: ["Added", "Ordered", "Delivered", "Cancelled"], // Your four statuses
                    default: "Added", // Default status when first added to cart
                },
            },
        ],
    },
    { timestamps: true }
);

// Add index for efficient querying by user
cartSchema.index({ user: 1 });

export default mongoose.model("Cart", cartSchema);
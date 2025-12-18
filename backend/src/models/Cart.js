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
                
                status: {
                    type: String,
                    enum: ["Added", "Ordered", "Delivered", "Cancelled"], 
                    default: "Added", 
                },
            },
        ],
    },
    { timestamps: true }
);


cartSchema.index({ user: 1 });

export default mongoose.model("Cart", cartSchema);
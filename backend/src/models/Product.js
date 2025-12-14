import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true
        },
        productImages: [{
            type: String
        }],
        brand: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Brand',
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: [String],
            required: true
        }
    },
    { timestamps: true }
);

// Add text index for efficient text search on productName
ProductSchema.index({ productName: 'text' });

// Add index on brand for brand filtering queries
ProductSchema.index({ brand: 1 });

// Add index on price for potential sorting/filtering
ProductSchema.index({ price: 1 });

export default mongoose.model("Product", ProductSchema);

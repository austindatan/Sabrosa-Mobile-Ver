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
        brandName: {
            type: String,
            required: true
        },
        brandImage: {
            type: String,
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

// Add text index for efficient text search on productName and brandName
ProductSchema.index({ productName: 'text', brandName: 'text' });

// Add index on brandName for brand filtering queries
ProductSchema.index({ brandName: 1 });

// Add index on price for potential sorting/filtering
ProductSchema.index({ price: 1 });

export default mongoose.model("Product", ProductSchema);

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


ProductSchema.index({ productName: 'text' });


ProductSchema.index({ brand: 1 });


ProductSchema.index({ price: 1 });

export default mongoose.model("Product", ProductSchema);

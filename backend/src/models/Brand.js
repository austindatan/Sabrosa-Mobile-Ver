import mongoose from "mongoose";

const BrandSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: ""
        }
    },
    { timestamps: true }
);

// Add index on name for efficient lookups
BrandSchema.index({ name: 1 });

export default mongoose.model("Brand", BrandSchema);

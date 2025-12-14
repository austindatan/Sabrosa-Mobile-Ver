import mongoose from "mongoose";

const FavoriteSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
    },
    { timestamps: true }
);

// Compound index to ensure a user can't favorite the same product twice
FavoriteSchema.index({ user: 1, product: 1 }, { unique: true });

// Index for efficient querying by user
FavoriteSchema.index({ user: 1, createdAt: -1 });

export default mongoose.model("Favorite", FavoriteSchema);

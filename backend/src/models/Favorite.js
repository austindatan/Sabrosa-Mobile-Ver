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


FavoriteSchema.index({ user: 1, product: 1 }, { unique: true });


FavoriteSchema.index({ user: 1, createdAt: -1 });

export default mongoose.model("Favorite", FavoriteSchema);

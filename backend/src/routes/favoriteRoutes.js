import express from "express";
import Favorite from "../models/Favorite.js";

const router = express.Router();

/* -----------------------------
   ADD/TOGGLE FAVORITE
----------------------------- */
router.post("/toggle", async (req, res) => {
    try {
        const { userId, productId } = req.body;

        if (!userId || !productId) {
            return res.status(400).json({ error: "userId and productId are required" });
        }

        // Check if already favorited
        const existing = await Favorite.findOne({ user: userId, product: productId });

        if (existing) {
            // Remove from favorites
            await Favorite.deleteOne({ _id: existing._id });
            return res.json({ message: "Removed from favorites", isFavorited: false });
        } else {
            // Add to favorites
            const newFavorite = new Favorite({
                user: userId,
                product: productId,
            });
            await newFavorite.save();
            return res.json({ message: "Added to favorites", isFavorited: true });
        }
    } catch (err) {
        console.error("TOGGLE FAVORITE ERROR:", err);
        res.status(500).json({ error: "Failed to toggle favorite" });
    }
});

/* -----------------------------
   GET ALL FAVORITES FOR USER
----------------------------- */
router.get("/user/:userId", async (req, res) => {
    try {
        const favorites = await Favorite.find({ user: req.params.userId })
            .populate({
                path: "product",
                populate: {
                    path: "brand"
                }
            })
            .sort({ createdAt: -1 }); // Newest first

        res.json(favorites);
    } catch (err) {
        console.error("GET FAVORITES ERROR:", err);
        res.status(500).json({ error: "Failed to load favorites" });
    }
});

/* -----------------------------
   CHECK IF PRODUCT IS FAVORITED
----------------------------- */
router.get("/check/:userId/:productId", async (req, res) => {
    try {
        const { userId, productId } = req.params;

        const favorite = await Favorite.findOne({
            user: userId,
            product: productId
        });

        res.json({ isFavorited: !!favorite });
    } catch (err) {
        console.error("CHECK FAVORITE ERROR:", err);
        res.status(500).json({ error: "Failed to check favorite status" });
    }
});

/* -----------------------------
   REMOVE FAVORITE
----------------------------- */
router.delete("/:userId/:productId", async (req, res) => {
    try {
        const { userId, productId } = req.params;

        await Favorite.deleteOne({ user: userId, product: productId });

        res.json({ message: "Removed from favorites" });
    } catch (err) {
        console.error("DELETE FAVORITE ERROR:", err);
        res.status(500).json({ error: "Failed to remove favorite" });
    }
});

export default router;

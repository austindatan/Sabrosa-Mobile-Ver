import express from "express";
import Product from "../models/Product.js";
import Brand from "../models/Brand.js";

const router = express.Router();

// Get all products for admin (with full details)
router.get("/products", async (req, res) => {
    try {
        const products = await Product.find({})
            .populate("brand")
            .sort({ createdAt: -1 });

        res.json({ products, total: products.length });
    } catch (err) {
        console.error("Admin get products error:", err);
        res.status(500).json({ message: "Server error" });
    }
});

// Create new product
router.post("/products", async (req, res) => {
    try {
        const { productName, productImages, brand, price, description } = req.body;

        const newProduct = new Product({
            productName,
            productImages,
            brand,
            price,
            description,
        });

        await newProduct.save();
        const populated = await Product.findById(newProduct._id).populate("brand");

        res.status(201).json(populated);
    } catch (err) {
        console.error("Admin create product error:", err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

// Update product
router.put("/products/:id", async (req, res) => {
    try {
        const { productName, productImages, brand, price, description } = req.body;

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { productName, productImages, brand, price, description },
            { new: true }
        ).populate("brand");

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(product);
    } catch (err) {
        console.error("Admin update product error:", err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

// Delete product
router.delete("/products/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json({ message: "Product deleted successfully" });
    } catch (err) {
        console.error("Admin delete product error:", err);
        res.status(500).json({ message: "Server error" });
    }
});

// Get all brands for dropdown
router.get("/brands", async (req, res) => {
    try {
        const brands = await Brand.find({}).sort({ name: 1 });
        res.json(brands);
    } catch (err) {
        console.error("Admin get brands error:", err);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;

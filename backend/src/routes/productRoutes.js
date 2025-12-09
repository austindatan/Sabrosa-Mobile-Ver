import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get all unique brands
router.get("/brands", async (req, res) => {
  try {
    const brands = await Product.distinct("brandName");
    res.json(brands);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Search for products
router.get("/search", async (req, res) => {
  try {
    const query = req.query.q;
    const brand = req.query.brand;

    let filter = {};
    if (query) {
      filter.$or = [
        { productName: { $regex: query, $options: "i" } },
        { brandName: { $regex: query, $options: "i" } },
      ];
    }
    if (brand) {
      filter.brandName = brand;
    }

    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get all products of a brand
router.get("/brand/:brandName", async (req, res) => {
  try {
    const products = await Product.find({
      brandName: req.params.brandName,
    });

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

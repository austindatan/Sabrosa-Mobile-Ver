import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// Get all products with pagination
router.get("/", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 100; // Default limit
    const skip = parseInt(req.query.skip) || 0;
    const sort = req.query.sort || 'createdAt'; // Default sort by newest
    const order = req.query.order === 'asc' ? 1 : -1;

    const products = await Product.find({})
      .sort({ [sort]: order })
      .limit(limit)
      .skip(skip);

    const total = await Product.countDocuments({});

    res.json({
      products,
      total,
      limit,
      skip,
      hasMore: skip + limit < total
    });
  } catch (err) {
    console.error("Get all products error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all unique brands
router.get("/brands", async (req, res) => {
  try {
    const brands = await Product.distinct("brandName");
    res.json(brands);
  } catch (err) {
    console.error("Get brands error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Search for products
router.get("/search", async (req, res) => {
  try {
    const query = req.query.q;
    const brand = req.query.brand;
    const limit = parseInt(req.query.limit) || 50; // Default limit to prevent huge queries

    let filter = {};

    // Use text search if query exists (much faster than regex with text index)
    if (query) {
      filter.$text = { $search: query };
    }

    // Add brand filter if specified
    if (brand) {
      filter.brandName = brand;
    }

    // If using text search, we can sort by relevance score
    const products = query
      ? await Product.find(filter, { score: { $meta: "textScore" } })
        .sort({ score: { $meta: "textScore" } })
        .limit(limit)
      : await Product.find(filter).limit(limit);

    res.json(products);
  } catch (err) {
    console.error("Product search error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all products of a brand
router.get("/brand/:brandName", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 100;
    const products = await Product.find({
      brandName: req.params.brandName,
    }).limit(limit);

    res.json(products);
  } catch (err) {
    console.error("Get brand products error:", err);
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
    console.error("Get product by ID error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

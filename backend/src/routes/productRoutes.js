import express from "express";
import Product from "../models/Product.js";
import Brand from "../models/Brand.js";

const router = express.Router();

// Get all products with pagination
router.get("/", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 100; // Default limit
    const skip = parseInt(req.query.skip) || 0;
    const sort = req.query.sort || 'createdAt'; // Default sort by newest
    const order = req.query.order === 'asc' ? 1 : -1;

    const products = await Product.find({})
      .populate('brand')
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

// Get all unique brands with their images
router.get("/brands", async (req, res) => {
  try {
    const brands = await Brand.find({}).sort({ name: 1 });

    // Format response to match frontend expectations
    const formattedBrands = brands.map(brand => ({
      name: brand.name,
      image: brand.image,
      _id: brand._id
    }));

    res.json(formattedBrands);
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
      // Find brand by name first
      const brandDoc = await Brand.findOne({ name: brand });
      if (brandDoc) {
        filter.brand = brandDoc._id;
      }
    }

    // If using text search, we can sort by relevance score
    const products = query
      ? await Product.find(filter, { score: { $meta: "textScore" } })
        .populate('brand')
        .sort({ score: { $meta: "textScore" } })
        .limit(limit)
      : await Product.find(filter).populate('brand').limit(limit);

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

    // Find brand by name
    const brandDoc = await Brand.findOne({ name: req.params.brandName });
    if (!brandDoc) {
      return res.status(404).json({ message: "Brand not found" });
    }

    const products = await Product.find({ brand: brandDoc._id })
      .populate('brand')
      .limit(limit);

    res.json(products);
  } catch (err) {
    console.error("Get brand products error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('brand');
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

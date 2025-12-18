import express from "express";
import Product from "../models/Product.js";
import Brand from "../models/Brand.js";

const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 100; 
    const skip = parseInt(req.query.skip) || 0;
    const sort = req.query.sort || 'createdAt'; 
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


router.get("/brands", async (req, res) => {
  try {
    const brands = await Brand.find({}).sort({ name: 1 });

    
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


router.get("/search", async (req, res) => {
  try {
    const query = req.query.q;
    const brand = req.query.brand;
    const limit = parseInt(req.query.limit) || 50; 

    let filter = {};

    
    if (query) {
      filter.$text = { $search: query };
    }

    
    if (brand) {
      
      const brandDoc = await Brand.findOne({ name: brand });
      if (brandDoc) {
        filter.brand = brandDoc._id;
      }
    }

    
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


router.get("/brand/:brandName", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 100;

    
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

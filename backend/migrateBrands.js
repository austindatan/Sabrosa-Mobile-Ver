// This script helps convert your old seed.js products to use brand ObjectIds
// Run this AFTER seeding brands with seedBrands.js

import mongoose from "mongoose";
import Product from "./src/models/Product.js";
import Brand from "./src/models/Brand.js";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const migrate = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected.");

        // Get all brands
        const brands = await Brand.find({});
        const brandMap = {};
        brands.forEach(brand => {
            brandMap[brand.name] = brand._id;
        });

        console.log("Available brands:", Object.keys(brandMap));
        console.log("\nBrand ID mapping:");
        Object.entries(brandMap).forEach(([name, id]) => {
            console.log(`  ${name}: ${id}`);
        });

        console.log("\n✅ Migration preparation complete!");
        console.log("\nNext steps:");
        console.log("1. Update your seed.js file");
        console.log("2. Replace 'brandName' with 'brand' (ObjectId)");
        console.log("3. Remove 'brandImage' field from products");
        console.log("4. Use the brand IDs shown above");

        process.exit();
    } catch (err) {
        console.error("Migration error:", err);
        process.exit(1);
    }
};

migrate();

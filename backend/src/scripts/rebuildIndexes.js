import mongoose from "mongoose";
import "dotenv/config.js";

import PaymentMethod from "../models/PaymentMethod.js";
import Cart from "../models/Cart.js";
import Address from "../models/Address.js";
import Order from "../models/Order.js";
import Product from "../models/Product.js";
import User from "../models/User.js";
import Favorite from "../models/Favorite.js";
import Brand from "../models/Brand.js";

const rebuildIndexes = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ Connected to MongoDB");

        console.log("\n🔨 Rebuilding indexes...\n");

        console.log("📦 PaymentMethod collection:");
        try {
            await PaymentMethod.collection.dropIndexes();
        } catch (e) {
            console.log("   (No existing indexes to drop)");
        }
        await PaymentMethod.createIndexes();
        const pmIndexes = await PaymentMethod.collection.getIndexes();
        console.log("   Indexes:", Object.keys(pmIndexes).join(", "));

        console.log("\n🛒 Cart collection:");
        try {
            await Cart.collection.dropIndexes();
        } catch (e) {
            console.log("   (No existing indexes to drop)");
        }
        await Cart.createIndexes();
        const cartIndexes = await Cart.collection.getIndexes();
        console.log("   Indexes:", Object.keys(cartIndexes).join(", "));

        console.log("\n📍 DeliveryAddress collection:");
        try {
            await Address.collection.dropIndexes();
        } catch (e) {
            console.log("   (No existing indexes to drop)");
        }
        await Address.createIndexes();
        const addressIndexes = await Address.collection.getIndexes();
        console.log("   Indexes:", Object.keys(addressIndexes).join(", "));

        console.log("\n📋 Order collection:");
        try {
            await Order.collection.dropIndexes();
        } catch (e) {
            console.log("   (No existing indexes to drop)");
        }
        await Order.createIndexes();
        const orderIndexes = await Order.collection.getIndexes();
        console.log("   Indexes:", Object.keys(orderIndexes).join(", "));

        console.log("\n🛍️  Product collection:");
        try {
            await Product.collection.dropIndexes();
        } catch (e) {
            console.log("   (No existing indexes to drop)");
        }
        await Product.createIndexes();
        const productIndexes = await Product.collection.getIndexes();
        console.log("   Indexes:", Object.keys(productIndexes).join(", "));

        console.log("\n👤 User collection:");
        try {
            await User.collection.dropIndexes();
        } catch (e) {
            console.log("   (No existing indexes to drop)");
        }
        await User.createIndexes();
        const userIndexes = await User.collection.getIndexes();
        console.log("   Indexes:", Object.keys(userIndexes).join(", "));

        console.log("\n❤️  Favorite collection:");
        try {
            await Favorite.collection.dropIndexes();
        } catch (e) {
            console.log("   (No existing indexes to drop)");
        }
        await Favorite.createIndexes();
        const favoriteIndexes = await Favorite.collection.getIndexes();
        console.log("   Indexes:", Object.keys(favoriteIndexes).join(", "));

        console.log("\n🏷️  Brand collection:");
        try {
            await Brand.collection.dropIndexes();
        } catch (e) {
            console.log("   (No existing indexes to drop)");
        }
        await Brand.createIndexes();
        const brandIndexes = await Brand.collection.getIndexes();
        console.log("   Indexes:", Object.keys(brandIndexes).join(", "));

        console.log("\n✅ All indexes rebuilt successfully!");
        console.log("\n📊 Summary:");
        console.log("   - PaymentMethod:", Object.keys(pmIndexes).length, "indexes");
        console.log("   - Cart:", Object.keys(cartIndexes).length, "indexes");
        console.log("   - Address:", Object.keys(addressIndexes).length, "indexes");
        console.log("   - Order:", Object.keys(orderIndexes).length, "indexes");
        console.log("   - Product:", Object.keys(productIndexes).length, "indexes");
        console.log("   - User:", Object.keys(userIndexes).length, "indexes");
        console.log("   - Favorite:", Object.keys(favoriteIndexes).length, "indexes");
        console.log("   - Brand:", Object.keys(brandIndexes).length, "indexes");

        await mongoose.connection.close();
        console.log("\n✅ MongoDB connection closed");
        process.exit(0);
    } catch (error) {
        console.error("❌ Error rebuilding indexes:", error);
        await mongoose.connection.close();
        process.exit(1);
    }
};

rebuildIndexes();


import mongoose from "mongoose";
import Order from "./src/models/Order.js";
import Favorite from "./src/models/Favorite.js";
import Cart from "./src/models/Cart.js";
import dotenv from "dotenv";

dotenv.config();

const clearOldData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected.");

        
        await Order.deleteMany({});
        console.log("✅ All orders cleared");

        await Favorite.deleteMany({});
        console.log("✅ All favorites cleared");

        await Cart.deleteMany({});
        console.log("✅ All carts cleared");

        console.log("\n🎉 Old data cleared! You can now test with fresh data.");

        process.exit();
    } catch (err) {
        console.error("Error:", err);
        process.exit(1);
    }
};

clearOldData();

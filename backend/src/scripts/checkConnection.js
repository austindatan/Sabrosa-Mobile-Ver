import mongoose from "mongoose";
import "dotenv/config.js";

const checkConnection = async () => {
    try {
        console.log("Connecting to MongoDB...");
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Connected successfully!");

        const db = mongoose.connection.db;
        const collections = await db.listCollections().toArray();

        console.log("\n📚 Available collections:");
        collections.forEach(col => {
            console.log(`   - ${col.name}`);
        });

        await mongoose.connection.close();
        console.log("\n✅ Connection closed");
        process.exit(0);
    } catch (error) {
        console.error("❌ Error:", error);
        process.exit(1);
    }
};

checkConnection();

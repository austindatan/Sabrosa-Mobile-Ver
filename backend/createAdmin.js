import mongoose from "mongoose";
import User from "./src/models/User.js";
import dotenv from "dotenv";

dotenv.config();

const createAdminUser = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected.");

        // Check if admin already exists
        const existingAdmin = await User.findOne({ email: "admin@sabrosa.com" });

        if (existingAdmin) {
            console.log("❌ Admin user already exists!");
            console.log("Email: admin@sabrosa.com");
            console.log("\nIf you forgot the password, delete this user and run the script again.");
            process.exit();
        }

        // Create admin user
        const adminUser = new User({
            firstName: "Admin",
            lastName: "User",
            email: "admin@sabrosa.com",
            password: "admin123", // This will be hashed automatically by the User model
            birthday: "01/01/2000",
            number: "1234567890",
        });

        await adminUser.save();

        console.log("✅ Admin user created successfully!");
        console.log("\n📧 Email: admin@sabrosa.com");
        console.log("🔑 Password: admin123");
        console.log("\n⚠️  Please change this password after first login!");

        process.exit();
    } catch (err) {
        console.error("Error creating admin user:", err);
        process.exit(1);
    }
};

createAdminUser();

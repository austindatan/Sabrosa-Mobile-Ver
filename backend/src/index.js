import express from "express";
import "dotenv/config.js";
import authRoutes from "./routes/authRoutes.js";
import { connect } from "mongoose";
import { connectDB } from "./lib/db.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} yeah? raelly?`);
    connectDB();
});

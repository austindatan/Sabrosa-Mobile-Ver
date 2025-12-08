import express from "express";
import "dotenv/config.js";
import { connect } from "mongoose";
import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import checkoutRoutes from "./routes/checkoutRoutes.js";
import addressRoutes from "./routes/addressRoutes.js";
import paymentMethodRoutes from "./routes/paymentMethodRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/payment", paymentMethodRoutes);
app.use("/api/order", orderRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} yeah? raelly?`);
    connectDB();
});

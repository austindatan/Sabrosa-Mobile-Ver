import express from "express";
import "dotenv/config.js";
import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import checkoutRoutes from "./routes/checkoutRoutes.js";
import addressRoutes from "./routes/addressRoutes.js";
import paymentMethodRoutes from "./routes/paymentMethodRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import favoriteRoutes from "./routes/favoriteRoutes.js";
import editProfileRoute from './routes/editProfileRoute.js';
import adminRoutes from './routes/adminRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Main routes
app.use("/api/auth", authRoutes);             // e.g., login, register
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/payment", paymentMethodRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/favorites", favoriteRoutes);

// Edit profile route now RESTful
app.use('/api/auth/users', editProfileRoute);  // <-- changed from /edit-profile

// Admin routes
app.use('/api/admin', adminRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});

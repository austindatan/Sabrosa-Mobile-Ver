import mongoose from "mongoose";
import Product from "./src/models/Product.js";
import dotenv from "dotenv";

dotenv.config();

const seedProducts = [
  {
    productName: "Tropical Mango & Passionfruit",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1764151254/product1_grtbhw.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1764151311/passionfruit1_fyqqra.jpg",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1764151311/passionfruit2_jxkire.jpg"
    ],
    brandName: "Sugarfina",
    brandImage: "https://res.cloudinary.com/dldwg8flq/image/upload/v1764151210/sugarfina_uthnhi.png",
    price: 195,
    description: "A refreshing tropical cookie infused with mango and passionfruit."
  },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected.");

    await Product.deleteMany();
    console.log("Old products removed.");

    await Product.insertMany(seedProducts);
    console.log("Products added successfully!");

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();

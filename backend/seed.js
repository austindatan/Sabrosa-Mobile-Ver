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
    brandName: "ByronBay",
    brandImage: "https://res.cloudinary.com/dldwg8flq/image/upload/v1764590952/byronbay_logo_wgngyl.png",
    price: 195,
    description: [
      "Escape to the tropics with flavours of coconut coupled with mango and passionfruit jellies. /",  
      "Individually wrapped for convenience, each Byron Bay Wrapped Cafe Cookie delivers a taste of Byron in every bite. Available as an individually wrapped 55g cookie or as a dozen individually wrapped 55g cookies in a cookie box. Featuring unique artwork from Australian artist Chloe Joyce. /", 
      "Designed with cafes in mind, the Byron Bay Cookie display box is your ultimate cookie stash! Showcase your cookies at home or at work, and wherever else cookie cravings may arise. /",  
      "A refreshing tropical cookie infused with mango and passionfruit. /",
      " ",
    ],
  },
  {
    productName: "Milk Choc Chunk Cookie",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1764596174/MilkChocChunkCookie_diwa4y.jpg",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1764596274/WhiteChocMacadamiaCookie3_oph9vk.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1764596321/SW-S-WCM_20230706_3393_o99tkw.jpg"
    ],
    brandName: "ByronBay",
    brandImage: "https://res.cloudinary.com/dldwg8flq/image/upload/v1764590952/byronbay_logo_wgngyl.png",
    price: 235,
    description: [
      "This classic doughnut is generously filled with rich chocolate chunks and glazed to golden perfection. /",
      "Best enjoyed with your favorite coffee, it is the perfect blend of sweetness and comfort. /",
      "Each doughnut is crafted fresh for that irresistible melt-in-your-mouth goodness every time. /",
      " ",
    ],
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

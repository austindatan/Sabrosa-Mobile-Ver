import mongoose from "mongoose";
import Product from "./src/models/Product.js";
import Brand from "./src/models/Brand.js";
import dotenv from "dotenv";

dotenv.config();


const brandsData = [
    { name: "Bluestar", image: "https://res.cloudinary.com/dldwg8flq/image/upload/v1765197123/bluestar_ksrxog.png" },
    { name: "ByronBay", image: "https://res.cloudinary.com/dldwg8flq/image/upload/v1764590952/byronbay_logo_wgngyl.png" },
    { name: "Chobani", image: "https://res.cloudinary.com/dldwg8flq/image/upload/v1765197108/chobani_fch25l.png" },
    { name: "Compartes", image: "https://res.cloudinary.com/dldwg8flq/image/upload/v1765197109/compartes_qcepyc.png" },
    { name: "Graze", image: "https://res.cloudinary.com/dldwg8flq/image/upload/v1765197109/graze_l17wrr.png" },
    { name: "KrispyKreme", image: "https://res.cloudinary.com/dldwg8flq/image/upload/v1765349521/KrispyKreme_ovwgzy.png" },
    { name: "Laduree", image: "https://res.cloudinary.com/dldwg8flq/image/upload/v1765197109/laduree_swgfhe.png" },
    { name: "Olipop", image: "https://res.cloudinary.com/dldwg8flq/image/upload/v1765197113/olipop_black_j5vpqj.png" },
    { name: "Sugarfina", image: "https://res.cloudinary.com/dldwg8flq/image/upload/v1764151210/sugarfina_uthnhi.png" },
    { name: "SweetsParadise", image: "https://res.cloudinary.com/dldwg8flq/image/upload/v1765197118/sweets_logo_w3opmf.png" },
    { name: "TeaForte", image: "https://res.cloudinary.com/dldwg8flq/image/upload/v1765197119/tea_logo_ksqque.png" },
];

const seed = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected.");

        
        await Product.deleteMany();
        await Brand.deleteMany();
        console.log("Old data removed.");

        
        const createdBrands = await Brand.insertMany(brandsData);
        console.log(`${createdBrands.length} brands added successfully!`);

        
        const brandMap = {};
        createdBrands.forEach(brand => {
            brandMap[brand.name] = brand._id;
        });

        console.log("Brand map created:", Object.keys(brandMap));
        console.log("\nNow run the migration script to update products with brand references.");
        console.log("The products from your old seed.js need to be updated to use brand ObjectIds.");

        process.exit();
    } catch (err) {
        console.error("Seeding error:", err);
        process.exit(1);
    }
};

seed();

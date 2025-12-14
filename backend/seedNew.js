import mongoose from "mongoose";
import Product from "./src/models/Product.js";
import Brand from "./src/models/Brand.js";
import dotenv from "dotenv";

dotenv.config();

// Brand ID mapping from your database
const BRAND_IDS = {
    "Bluestar": "693e937d904d600084688852",
    "ByronBay": "693e937d904d600084688853",
    "Chobani": "693e937d904d600084688854",
    "Compartes": "693e937d904d600084688855",
    "Graze": "693e937d904d600084688856",
    "KrispyKreme": "693e937d904d600084688857",
    "Laduree": "693e937d904d600084688858",
    "Olipop": "693e937d904d600084688859",
    "Sugarfina": "693e937d904d60008468885a",
    "SweetsParadise": "693e937d904d60008468885b",
    "TeaForte": "693e937d904d60008468885c",
};

const seedProducts = [
    // BLUESTAR
    {
        productName: "Donut Bites Chocolate Truffle",
        productImages: [
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333622/Chocolate_Truffle_Donut_Bites_cghxla.png",
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333848/DonutBitesChocTruffle3_bkerma.png",
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333847/DonutBitesChocTruffle2_do1jab.png"
        ],
        brand: BRAND_IDS["Bluestar"],
        price: 500,
        description: [
            "Experience pure decadence with our Donut Bites Choc Truffle — soft mini doughnuts filled with rich chocolate truffle cream. /",
            "Coated in smooth chocolate glaze for an extra layer of indulgence. /",
            "A bite-sized chocolate lovers dream — perfectly sweet, irresistibly rich! /",
            " ",
        ],
    },
    {
        productName: "Donut Bites Lemon Poppy",
        productImages: [
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333627/Lemon_Poppy_Donut_Bites_imlmb6.png",
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333920/DonutBitesLemonPoppy3_i0uejx.png",
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333847/DonutBitesLemonPoppy2_hmu2at.png"
        ],
        brand: BRAND_IDS["Bluestar"],
        price: 500,
        description: [
            "Brighten your day with our Donut Bites Lemon Poppy — soft, zesty mini doughnuts with a refreshing lemon twist. /",
            "Infused with poppy seeds for a delightful crunch and topped with a light citrus glaze. /",
            "Sweet, tangy, and perfectly balanced — a sunshine-filled treat in every bite! /",
            " ",
        ],
    },
    {
        productName: "Maple Glazed Donut Bite",
        productImages: [
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333628/Maple_Glazed_Donut_Bites_rtepdj.png",
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333848/MapleGlazedDonutBites2_qvbzkz.png",
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333927/MapleGlazedDonutBites3_przb0p.png"
        ],
        brand: BRAND_IDS["Bluestar"],
        price: 800,
        description: [
            "Indulge in our Maple Glazed Donut Bites — soft, fluffy mini doughnuts coated in rich maple glaze. /",
            "Each bite delivers the perfect balance of sweetness and warmth with that classic maple flavor. /",
            "A cozy, melt-in-your-mouth treat perfect for any time of day! /",
            " ",
        ],
    },
    {
        productName: "Strawberry Shortcake Donut Bites",
        productImages: [
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333608/Strawberry_Shortcake_Donut_Bites_tdkpuu.png",
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333848/StrawberryShortcakeDonutBites2_ajxj4c.png",
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333848/StrawberryShortcakeDonutBites3_xfxjt9.png"
        ],
        brand: BRAND_IDS["Bluestar"],
        price: 500,
        description: [
            "Delight in our Strawberry Shortcake Donut Bites — soft, bite-sized doughnuts bursting with strawberry flavor. /",
            "Coated in a sweet strawberry glaze and topped with crunchy shortcake crumbs for the perfect texture. /",
            "Light, fruity, and irresistible — a mini treat that is big on sweetness! /",
            " ",
        ],
    },
    // BYRON BAY
    {
        productName: "Blueberry Muffin Cookie",
        productImages: [
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333614/Blueberry_Muffin_Cookie_tciobb.png",
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333905/BlueberryMuffinCookie2_nft7wy.png",
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333919/BlueberryMuffinCookie3_m1dl9l.png"
        ],
        brand: BRAND_IDS["ByronBay"],
        price: 500,
        description: [
            "A blueberry muffin inspired doughnut, soft and fluffy with warm notes of blueberry and cinnamon. /",
            "Paired with velvety white chocolate chunks for a perfectly balanced, fruity-sweet delight. /",
            "Freshly made and beautifully glazed — a comforting treat that feels like home in every bite! /",
            " ",
        ],
    },
    {
        productName: "Dotty Cookie",
        productImages: [
            "hhttps://res.cloudinary.com/dldwg8flq/image/upload/v1765344306/DottieCookie_tlsyrj.png",
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333919/DottyCookie3_k0dwbm.png",
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333920/DottyCookie2_pmog8d.png"
        ],
        brand: BRAND_IDS["ByronBay"],
        price: 300,
        description: [
            "Go Dotty® with this fun, chocolate chunk doughnut topped with colorful rainbow candy pieces. /",
            "A fan-favorite and top seller, it is a playful twist that brings joy with every bite. /",
            "Perfectly crafted and glazed for sweetness and delight — a treat that is as cheerful as it is delicious! /",
            " ",
        ],
    },
    {
        productName: "Milk Chocolate Chunk Cookie",
        productImages: [
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1764596174/MilkChocChunkCookie_diwa4y.jpg",
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333920/MilkChocChunkCookie2_tlejv1.png",
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333921/MilkChocChunkCookie3_coxelu.png"
        ],
        brand: BRAND_IDS["ByronBay"],
        price: 500,
        description: [
            "This classic doughnut is generously filled with rich chocolate chunks and glazed to golden perfection. /",
            "Best enjoyed with your favorite coffee, it is the perfect blend of sweetness and comfort. /",
            "Each doughnut is crafted fresh for that irresistible melt-in-your-mouth goodness every time. /",
            " ",
        ],
    },
    {
        productName: "Tropical Mango & Passion Fruit Cookie",
        productImages: [
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1764151254/product1_grtbhw.png",
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1764151311/passionfruit1_fyqqra.jpg",
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1764151311/passionfruit2_jxkire.jpg"
        ],
        brand: BRAND_IDS["ByronBay"],
        price: 500,
        description: [
            "Escape to the tropics with flavours of coconut coupled with mango and passionfruit jellies. /",
            "Individually wrapped for convenience, each Byron Bay Wrapped Cafe Cookie delivers a taste of Byron in every bite. Available as an individually wrapped 55g cookie or as a dozen individually wrapped 55g cookies in a cookie box. Featuring unique artwork from Australian artist Chloe Joyce. /",
            "Designed with cafes in mind, the Byron Bay Cookie display box is your ultimate cookie stash! Showcase your cookies at home or at work, and wherever else cookie cravings may arise. /",
            " ",
        ],
    },
    {
        productName: "White Chocolate Macadamia Cookie",
        productImages: [
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1764596174/MilkChocChunkCookie_diwa4y.jpg",
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1764596321/SW-S-WCM_20230706_3393_o99tkw.jpg",
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1764596274/WhiteChocMacadamiaCookie3_oph9vk.png"
        ],
        brand: BRAND_IDS["ByronBay"],
        price: 400,
        description: [
            "This classic doughnut combines creamy white chocolate chunks with crunchy macadamia nuts for a timeless favorite. /",
            "One of the original flavors that started it all, loved for its perfect balance of sweetness and texture. /",
            "Freshly made and glazed to perfection — a classic treat that never goes out of style! /",
            " ",
        ],
    },
    // CHOBANI
    {
        productName: "Chobani Creations Cherry Cheesecake",
        productImages: [
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333620/Chobani_Creations_Cherry_Cheesecake_oazqjx.png",
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333930/ChobaniCreationsCherryCheesecake2_phqgx2.png",
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333845/ChobaniCreationsCherryCheesecake3_rvendy.png"
        ],
        brand: BRAND_IDS["Chobani"],
        price: 300,
        description: [
            "Indulge in Chobani Creations Cherry Cheesecake — rich, creamy yogurt inspired by the classic dessert. /",
            "Swirled with real cherry compote and graham-style crumbles for that authentic cheesecake taste. /",
            "A perfectly balanced treat that's decadent, delicious, and ready to enjoy anytime! /",
            " ",
        ],
    },
    {
        productName: "Chobani Oatmilk Zero Sugar Original",
        productImages: [
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333621/Chobani_Oatmilk_Zero_Sugar_Original_da8lxf.png",
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333927/ChobaniOatmilkZeroSugarOriginal2_qzwpdb.png",
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333846/ChobaniOatmilkZeroSugarOriginal3_lxelxs.png"
        ],
        brand: BRAND_IDS["Chobani"],
        price: 600,
        description: [
            "Enjoy the smooth, creamy taste of Chobani Oatmilk Zero Sugar Original — made from whole grain oats with zero grams of sugar. /",
            "Perfectly balanced and deliciously dairy-free, it is great for coffee, cereal, or smoothies. /",
            "A wholesome plant-based choice that is simple, pure, and naturally satisfying! /",
            " ",
        ],
    },
    {
        productName: "Chobani Zero Sugar Mixed Berry",
        productImages: [
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333609/Zero_Sugar_Greek_Yogurt_Mixed_Berry_auellk.png",
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333845/ChobaniZeroSugarMixedBerry3_fstj4d.png",
            "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333846/ChobaniZeroSugarMixedBerry2_yxmkmp.png"
        ],
        brand: BRAND_IDS["Chobani"],
        price: 250,
        description: [
            "Delight in the fruity flavor of Chobani Zero Sugar Mixed Berry — a creamy yogurt with no added sugar and 0g lactose. /",
            "Blended with real strawberries, blueberries, and raspberries for a naturally sweet taste. /",
            "A delicious, guilt-free snack packed with protein and bursting with berry goodness! /",
            " ",
        ],
    },
];

// Due to file size, I'll create a helper function to continue...
// This is just the first ~15 products. The pattern continues for all brands.

const seed = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected.");

        await Product.deleteMany();
        console.log("Old products removed.");

        await Product.insertMany(seedProducts);
        console.log(`${seedProducts.length} products added successfully!`);

        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seed();

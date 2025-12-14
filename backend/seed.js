import mongoose from "mongoose";
import Product from "./src/models/Product.js";
import dotenv from "dotenv";

dotenv.config();

const seedProducts = [
  // BLUESTAR
  {
    productName: "Donut Bites Chocolate Truffle",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333622/Chocolate_Truffle_Donut_Bites_cghxla.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333848/DonutBitesChocTruffle3_bkerma.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333847/DonutBitesChocTruffle2_do1jab.png"
    ],
    brand: "693e937d904d600084688852",
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
    brand: "693e937d904d600084688852",
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
    brand: "693e937d904d600084688852",
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
    brand: "693e937d904d600084688852",
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
    brand: "693e937d904d600084688853",
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
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765344306/DottieCookie_tlsyrj.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333919/DottyCookie3_k0dwbm.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333920/DottyCookie2_pmog8d.png"
    ],
    brand: "693e937d904d600084688853",
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
    brand: "693e937d904d600084688853",
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
    brand: "693e937d904d600084688853",
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
    brand: "693e937d904d600084688853",
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
    brand: "693e937d904d600084688854",
    price: 300,
    description: [
      "Indulge in Chobani Creations Cherry Cheesecake — rich, creamy yogurt inspired by the classic dessert. /",
      "Swirled with real cherry compote and graham-style crumbles for that authentic cheesecake taste. /",
      "A perfectly balanced treat that’s decadent, delicious, and ready to enjoy anytime! /",
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
    brand: "693e937d904d600084688854",
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
    brand: "693e937d904d600084688854",
    price: 250,
    description: [
      "Delight in the fruity flavor of Chobani Zero Sugar Mixed Berry — a creamy yogurt with no added sugar and 0g lactose. /",
      "Blended with real strawberries, blueberries, and raspberries for a naturally sweet taste. /",
      "A delicious, guilt-free snack packed with protein and bursting with berry goodness! /",
      " ",
    ],
  },
  // COMPARTES
  {
    productName: "Cereal Bowl Gourmet Chocolate Bar",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333617/Cereal_Bowl_Gourmet_Chocolate_Bar_vrkghz.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333818/CerealBowlGourmetChocolateBar2_tji7kw.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333818/CerealBowlGourmetChocolateBar3_rnihzp.png"
    ],
    brand: "693e937d904d600084688855",
    price: 500,
    description: [
      "Start your day the sweet way with the Cereal Bowl Gourmet Chocolate Bar — creamy milk chocolate blended with crunchy cereal pieces. /",
      "Each bite delivers a nostalgic mix of breakfast crunch and smooth chocolate indulgence. /",
      "Fun, flavorful, and irresistibly unique — a true treat for cereal and chocolate lovers alike! /",
      " ",
    ],
  },
  {
    productName: "Dubai Pistachio Knafeh Chocolate Eggs",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765346195/DubaiPistachioKnafehChocolateEggs_fs51ag.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333955/DubaiPistachioKnafehChocolateEggs2_hl7pjy.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333937/DubaiPistachioKnafehChocolateEggs3_zyxzcm.png"
    ],
    brand: "693e937d904d600084688855",
    price: 1500,
    description: [
      "Experience luxury with Dubai Pistachio Knafeh Chocolate Eggs — a decadent fusion of Middle Eastern flavor and fine chocolate craftsmanship.",
      "Each egg is filled with layers of rich pistachio cream and crispy knafeh for a unique, indulgent bite.",
      "A perfect balance of texture and taste — elegant, exotic, and unforgettable.",
      " ",
    ],
  },
  {
    productName: "Signature Truffles",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333627/Luxury_Gourmet_Chocolate_Mix_nyxdph.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765334152/SignatureTruffles3_mgh7cz.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333989/SignatureTruffles2_lwnxfo.png"
    ],
    brand: "693e937d904d600084688855",
    price: 2000,
    description: [
      "Indulge in Jonathan Signature Truffles — Compartés Chocolatiers best-selling gourmet creation. /",
      "Handmade in the European tradition with rich chocolate ganache and seasonal ingredients for a truly artistic taste experience. /",
      "Exotic, elegant, and preservative-free, each box offers a unique assortment of 10 to 20 decadent truffle flavors — the perfect gift for any occasion! /",
      " ",
    ],
  },
  {
    productName: "Strawberry Shortcake Chocolate Bar",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333606/Strawberry_Shortcake_Chocolate_Bar_djfw8g.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333932/StrawberryShortcakeChocolateBar2_gc2yzd.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765334154/StrawberryShortcakeChocolateBar3_g3kyhg.png"
    ],
    brand: "693e937d904d600084688855",
    price: 800,
    description: [
      "Delight in the sweetness of the Strawberry Shortcake Chocolate Bar — creamy white chocolate infused with real strawberry flavor. /",
      "Studded with crunchy shortcake pieces for the perfect mix of texture and sweetness. /",
      "A playful, indulgent treat that tastes just like dessert in every bite! /",
      " ",
    ],
  },
  // GRAZE
  {
    productName: "Cherry Bakewell Oat Boosts",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333618/Cherry_Bakewell_Oak_Boosts_l8bsvw.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333847/CherryBakewellOatBoosts2_ex8l0i.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333851/CherryBakewellOatBoosts3_sxnowl.png"
    ],
    brand: "693e937d904d600084688856",
    price: 1000,
    description: [
      "Enjoy our Cherry Bakewell Oat Boosts — a delicious blend of juicy cherries, toasted oats, and a hint of almond sweetness. /",
      "Soft, chewy, and packed with wholesome flavor for an energy-filled bite. /",
      "A perfect on-the-go treat that combines classic Bakewell charm with nourishing goodness! /",
      " ",
    ],
  },
  {
    productName: "Honey Oat Boosts",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765347479/HoneyOatBoosts_ze79hc.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333928/HoneyOatBoosts2_etuzin.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333845/HoneyOatBoosts3_es04c3.png"
    ],
    brand: "693e937d904d600084688856",
    price: 1000,
    description: [
      "Fuel your day with Honey Oat Boosts — a wholesome blend of golden honey and hearty oats. /",
      "Soft, chewy, and naturally sweet, they are perfect for an energy boost anytime. /",
      "A simple, delicious snack that is as nourishing as it is satisfying! /",
      " ",
    ],
  },
  {
    productName: "Smoky Barbecue Crunch",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765347720/SmokyBarbecueCrunch_vgs2xy.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765334153/SmokyBarbecueCrunch2_ddlonw.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333919/SmokyBarbecueCrunch3_kd2gcd.png"
    ],
    brand: "693e937d904d600084688856",
    price: 500,
    description: [
      "Turn up the flavor with Smoky Barbecue Crunch — a bold, savory snack packed with irresistible BBQ goodness. /",
      "Each bite delivers the perfect mix of smoky, sweet, and salty for a truly satisfying crunch. /",
      "Perfect for snacking anytime — bring the barbecue vibes wherever you go! /",
      " ",
    ],
  },
  {
    productName: "Sweet Chilli Crunch",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765347912/SweetChilli_fkqv8y.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333845/SweetChilliCrunch2_oomeks.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765334153/SweetChilliCrunch3_apsx7j.png",
      " ",
    ],
    brand: "693e937d904d600084688856",
    price: 500,
    description: [
      "Spice up your snack time with Sweet Chilli Crunch — a fiery blend of sweetness and heat in every bite. /",
      "Each crisp piece is coated with a tangy chilli seasoning for that perfect kick. /",
      "Bold, flavorful, and addictive — the ultimate snack for spice lovers! /",
      " ",
    ],
  },
  // KRISPY KREME
  {
    productName: "Biscoff Latte",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765348441/BiscoffLatte_yiymdr.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333921/BiscoffLatte2_zfcvvb.jpg",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333920/BiscoffLatte3_kliwbb.jpg",
      " ",
    ],
    brand: "693e937d904d600084688857",
    price: 800,
    description: [
      "A rich caramel toffee-inspired latte blended to perfection for a smooth, golden treat. /",
      "Topped with whipped kreme, cookie crumble, and a touch of golden shimmer sugar for extra indulgence.  /",
      "Available in hot, iced, or frozen — your perfect sip for any mood! /",
      " ",
    ],
  },
  {
    productName: "Churro Donut",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765349248/ChurroDonut_s5cgd9.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333921/ChurroDonut2_fixlul.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333921/ChurroDonut3_smoww0.jpg",
      " ",
    ],
    brand: "693e937d904d600084688857",
    price: 800,
    description: [
      "A C-shaped unglazed doughnut coated in your choice of cinnamon-sugar or classic sugar for that extra crunch. /",
      "Each box of 6 includes 4 churro doughnuts, 2 sugar doughnuts, and 3 irresistible dips — Matcha, Dark Chocolate, and White Chocolate. /",
      "Perfect for sharing or treating yourself, this delightful mix brings sweetness and fun to every bite! /",
      " ",
    ],
  },
  {
    productName: "Glazed Donut",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333611/1_Dozen_Original_Glazed_Donuts_hpgi5n.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333926/GlazedDonut3_m6o7mv.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333926/GlazedDonut2_jbvexr.png",
      " ",
    ],
    brand: "693e937d904d600084688857",
    price: 800,
    description: [
      "Indulge in melt-in-your-mouth goodness with our world-famous Original Glazed® Doughnuts — soft, sweet, and perfectly glazed. /",
      "Enjoy 12 pieces of pure delight in every box, handcrafted fresh daily for that iconic Krispy Kreme taste. /",
      "OG Card holders, treat yourself! Get a free Box of 6 Original Glazed® Doughnuts when you purchase a Dozen Original Glazed® Doughnuts. /",
      " ",
    ],
  },
  {
    productName: "Original Lemonade",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765349786/Original_Lemonade_uyjj0f.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333845/OriginalLemonade2_mytfyt.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333924/OriginalLemonade3_rjwlbw.jpg",
      " ",
    ],
    brand: "693e937d904d600084688857",
    price: 150,
    description: [
      "A refreshing iced-blended drink bursting with zesty lemonade flavor. /",
      "Perfectly chilled to quench your thirst and keep you cool all summer long. /",
      "Enjoy the Frozen Original Lemonade — your ultimate summer refreshment! /",
      " ",
    ],
  },
  {
    productName: "Signature Brewed Coffee",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765350123/Signature_Brewed_Coffee_qarbdx.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333921/SignatureBrewedCoffee2_glwde4.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333926/SignatureBrewedCoffee3_w7xvdr.png",
      " ",
    ],
    brand: "693e937d904d600084688857",
    price: 250,
    description: [
      "A rich caramel toffee-inspired latte blended to perfection for a smooth, golden treat.",
      "Topped with whipped kreme, cookie crumble, and a touch of golden shimmer sugar for extra indulgence.",
      "Available in hot, iced, or frozen — your perfect sip for any mood!",
      " ",
    ],
  },
  {
    productName: "Signature Mocha",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765350249/Signature_Mocha_p3mrl6.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333920/SignatureMocha2_jpjfu7.jpg",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333928/SignatureMocha3_cqo5jh.png",
      " ",
    ],
    brand: "693e937d904d600084688857",
    price: 250,
    description: [
      "An iced coffee crafted with rich signature espresso, smooth milk, and decadent chocolate syrup.",
      "Blended with our special cream mixture for a velvety, indulgent finish.",
      "Enjoy creamy goodness in every sip — the perfect pick-me-up anytime!",
      " ",
    ],
  },
  // LADUREE
  {
    productName: "Laduree Macaroons",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765350549/Laduree_Macaroons_sjrnhm.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333920/LadureeMacaroons2_mszzud.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333931/LadureeMacaroons3_oyb63d.png",
      " ",
    ],
    brand: "693e937d904d600084688858",
    price: 2000,
    description: [
      "Experience timeless Parisian indulgence with Ladurée Macarons — a luxurious selection of 24 iconic flavors like chocolate, vanilla, raspberry, and pistachio. /",
      "Each delicate shell is crafted with almonds, rich cream, and natural flavors for the perfect balance of texture and sweetness. /",
      "Elegantly presented in the signature green box — a true taste of French sophistication in every bite! /",
      " ",
    ],
  },
  {
    productName: "Laduree VA Marie Antoinette Collection",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765350850/Laduree_VA_Marie_Antoinette_Collection_ms9yx5.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333928/LadureeVAMarieAntoinetteCollection2_dd8kkj.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765350941/LadureeVAMarieAntoinetteCollection3_ehoi1y.png",
      " ",
    ],
    brand: "693e937d904d600084688858",
    price: 2500,
    description: [
      "Celebrate art and elegance with the Ladurée x V&A Collection — inspired by the grace and grandeur of Marie Antoinette. /",
      "Featuring exquisitely crafted macarons in pastel hues and delicate flavors fit for royalty. /",
      "A decadent collaboration that captures the spirit of French luxury and timeless sophistication. /",
      " ",
    ],
  },
  {
    productName: "Laduree x Bridgerton Macaron Box",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765351993/LadureexBridgertonMacaronBox_xs5kr7.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765334154/LadureexBridgertonMacaronBox2_rktuue.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765334153/LadureexBridgertonMacaronBox3_nz7gdh.png",
      " ",
    ],
    brand: "693e937d904d600084688858",
    price: 3000,
    description: [
      "Experience elegance with the Ladurée x Bridgerton Macaron Box — a regal collaboration inspired by timeless romance and royal indulgence. /",
      "Featuring an exquisite selection of Ladurée signature macarons in delicate, Bridgerton-inspired flavors and hues. /",
      "Perfectly packaged for gifting or savoring — a luxurious treat worthy of high society. /",
      " ",
    ],
  },
  {
    productName: "Langues de Chat Gift Box Dark Milk Chocolate",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765354894/Langues_de_Chat_Gift_Box_Dark_Milk_Chocolate_ryqxku.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333837/LanguesdeChatGiftBoxDarkMilkChocolate2_vzu1q7.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333819/LanguesdeChatGiftBoxDarkMilkChocolate3_uwkaeq.png",
      " ",
    ],
    brand: "693e937d904d600084688858",
    price: 1500,
    description: [
      "Delight in the timeless charm of Langues de Chat — delicately crisp biscuits with a golden edge and light, airy texture. /",
      "Each piece is coated in rich dark chocolate and smooth milk chocolate for the perfect harmony of sweetness and cocoa depth. /",
      "Beautifully presented in a gift box, it is an elegant treat to enjoy with tea, coffee, or on its own. /",
      " ",
    ],
  },
  // OLIPOP
  {
    productName: "Barbie Peaches & Cream",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765197053/BARBIE_Peaches_Cream_Soda_l7kcue.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765197083/BarbiePeachesAndCream2_kolmqu.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765197083/BarbiePeachesAndCream3_xt9ml0.png",
      " ",
    ],
    brand: "693e937d904d600084688859",
    price: 500,
    description: [
      "Embrace the sweetness of Barbie Peaches and Cream — a dreamy chocolate bar inspired by classic nostalgia and modern glamour. /",
      "Blended with creamy white chocolate, juicy peach flavor, and a touch of sparkle for that signature Barbie magic. /",
      "Pretty, playful, and irresistibly smooth — a treat as iconic as Barbie herself! /",
      " ",
    ],
  },
  {
    productName: "Classic Root Beer",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765359140/ClassicRootBeer_ayrvtl.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333933/ClassicRootBeer2_h4tvyt.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333934/ClassicRootBeer3_pccgeo.png",
      " ",
    ],
    brand: "693e937d904d600084688859",
    price: 500,
    description: [
      "Relive the nostalgia with Classic Root Beer — a smooth, creamy soda with that old-fashioned flavor you love. /",
      "Rich notes of vanilla and spice blend perfectly for a satisfying, frothy sip. /",
      "A timeless favorite that is as comforting as it is refreshing! /",
      " ",
    ],
  },
  {
    productName: "Pineapple Paradise",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765359307/Pineapple_Paradise_ztetnb.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333931/PineappleParadise2_ws7sed.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333935/PineappleParadise3_m14v0l.png",
      " ",
    ],
    brand: "693e937d904d600084688859",
    price: 500,
    description: [
      "Escape to tropical bliss with Pineapple Paradise — the pineapple-iest soda straight from Bikini Bottom! /",
      "Bursts of juicy pineapple flavor bring sunshine and sweetness to every sip. /",
      "A refreshing tropical treat that is as fun and vibrant as its undersea home! /",
      " ",
    ],
  },
  {
    productName: "Vintage Cola",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765359450/Vintage_Cola_turkcl.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333932/VintageCola2_otxcwf.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765334153/VintageCola3_bcdjno.png",
      " ",
    ],
    brand: "693e937d904d600084688859",
    price: 500,
    description: [
      "Enjoy the timeless taste of Vintage Cola — a classic soda crafted with a nostalgic twist. /",
      "Rich, bubbly, and perfectly balanced with notes of caramel and spice. /",
      "A refreshing throwback to the golden age of cola, made for true soda lovers! /",
      " ",
    ],
  },
  // SUGAR FINA
  {
    productName: "Champagne Bears",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765359830/Champagne_Bears_ozdl3l.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333933/ChampagneBears3_lmgrh9.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333847/ChampagneBears2_k73liq.png",
      " ",
    ],
    brand: "693e937d904d60008468885a",
    price: 1500,
    description: [
      "Celebrate in style with Sugarfina iconic Champagne Bears® — made with Dom Pérignon Vintage Champagne for a sparkling twist on candy. /",
      "Delicately sweet and irresistibly chewy, these gummy bears bring luxury to every occasion. /",
      "Perfect for gifting, celebrating, or simply treating yourself to a touch of bubbly bliss! /",
      " ",
    ],
  },
  {
    productName: "Hollywood x Sugarfina Candy Tasting Collection",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765359993/Hollywood_x_Sugarfina_CandyT_asting_Collection_citkws.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333846/HollywoodxSugarfinaCandyTastingCollection2_awhkjd.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333847/HollywoodxSugarfinaCandyTastingCollection3_u2ikju.png",
      " ",
    ],
    brand: "693e937d904d60008468885a",
    price: 2500,
    description: [
      "Step into the spotlight with the Hollywood x Sugarfina Candy Tasting Collection — a glamorous assortment of premium sweets inspired by the magic of the movies. /",
      "Featuring sparkling gummies, decadent chocolates, and star-worthy confections crafted for true candy lovers. /",
      "Perfect for gifting or indulging yourself — a red-carpet candy experience in every bite! /",
      " ",
    ],
  },
  {
    productName: "Pre-Set Candy Trunk",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765360162/Pre-Set_Candy_Trunk_vmwpgx.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333919/PreSetCandyTrunk3_d202l3.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333919/PreSetCandyTrunk2_u1hnip.png",
      " ",
    ],
    brand: "693e937d904d60008468885a",
    price: 3000,
    description: [
      "Discover sweetness in style with our Pre-Set Candy Trunk — a curated collection of premium confections in a beautifully designed trunk. /",
      "Filled with an irresistible mix of gummies, chocolates, and sweets for every craving. /",
      "Perfect for gifting, sharing, or indulging — a statement piece for every candy lover! /",
      " ",
    ],
  },
  {
    productName: "Sugarfina XOXO Candy Bento Box",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765360337/Sugarfina_XOXO_Candy_Bento_Box_lladhm.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333846/SugarfinaXOXOCandyBentoBox2_eazz3t.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333846/SugarfinaXOXOCandyBentoBox3_mbtowt.png",
      " ",
    ],
    brand: "693e937d904d60008468885a",
    price: 3500,
    description: [
      "Share the love with the Sugarfina XOXO Candy Bento Box — a charming collection of sweet treats made for gifting and indulging. /",
      "Featuring an assortment of Sugarfina signature gummies and chocolates, beautifully arranged in a keepsake box. /",
      "The perfect way to say I love you — one bite at a time! /",
      " ",
    ],
  },
  // SWEETS
  {
    productName: "Caramel Chocolate Boba Milk Tea",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765361308/Caramel_Chocolate_Boba_Milk_Tea_pmofjv.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765361315/Caramel_Chocolate_Boba_Milk_Tea2_h08stu.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765361318/Caramel_Chocolate_Boba_Milk_Tea3_bqvkys.png",
      " ",
    ],
    brand: "693e937d904d60008468885b",
    price: 500,
    description: [
      "Indulge in Caramel Choco Boba Milk Tea — a decadent fusion of rich chocolate, creamy milk, and luscious caramel. /",
      "Paired with chewy boba pearls for the perfect blend of texture and sweetness. /",
      "A smooth, irresistible drink that is pure dessert bliss in every sip! /",
      " ",
    ],
  },
  {
    productName: "Stunning Strategem Flurry Cocktail Mix",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765361541/StunningStrategemFlurryCocktailMix_ech1gg.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765361540/StunningStrategemFlurryCocktailMix2_rc2nso.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765361541/StunningStrategemFlurryCocktailMix3_pifdre.png",
      " ",
    ],
    brand: "693e937d904d60008468885b",
    price: 500,
    description: [
      "Unleash your bold side with Stunning Strategem Flurry Cocktail Mix — a vibrant blend crafted for unforgettable moments. /",
      "Infused with refreshing notes of fruit and a hint of sparkle for the perfect party vibe. /",
      "Shake, pour, and enjoy — a stunning mix that turns any occasion into a celebration! /",
      " ",
    ],
  },
  {
    productName: "Summer Festival Fish",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765361760/Summer_Festival_Fish_hqsguf.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765361759/Summer_Festival_Fish2_rtg9gk.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765361759/Summer_Festival_Fish3_anpw3l.png",
      " ",
    ],
    brand: "693e937d904d60008468885b",
    price: 500,
    description: [
      "Dive into the fun with Summer Festival Fish — a colorful candy mix inspired by sunny days and seaside fairs. /",
      "Chewy, fruity, and bursting with flavor in every playful fish-shaped bite. /",
      "A joyful treat that captures the taste of summer with every handful! /",
      " ",
    ],
  },
  {
    productName: "Victorious Legend Tonkotsu Ramen",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765361931/VictoriousLegendTonkotsuRamen_umbzqk.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765361929/VictoriousLegendTonkotsuRamen2_f3wzxa.pngg",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765361930/VictoriousLegendTonkotsuRamen3_g5zriv.png",
      " ",
    ],
    brand: "693e937d904d60008468885b",
    price: 1000,
    description: [
      "Conquer your cravings with Victorious Legend Tonkotsu Ramen — a rich, flavorful fusion of creamy pork broth and perfectly chewy noodles. /",
      "Infused with authentic Japanese spices for that deep, umami-packed taste. /",
      "A legendary ramen experience that delivers bold flavor and comfort in every bowl! /",
      " ",
    ],
  },
  // TEA FORTE
  {
    productName: "Tea Chest Tea Tasting Assortment",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333624/Herbal_Retreat_Pyramid_Tea_Box_sxwj56.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333927/TeaChestTeaTastingAssortment2_ds3pmu.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765334155/TeaChestTeaTastingAssortment3_bddfj4.png",
      " ",
    ],
    brand: "693e937d904d60008468885c",
    price: 2500,
    description: [
      "Tea Forté is Tea Chest Tea Tasting Assortment is a grand collection of 40 pyramid tea infusers, featuring organic black, oolong, green, white, and herbal blends for every mood and moment. /",
      "Each elegant chest opens to reveal a detailed tea menu — an invitation to explore refined flavors like Earl Grey, Cherry Blossom, and Vanilla Pear, beautifully curated for the ultimate tasting experience. /",
      "Perfect for gifting or self-indulgence, this luxurious assortment combines artistry and flavor in one timeless chest — a celebration of tea at its finest. /",
      " ",
    ],
  },
  {
    productName: "Warming Joy Tea Chest ~ Limited Edition",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333606/Ruby_Mini_Petite_Pyramid_osxuly.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333932/WarmingJoyTeaChest2_wn6dog.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333818/WarmingJoyTeaChest3_eii5qa.png",
      " ",
    ],
    brand: "693e937d904d60008468885c",
    price: 3000,
    description: [
      "Celebrate the holidays with Tea Forté Warming Joy Tea Chest — a luxurious collection of festive blends made to warm the heart and soul. /",
      "Featuring 40 pyramid infusers with black, oolong, green, white, and herbal teas inspired by winter spices and fruits. /",
      "Beautifully packaged for gifting or sharing, this limited-edition tea chest brings comfort and elegance to every cup. /",
      " ",
    ],
  },
  {
    productName: "Winter Chai",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765362570/Winter_Chai_gnfvdo.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765334155/WinterChai2_pfqzcb.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333933/WinterChai3_aysrkp.png",
      " ",
    ],
    brand: "693e937d904d60008468885c",
    price: 2500,
    description: [
      "Tea Forté Winter Chai is a cozy herbal blend of South African rooibos, cinnamon, cardamom, vanilla, and ginger — the perfect companion for chilly days. /",
      "This caffeine-free chai offers a golden infusion with sweet, spicy notes that comfort the senses and lift the spirit. /",
      "Handcrafted with organic ingredients and artful balance, Winter Chai delivers the warmth of traditional chai without the buzz — pure serenity in every sip. /",
      " ",
    ],
  },
  {
    productName: "Winter Chalet Advent ~ 12 Days of Cozy Teas",
    productImages: [
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765362685/Winter_Chalet_Advent_12_Days_of_Cozy_Teas_bjd6hk.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333929/WinterChaletAdvent2_vvltaa.png",
      "https://res.cloudinary.com/dldwg8flq/image/upload/v1765333930/WinterChaletAdvent3_jxwmel.png",
      " ",
    ],
    brand: "693e937d904d60008468885c",
    price: 2500,
    description: [
      "Celebrate the season with Tea Forté Winter Chalet Advent — a limited-edition collection of 12 cozy teas to warm your winter days. /",
      "Each numbered door reveals a unique blend, from spiced chai to soothing herbal infusions, capturing the comfort of a snowy mountain retreat. /",
      "A luxurious tea experience perfect for gifting or savoring solo — a festive countdown to pure tea bliss! /",
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

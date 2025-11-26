import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    productName: { 
        type: String, 
        required: true 
    },
    productImages: [{ 
        type: String 
    }], // up to 3 URLs
    brandName: { 
        type: String, 
        required: true 
    },
    brandImage: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    }
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);

import mongoose from "mongoose";

const deliveryAddressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


deliveryAddressSchema.index({ user: 1 });

export default mongoose.model("DeliveryAddress", deliveryAddressSchema);

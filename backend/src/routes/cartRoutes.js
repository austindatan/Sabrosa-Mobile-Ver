import express from "express";
import Cart from "../models/Cart.js";

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    // Validate incoming data
    if (!userId || !productId) {
      return res.status(400).json({
        error: "userId and productId are required",
        received: req.body,
      });
    }

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }

    const existingItem = cart.items.find(
      (item) =>
        item.product.toString() === productId &&
        item.status === "Added"
    );

    if (existingItem) {
      existingItem.quantity += Number(quantity);
    } else {
      cart.items.push({
        product: productId,
        quantity: Number(quantity) || 1,
        status: "Added",
      });
    }

    await cart.save();
    res.status(200).json({ message: "Added to cart", cart });

  } catch (err) {
    console.error("CART ADD ERROR:", err);
    res.status(500).json({ error: "Failed to add to cart" });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const cart = await Cart.findOne({ user: userId })
      .populate("items.product"); // optional, shows product details

    if (!cart) {
      return res.status(200).json({
        message: "Cart is empty",
        cart: { items: [] }
      });
    }

    res.status(200).json(cart);

  } catch (err) {
    console.error("CART LOAD ERROR:", err);
    res.status(500).json({ error: "Failed to load cart" });
  }
});

router.put("/update", async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    if (!userId || !productId || quantity === undefined) {
      return res.status(400).json({ error: "Missing userId, productId, or quantity" });
    }

    // Find cart or create new one
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }

    // Look for existing item
    let item = cart.items.find(
      (i) => i.product.toString() === productId && i.status === "Added"
    );

    const newQuantity = Number(quantity);

    if (item) {
      // existing item found
      if (newQuantity <= 0) {
        // remove item
        cart.items = cart.items.filter(
          (i) => !(i.product.toString() === productId && i.status === "Added")
        );
      } else {
        item.quantity = newQuantity;
      }
    } else {
      // No item found → CREATE IT
      if (newQuantity > 0) {
        cart.items.push({
          product: productId,
          quantity: newQuantity,
          status: "Added",
        });
      }
    }

    await cart.save();
    res.status(200).json({ message: "Cart updated successfully", cart });

  } catch (err) {
    console.error("CART UPDATE ERROR:", err);
    res.status(500).json({ error: "Failed to update cart" });
  }
});


export default router;
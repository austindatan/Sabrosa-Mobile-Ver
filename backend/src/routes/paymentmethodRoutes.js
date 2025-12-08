import express from "express";
import PaymentMethod from "../models/PaymentMethod.js";

const router = express.Router();

/* -----------------------------
   GET ALL METHODS FOR USER
----------------------------- */
router.get("/list/:userId", async (req, res) => {
    try {
        const data = await PaymentMethod
            .find({ user: req.params.userId })
            .sort({ isDefault: -1, createdAt: -1 }); // 👈 DEFAULT FIRST

        res.json(data);
    } catch (err) {
        console.log("GET PAYMENT LIST ERROR:", err);
        res.status(500).json({ error: "Failed to load payment methods" });
    }
});

router.get("/fix-user-types", async (req, res) => {
    const methods = await PaymentMethod.find();

    for (let m of methods) {
        if (typeof m.user === "string") {
            m.user = new mongoose.Types.ObjectId(m.user);
            await m.save();
        }
    }

    res.send("Fixed user types");
});

/* -----------------------------
   ADD NEW PAYMENT METHOD
   AND SET AS DEFAULT IF ASKED
----------------------------- */
router.post("/add", async (req, res) => {
    try {
        const { user, type, cardNumber, gcashNumber, isDefault } = req.body;

        if (isDefault) { // Use the corrected key
            await PaymentMethod.updateMany(
                { user: user }, // Use the corrected key
                { $set: { isDefault: false } }
            );
        }

        const newMethod = new PaymentMethod({
            user: user, // Use the corrected key
            type,
            cardNumber,
            gcashNumber,
            isDefault: isDefault ? true : false // Use the corrected key
        });

        await newMethod.save();

        res.json({ message: "Payment method added!", method: newMethod });

    } catch (err) {
        console.log("ADD METHOD ERROR:", err);
        res.status(500).json({ error: "Failed to save payment method" });
    }
});

/* -----------------------------
   SET AS DEFAULT
----------------------------- */
router.put("/set-default/:id", async (req, res) => {
    try {
        const method = await PaymentMethod.findById(req.params.id);
        if (!method) return res.status(404).json({ error: "Method not found" });

        // 1. clear old default
        await PaymentMethod.updateMany(
            { user: method.user },
            { $set: { isDefault: false } }
        );

        // 2. set this as default
        method.isDefault = true;
        await method.save();

        res.json({ message: "Default updated!" });

    } catch (err) {
        console.log("SET DEFAULT ERROR:", err);
        res.status(500).json({ error: "Failed to update default" });
    }
});

export default router;

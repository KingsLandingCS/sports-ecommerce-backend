// src/routes/orderRoutes.js
const express = require("express");
const Order = require("../models/order");
const User = require("../models/user");

const router = express.Router();

// Get all orders
router.get("/", async (req, res) => {
    try {
        const orders = await Order.find().populate("user").populate("products.product");
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new order
router.post("/", async (req, res) => {
    const order = new Order({
        user: req.body.userId,
        products: req.body.products,
        totalPrice: req.body.totalPrice,
        shippingAddress: req.body.shippingAddress,
    });

    try {
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

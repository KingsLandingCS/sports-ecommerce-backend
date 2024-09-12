// src/models/Order.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
            quantity: Number,
            price: Number,
        },
    ],
    totalPrice: {
        type: Number,
        required: true,
    },
    shippingAddress: String,
    orderStatus: {
        type: String,
        default: "Processing",
    },
    orderDate: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Order", orderSchema);

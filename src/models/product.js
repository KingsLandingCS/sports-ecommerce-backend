// src/models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    category: String,
    brand: String,
    stock: {
        type: Number,
        required: true,
    },
    imageUrl: String,
});

module.exports = mongoose.model("Product", productSchema);

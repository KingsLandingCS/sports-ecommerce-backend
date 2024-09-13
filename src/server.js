require("dotenv").config();

// Import the routes
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

// src/server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


// Create an instance of Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


// Use the routes
app.use("/api/Products", productRoutes);
app.use("/api/orders", orderRoutes);
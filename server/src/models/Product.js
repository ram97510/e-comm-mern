const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    price: Number,
    oldPrice: Number,
    discount: Number,
    rating: Number,
    category: String,
    sku: String,
    availability: String,
    image: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Product",
  productSchema
);
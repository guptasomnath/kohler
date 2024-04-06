const express = require("express");
const {
  storeData,
  searchProducts,
  getProduct,
} = require("../controllers/products.controller");

const productRoute = express.Router();

productRoute.get("/", getProduct);
productRoute.get("/search", searchProducts);
productRoute.get("/store", storeData);

module.exports = productRoute;

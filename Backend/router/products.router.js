const express = require("express");
const {
  getAllProducts,
  storeData,
  getProducts,
  getProduct,
} = require("../controllers/products.controller");

const productRoute = express.Router();

("/products/{catname}");

// productRoute.get("/", getAllProducts);
productRoute.get("/", getProduct);
productRoute.post("/test", getProducts);
productRoute.get("/store", storeData);

module.exports = productRoute;

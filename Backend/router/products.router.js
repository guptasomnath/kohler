const express = require("express");
const {
  storeData,
  getProduct,
} = require("../controllers/products.controller");

const productRoute = express.Router();

("/products/{catname}");

productRoute.get("/", getProduct);
productRoute.get("/store", storeData);

module.exports = productRoute;

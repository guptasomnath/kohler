const express = require("express");
const { getAllProducts, storeData, getProducts } = require("../controllers/products.controller");

const productRoute = express.Router();

"/products/{catname}"

productRoute.get("/", getAllProducts);
productRoute.post("/test", getProducts);
productRoute.get("/store", storeData);

module.exports = productRoute;

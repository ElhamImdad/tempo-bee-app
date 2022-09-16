const express = require("express");
const products = express.Router();
const productsController = require("../controllers/products");
products.get("/getallcategorie", productsController.getAllCategorie);
products.get(
  "/categorie/getallsubcategorie",
  productsController.getAllSubCategorie
);
products.get("/subcategorie/getallshops", productsController.getAllShops);
products.get("/shop/getallproducts", productsController.getAllProducts);
module.exports = products;

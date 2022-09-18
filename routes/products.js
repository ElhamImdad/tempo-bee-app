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
products.post("/categorie/add", productsController.addCategorie);
products.post("/categorie/edit", productsController.editCategorie);
products.post("/categorie/delet", productsController.deletCategorie);
products.post("/sub_categorie/add", productsController.addSub_categorie);
products.post("/sub_categorie/edit", productsController.editSub_categorie);
products.post("/sub_categorie/delet", productsController.deletSub_categorie);
products.post("/shop/add", productsController.addshop);
products.post("/shop/edit", productsController.editshop);
products.post("/shop/delet", productsController.deletshop);
products.post("/product/add", productsController.addproduct);
products.post("/product/edit", productsController.editproduct);
products.post("/product/delet", productsController.deletproduct);
module.exports = products;

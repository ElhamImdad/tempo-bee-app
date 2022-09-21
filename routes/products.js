const express = require("express");
const products = express.Router();
const productsController = require("../controllers/products");
const tokenVerification = require("../midelwares/tokenVerification");
products.get("/getallcategorie", productsController.getAllCategorie);
products.get(
  "/categorie/getallsubcategorie",
  productsController.getAllSubCategorie
);
products.get("/subcategorie/getallshops", productsController.getAllShops);
products.get("/shop/getallproducts", productsController.getAllProducts);
products.post(
  "/categorie/add",
  tokenVerification.isLoggedIn,
  productsController.addCategorie
);
products.post(
  "/categorie/edit",
  tokenVerification.isLoggedIn,
  tokenVerification.isLoggedIn,
  productsController.editCategorie
);
products.post(
  "/categorie/delet",
  tokenVerification.isLoggedIn,
  productsController.deletCategorie
);
products.post(
  "/sub_categorie/add",
  tokenVerification.isLoggedIn,
  productsController.addSub_categorie
);
products.post(
  "/sub_categorie/edit",
  tokenVerification.isLoggedIn,
  productsController.editSub_categorie
);
products.post(
  "/sub_categorie/delet",
  tokenVerification.isLoggedIn,
  productsController.deletSub_categorie
);
products.post(
  "/shop/add",
  tokenVerification.isLoggedIn,
  productsController.addshop
);
products.post(
  "/shop/edit",
  tokenVerification.isLoggedIn,
  productsController.editshop
);
products.post(
  "/shop/delet",
  tokenVerification.isLoggedIn,
  productsController.deletshop
);
products.post(
  "/product/add",
  tokenVerification.isLoggedIn,
  productsController.addproduct
);
products.post(
  "/product/edit",
  tokenVerification.isLoggedIn,
  productsController.editproduct
);
products.post(
  "/product/delet",
  tokenVerification.isLoggedIn,
  productsController.deletproduct
);
module.exports = products;

const productsService = require("../services/products");
/*
 * call other imported services, or same service but different functions here if you need to
 */

const getAllCategorie = async (request, response) => {
  try {
    await productsService.getAllCategorie(request, response);
  } catch (e) {
    console.log(e.message);
  }
};
const getAllSubCategorie = async (request, response) => {
  try {
    await productsService.getAllSubCategorie(request, response);
  } catch (e) {
    console.log(e.message);
  }
};
const getAllShops = async (request, response) => {
  try {
    await productsService.getAllShops(request, response);
  } catch (e) {
    console.log(e.message);
  }
};

const getAllProducts = async (request, response) => {
  try {
    await productsService.getAllProducts(request, response);
  } catch (e) {
    console.log(e.message);
  }
};
const addCategorie = async (request, response, next) => {
  try {
    await productsService.addCategorie(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};

const editCategorie = async (request, response, next) => {
  try {
    await productsService.editCategorie(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};

const deletCategorie = async (request, response, next) => {
  try {
    await productsService.deletCategorie(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};

const addSub_categorie = async (request, response, next) => {
  try {
    await productsService.addSub_categorie(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};

const editSub_categorie = async (request, response, next) => {
  try {
    await productsService.editSub_categorie(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};

const deletSub_categorie = async (request, response, next) => {
  try {
    await productsService.deletSub_categorie(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};

const addshop = async (request, response, next) => {
  try {
    await productsService.addshop(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};

const editshop = async (request, response, next) => {
  try {
    await productsService.editshop(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};

const deletshop = async (request, response, next) => {
  try {
    await productsService.deletshop(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};
const addproduct = async (request, response, next) => {
  try {
    await productsService.addproduct(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};

const editproduct = async (request, response, next) => {
  try {
    await productsService.editproduct(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};

const deletproduct = async (request, response, next) => {
  try {
    await productsService.deletproduct(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};
module.exports = {
  addCategorie,
  editCategorie,
  deletCategorie,
  addSub_categorie,
  editSub_categorie,
  deletSub_categorie,
  addshop,
  editshop,
  deletshop,
  addproduct,
  editproduct,
  deletproduct,
  getAllCategorie,
  getAllSubCategorie,
  getAllShops,
  getAllProducts,
};

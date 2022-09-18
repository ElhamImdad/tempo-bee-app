const productsModel = require("../models/products");
/*
 * call other imported Models, or same Model but different functions here if you need to
 */

const getAllCategorie = async (request, response) => {
  try {
    await productsModel.getAllCategorie(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};
const getAllSubCategorie = async (request, response) => {
  try {
    await productsModel.getAllSubCategorie(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};
const getAllShops = async (request, response) => {
  try {
    await productsModel.getAllShops(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};

const getAllProducts = async (request, response) => {
  try {
    await productsModel.getAllProducts(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};

const addCategorie = async (request, response) => {
  try {
    await productsModel.addCategorie(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};

const editCategorie = async (request, response) => {
  try {
    await productsModel.editCategorie(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};

const deletCategorie = async (request, response) => {
  try {
    await productsModel.deletCategorie(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};

const addSub_categorie = async (request, response) => {
  try {
    await productsModel.addSub_categorie(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};

const editSub_categorie = async (request, response) => {
  try {
    await productsModel.editSub_categorie(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};

const deletSub_categorie = async (request, response) => {
  try {
    await productsModel.deletSub_categorie(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};

const addshop = async (request, response) => {
  try {
    await productsModel.addshop(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};

const editshop = async (request, response) => {
  try {
    await productsModel.editshop(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};

const deletshop = async (request, response) => {
  try {
    await productsModel.deletshop(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};
const addproduct = async (request, response) => {
  try {
    await productsModel.addproduct(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};

const editproduct = async (request, response) => {
  try {
    await productsModel.editproduct(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};

const deletproduct = async (request, response) => {
  try {
    await productsModel.deletproduct(request, response);
  } catch (e) {
    throw new Error(e.message);
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

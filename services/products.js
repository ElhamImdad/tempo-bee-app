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

module.exports = {
  getAllCategorie,
  getAllSubCategorie,
  getAllShops,
  getAllProducts,
};

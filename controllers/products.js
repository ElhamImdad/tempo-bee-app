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

module.exports = {
  getAllCategorie,
  getAllSubCategorie,
  getAllShops,
  getAllProducts,
};

const deliveryService = require("../services/delivery");
/*
 * call other imported services, or same service but different functions here if you need to
 */

const clientOrders = async (request, response, next) => {
  try {
    await deliveryService.clientOrders(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};

const represantativeOrdes = async (request, response, next) => {
  try {
    await deliveryService.represantativeOrdes(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};

const order = async (request, response, next) => {
  try {
    await deliveryService.order(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};

const accepteOrder = async (request, response, next) => {
  try {
    await deliveryService.accepteOrder(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};

const getEncoursOrders = async (request, response) => {
  try {
    await deliveryService.getEncoursOrders(request, response);
  } catch (e) {
    console.log(e.message);
  }
};
const getOrderwithPriducts = async (request, response, next) => {
  try {
    await deliveryService.getOrderwithPriducts(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};

const search = async (request, response) => {
  try {
    await deliveryService.search(request, response);
  } catch (e) {
    console.log(e.message);
  }
};
module.exports = {
  search,
  getOrderwithPriducts,
  getEncoursOrders,
  clientOrders,
  represantativeOrdes,
  order,
  accepteOrder,
};

const deliveryService = require("../services/delivery");
/*
 * call other imported services, or same service but different functions here if you need to
 */

const clientOrders = async (request, response) => {
  try {
    await deliveryService.clientOrders(request, response);
  } catch (e) {
    console.log(e.message);
  }
};

const represantativeOrdes = async (request, response) => {
  try {
    await deliveryService.represantativeOrdes(request, response);
  } catch (e) {
    console.log(e.message);
  }
};

const order = async (request, response) => {
  try {
    await deliveryService.order(request, response);
  } catch (e) {
    console.log(e.message);
  }
};

const accepteOrder = async (request, response) => {
  try {
    await deliveryService.accepteOrder(request, response);
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
const getOrderwithPriducts = async (request, response) => {
  try {
    await deliveryService.getOrderwithPriducts(request, response);
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  getOrderwithPriducts,
  getEncoursOrders,
  clientOrders,
  represantativeOrdes,
  order,
  accepteOrder,
};

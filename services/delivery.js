const deliveryModel = require("../models/delivery");

const clientOrders = async (request, response, next) => {
  try {
    await deliveryModel.clientOrders(request, response, next);
  } catch (e) {
    throw new Error(e.message);
  }
};

const represantativeOrdes = async (request, response, next) => {
  try {
    await deliveryModel.represantativeOrdes(request, response, next);
  } catch (e) {
    throw new Error(e.message);
  }
};

const order = async (request, response, next) => {
  try {
    await deliveryModel.order(request, response, next);
  } catch (e) {
    throw new Error(e.message);
  }
};

const accepteOrder = async (request, response, next) => {
  try {
    await deliveryModel.accepteOrder(request, response, next);
  } catch (e) {
    throw new Error(e.message);
  }
};

const getEncoursOrders = async (request, response) => {
  try {
    await deliveryModel.getEncoursOrders(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};
const getOrderwithPriducts = async (request, response, next) => {
  try {
    await deliveryModel.getOrderwithPriducts(request, response, next);
  } catch (e) {
    throw new Error(e.message);
  }
};
const search = async (request, response) => {
  try {
    await deliveryModel.search(request, response);
  } catch (e) {
    throw new Error(e.message);
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

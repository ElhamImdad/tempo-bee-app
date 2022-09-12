const deliveryModel = require("../models/delivery");

const clientOrders = async (request, response) => {
  try {
    await deliveryModel.clientOrders(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};

const represantativeOrdes = async (request, response) => {
  try {
    await deliveryModel.represantativeOrdes(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};

const order = async (request, response) => {
  try {
    await deliveryModel.order(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};

const accepteOrder = async (request, response) => {
  try {
    await deliveryModel.accepteOrder(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  clientOrders,
  represantativeOrdes,
  order,
  accepteOrder,
};

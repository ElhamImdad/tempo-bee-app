const express = require("express");
const delivery = express.Router();
const deliveryController = require("../controllers/delivery");
const tokenVerification = require("../midelwares/tokenVerification");

delivery.post(
  "/client/orders",
  tokenVerification.isLoggedIn,
  deliveryController.clientOrders
);
delivery.post(
  "/represantative/orders ",
  tokenVerification.isLoggedIn,
  deliveryController.represantativeOrdes
);
delivery.post(
  "/client/order",
  tokenVerification.isLoggedIn,
  deliveryController.order
);
delivery.post(
  "/represantative/order/accepte",
  tokenVerification.isLoggedIn,
  deliveryController.accepteOrder
);
delivery.get("/encoursorder", deliveryController.getEncoursOrders);
delivery.post(
  "/getdelivery",
  tokenVerification.isLoggedIn,
  deliveryController.getOrderwithPriducts
);
delivery.get("/search", deliveryController.search);

module.exports = delivery;

const express = require("express");
const delivery = express.Router();
const deliveryController = require("../controllers/delivery");

delivery.post("/client/orders", deliveryController.clientOrders);
delivery.post(
  "/represantative/orders ",
  deliveryController.represantativeOrdes
);
delivery.post("/client/order ", deliveryController.order);
delivery.post("/represantative/order/accepte", deliveryController.accepteOrder);

module.exports = delivery;

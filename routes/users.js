const express = require("express");
const users = express.Router();
const usersController = require("../controllers/users");
const clientMiddleware = require("../midelwares/userVerification");

users.post("/login/client", usersController.loginClient);
users.post(
  "/signup/client",
  clientMiddleware.clientValidateRegister,
  usersController.signUpClient
);
users.post(
  "/signup/verification",

  usersController.signUpVerification
);
users.post(
  "/login/represantative",

  usersController.loginRepresantative
);
users.post(
  "/signup/represantative",
  clientMiddleware.repValidateRegister,
  usersController.signURepresantativet
);
users.post("/login/admin", usersController.loginAdmin);
users.post("/getclient", usersController.getClientById);
users.post("/getRepresantative", usersController.getRepresantativeById);

module.exports = users;

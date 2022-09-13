const express = require("express");
const users = express.Router();
const usersController = require("../controllers/users.js");
const clientMiddleware = require("../midelwares/userVerification.js");

users.post("/login/client", usersController.loginClient);
users.post(
  "/signup/client ",
  clientMiddleware.clientValidateRegister,
  usersController.signUpClient
);
users.post(
  "/signup/verification ",
  clientMiddleware.repValidateRegister,
  usersController.signUpVerification
);
users.post("/login/represantative", usersController.loginRepresantative);
users.post("/signup/Represantative ", usersController.signURepresantativet);
users.post("/login/", usersController.loginAdmin);
users.post("/getclient", usersController.getClientById);
users.post("/getRepresantative", usersController.getRepresantativeById);

module.exports = users;

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
users.post("/client/getclient", usersController.getClientById);
users.post(
  "/represantative/getrepresantative",
  usersController.getRepresantativeById
);
users.post(
  "/represantative/updateprofile",
  usersController.updateProfileRepresantative
);
users.post("/client/updateprofile", usersController.updateProfileClient);

module.exports = users;

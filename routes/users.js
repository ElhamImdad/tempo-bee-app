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
users.post("/represantative/updatetimes", usersController.updateWorkingTimes);
users.post("/client/updateprofile", usersController.updateProfileClient);
users.post(
  "/represantative/addcomment",
  usersController.addReprsantativeComment
);
users.post("/client/addcomment", usersController.addClientComment);
users.post("/client/getnote", usersController.getClientNote);
users.post("/represantative/getnote", usersController.getRepresantativeNote);
users.post("/shop/getnote", usersController.getShopNote);
module.exports = users;

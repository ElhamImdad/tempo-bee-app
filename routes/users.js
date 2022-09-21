const express = require("express");
const users = express.Router();
const usersController = require("../controllers/users");
const clientMiddleware = require("../midelwares/userVerification");
const tokenVerification = require("../midelwares/tokenVerification");
users.post("/login/client", usersController.loginClient);
users.post(
  "/signup/client",
  clientMiddleware.clientValidateRegister,
  usersController.signUpClient
);
users.post(
  "/client/signup/verification",
  usersController.clientSignUpVerification
);
users.post(
  "/represantative/signup/verification",

  usersController.RepresantativeSignUpVerification
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
users.post(
  "/client/getclient",
  tokenVerification.isLoggedIn,
  usersController.getClientById
);
users.post(
  "/represantative/getrepresantative",
  tokenVerification.isLoggedIn,
  usersController.getRepresantativeById
);
users.post(
  "/represantative/updateprofile",
  tokenVerification.isLoggedIn,
  usersController.updateProfileRepresantative
);
users.post(
  "/represantative/updatetimes",
  tokenVerification.isLoggedIn,
  usersController.updateWorkingTimes
);
users.post(
  "/client/updateprofile",
  tokenVerification.isLoggedIn,
  usersController.updateProfileClient
);
users.post(
  "/represantative/addcomment",
  tokenVerification.isLoggedIn,
  usersController.addReprsantativeComment
);
users.post(
  "/client/addcomment",
  tokenVerification.isLoggedIn,
  usersController.addClientComment
);
users.post(
  "/client/getnote",
  tokenVerification.isLoggedIn,
  usersController.getClientNote
);
users.post(
  "/represantative/getnote",
  tokenVerification.isLoggedIn,
  usersController.getRepresantativeNote
);
users.post("/shop/getnote", usersController.getShopNote);
module.exports = users;

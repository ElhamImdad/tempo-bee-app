const userService = require("../services/users");
/*
 * call other imported services, or same service but different functions here if you need to
 */

const loginClient = async (request, response, next) => {
  try {
    await userService.loginClient(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};

const signUpClient = async (request, response, next) => {
  try {
    await userService.signUpClient(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};

const loginRepresantative = async (request, response, next) => {
  try {
    await userService.loginRepresantative(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};

const signURepresantativet = async (request, response, next) => {
  try {
    await userService.signURepresantativet(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};

const loginAdmin = async (request, response, next) => {
  try {
    await userService.loginAdmin(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};

const clientSignUpVerification = async (request, response, next) => {
  try {
    await userService.clientSignUpVerification(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};
const RepresantativeSignUpVerification = async (request, response, next) => {
  try {
    await userService.represantativeSignUpVerification(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};
const getClientById = async (request, response, next) => {
  try {
    await userService.getClientById(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};

const getRepresantativeById = async (request, response, next) => {
  try {
    await userService.getRepresantativeById(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};
const updateProfileRepresantative = async (request, response, next) => {
  try {
    await userService.updateProfileRepresantative(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};
const updateProfileClient = async (request, response, next) => {
  try {
    await userService.updateProfileClient(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};
const updateWorkingTimes = async (request, response, next) => {
  try {
    await userService.updateWorkingTimes(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};
const addReprsantativeComment = async (request, response, next) => {
  try {
    await userService.addRepresantativeComment(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};

const addClientComment = async (request, response, next) => {
  try {
    await userService.addClientComment(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};
const getShopNote = async (request, response) => {
  try {
    await userService.getShopNote(request, response);
  } catch (e) {
    console.log(e.message);
  }
};
const getClientNote = async (request, response, next) => {
  try {
    await userService.getClientNote(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};
const getRepresantativeNote = async (request, response, next) => {
  try {
    await userService.getRepresantativeNote(request, response, next);
  } catch (e) {
    console.log(e.message);
  }
};
module.exports = {
  RepresantativeSignUpVerification,
  getShopNote,
  getClientNote,
  getRepresantativeNote,
  addClientComment,
  addReprsantativeComment,
  updateWorkingTimes,
  updateProfileClient,
  updateProfileRepresantative,
  loginClient,
  signUpClient,
  getRepresantativeById,
  getClientById,
  clientSignUpVerification,
  loginAdmin,
  signURepresantativet,
  loginRepresantative,
};

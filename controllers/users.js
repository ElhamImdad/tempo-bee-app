const userService = require("../services/users");
/*
 * call other imported services, or same service but different functions here if you need to
 */

const loginClient = async (request, response) => {
  try {
    await userService.loginClient(request, response);
  } catch (e) {
    console.log(e.message);
  }
};

const signUpClient = async (request, response, next) => {
  try {
    await userService.signUpClient(request, response);
  } catch (e) {
    console.log(e.message);
  }
};

const loginRepresantative = async (request, response) => {
  try {
    await userService.loginRepresantative(request, response);
  } catch (e) {
    console.log(e.message);
  }
};

const signURepresantativet = async (request, response, next) => {
  try {
    await userService.signURepresantativet(request, response);
  } catch (e) {
    console.log(e.message);
  }
};

const loginAdmin = async (request, response) => {
  try {
    await userService.loginAdmin(request, response);
  } catch (e) {
    console.log(e.message);
  }
};

const clientSignUpVerification = async (request, response) => {
  try {
    await userService.clientSignUpVerification(request, response);
  } catch (e) {
    console.log(e.message);
  }
};
const RepresantativeSignUpVerification = async (request, response) => {
  try {
    await userService.represantativeSignUpVerification(request, response);
  } catch (e) {
    console.log(e.message);
  }
};
const getClientById = async (request, response) => {
  try {
    await userService.getClientById(request, response);
  } catch (e) {
    console.log(e.message);
  }
};

const getRepresantativeById = async (request, response) => {
  try {
    await userService.getRepresantativeById(request, response);
  } catch (e) {
    console.log(e.message);
  }
};
const updateProfileRepresantative = async (request, response) => {
  try {
    await userService.updateProfileRepresantative(request, response);
  } catch (e) {
    console.log(e.message);
  }
};
const updateProfileClient = async (request, response) => {
  try {
    await userService.updateProfileClient(request, response);
  } catch (e) {
    console.log(e.message);
  }
};
const updateWorkingTimes = async (request, response) => {
  try {
    await userService.updateWorkingTimes(request, response);
  } catch (e) {
    console.log(e.message);
  }
};
const addReprsantativeComment = async (request, response) => {
  try {
    await userService.addRepresantativeComment(request, response);
  } catch (e) {
    console.log(e.message);
  }
};

const addClientComment = async (request, response) => {
  try {
    await userService.addClientComment(request, response);
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
const getClientNote = async (request, response) => {
  try {
    await userService.getClientNote(request, response);
  } catch (e) {
    console.log(e.message);
  }
};
const getRepresantativeNote = async (request, response) => {
  try {
    await userService.getRepresantativeNote(request, response);
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

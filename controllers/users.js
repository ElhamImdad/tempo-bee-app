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

const signUpClient = async (request, response) => {
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

const signURepresantativet = async (request, response) => {
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

const signUpVerification = async (request, response) => {
  try {
    await userService.siignUpVerification(request, response);
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

module.exports = {
  loginClient,
  signUpClient,
  getRepresantativeById,
  getClientById,
  signUpVerification,
  loginAdmin,
  signURepresantativet,
  loginRepresantative,
};

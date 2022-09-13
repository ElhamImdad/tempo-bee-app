const userModel = require("../models/users");
const loginClient = async (request, response) => {
  try {
    await userModel.loginClient(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};

const signUpClient = async (request, response, next) => {
  try {
    await userModel.signUpClient(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};

const loginRepresantative = async (request, response) => {
  try {
    await userModel.loginRepresantative(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};

const signURepresantativet = async (request, response) => {
  try {
    await userModel.signURepresantativet(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};

const loginAdmin = async (request, response) => {
  try {
    await userModel.loginAdmin(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};

const siignUpVerification = async (request, response) => {
  try {
    await userModel.signUpVerification(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};

const getClientById = async (request, response) => {
  try {
    await userModel.getClientById(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};

const getRepresantativeById = async (request, response) => {
  try {
    await userModel.getRepresantativeById(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  loginClient,
  signUpClient,
  getRepresantativeById,
  getClientById,
  siignUpVerification,
  loginAdmin,
  signURepresantativet,
  loginRepresantative,
};

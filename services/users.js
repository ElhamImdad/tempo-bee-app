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

const signURepresantativet = async (request, response, next) => {
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
const updateProfileRepresantative = async (request, response) => {
  try {
    await userModel.updateProfileRepresantative(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};
const updateProfileClient = async (request, response) => {
  try {
    await userModel.updateProfileClient(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};
const updateWorkingTimes = async (request, response) => {
  try {
    await userModel.updateWorkingTimes(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};
const addClientComment = async (request, response) => {
  try {
    await userModel.addClientComment(request, response);
  } catch (e) {
    ç_;
  }
};

const addRepresantativeComment = async (request, response) => {
  try {
    await userModel.addRepesantativeComment(request, response);
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  addRepresantativeComment,
  addClientComment,
  updateWorkingTimes,
  updateProfileClient,
  updateProfileRepresantative,
  loginClient,
  signUpClient,
  getRepresantativeById,
  getClientById,
  siignUpVerification,
  loginAdmin,
  signURepresantativet,
  loginRepresantative,
};

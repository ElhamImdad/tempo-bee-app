const pool = require("../config/bdd");
const loginClient = async (request, response) => {
  let  tel= request.body.tel
  let password = request.body.password 
    pool.query('SELECT * FROM `client` where `trl` = ? and `password` = ? limit 1',[tel ], function (error, results, fields) {
        if (error) {
          response.status(500).json({message:"server error"}) 
        }
        else{
        response.status(200).json({message:"success"}) 
        }
      })};

const signUpClient = async (request, response) => {};

const loginRepresantative = async (request, response) => {};

const signURepresantativet = async (request, response) => {};

const loginAdmin = async (request, response) => {};

const siignUpVerification = async (request, response) => {};

const getClientById = async (request, response) => {};

const getRepresantativeById = async (request, response) => {};

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

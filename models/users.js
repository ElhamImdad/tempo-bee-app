const pool = require("../config/bdd");
const bcrypt = require("bcrypt");
const loginClient = async (request, response) => {
  let tel = request.body.tel;
  let password = request.body.password;
  pool.query(
    "SELECT * FROM `client` where `trl` = ? and `password` = ? limit 1",
    [tel],
    function (error, results, fields) {
      if (error) {
        response.status(500).json({ message: "server error" });
      } else {
        response.status(200).json({ message: "success" });
      }
    }
  );
};

const signUpClient = async (req, res, next) => {
  pool.query(
    `SELECT * FROM client  WHERE tel = ${pool.escape(req.body.tel)};`,
    (err, result) => {
      if (result.length) {
        return res.status(409).send({
          msg: "This phone number is already in use!",
        });
      } else {
        /* bcrypt.hash(req.body.password, 10, (err, hash) => { });
          if (err) {
            return res.status(500).send({
              msg: err,
            });
          } else { } */

        pool.query(
          `INSERT INTO client ( nom , prenom,latitude,longitude, tel,email,note,adress) VALUES ( ${pool.escape(
            req.body.nom
          )},${pool.escape(req.body.prenom)},${pool.escape(
            req.body.latitude
          )},${pool.escape(req.body.longitude)},${pool.escape(
            req.body.tel
          )},${pool.escape(req.body.email)},${0},${pool.escape(req.body.adress)}
               )`,
          (err, result) => {
            if (err) {
              throw new Error(err.message);
              return res.status(400).send({
                msg: err,
              });
            }
            return res.status(201).send({
              msg: "Registered!",
            });
          }
        );
      }
    }
  );
};

const loginRepresantative = async (req, res) => {};

const signURepresantativet = async (req, res, next) => {
  pool.query(
    `SELECT * FROM represantative  WHERE tel = ${pool.escape(req.body.tel)};`,
    (err, result) => {
      if (result.length) {
        return res.status(409).send({
          msg: "This phone number is already in use!",
        });
      } else {
        /* bcrypt.hash(req.body.password, 10, (err, hash) => { });
          if (err) {
            return res.status(500).send({
              msg: err,
            });
          } else { } */

        pool.query(
          `INSERT INTO represantative ( nom , prenom,latitude,longitude, tel,email,note,departement,univ_num,adress) VALUES ( ${pool.escape(
            req.body.nom
          )},${pool.escape(req.body.prenom)},${pool.escape(
            req.body.latitude
          )},${pool.escape(req.body.longitude)},${pool.escape(
            req.body.tel
          )},${pool.escape(req.body.email)},${0},${pool.escape(
            req.body.departement
          )},${pool.escape(req.body.univ_num)},${pool.escape(
            req.body.adress
          )})`,
          (err, result) => {
            if (err) {
              throw new Error(err.message);
              return res.status(400).send({
                msg: err,
              });
            }
            return res.status(201).send({
              msg: "Registered!",
            });
          }
        );
      }
    }
  );
};

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

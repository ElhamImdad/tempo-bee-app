const pool = require("../config/bdd");
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

const signUpClient = async (request, response) => {
  pool.query(
    `SELECT * FROM client  WHERE LOWER(tel) = LOWER(${pool.escape(
      req.body.tel
    )});`,
    (err, result) => {
      if (result.length) {
        return res.status(409).send({
          msg: "This phone number is already in use!",
        });
      } else {
        // username is available
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).send({
              msg: err,
            });
          } else {
            // has hashed pw => add to database
            pool.query(
              `INSERT INTO users (id, nom , prenom,latitude,longitude, adrress, tel,email,note,password) VALUES ('?', ${pool.escape(
                req.body.name
              )},${pool.escape(req.body.prenom)},${pool.escape(
                req.body.latitude
              )},${pool.escape(req.body.longitude)},'?',${pool.escape(
                req.body.tel
              )},${pool.escape(req.body.email)},${0},
               ${pool.escape(hash)}, now())`,
              (err, result) => {
                if (err) {
                  throw new Error(e.message);
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
        });
      }
    }
  );
};

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

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
          `INSERT INTO client ( nom , prenom,latitude,longitude, tel,email,adress) VALUES ( ${pool.escape(
            req.body.nom
          )},${pool.escape(req.body.prenom)},${pool.escape(
            req.body.latitude
          )},${pool.escape(req.body.longitude)},${pool.escape(
            req.body.tel
          )},${pool.escape(req.body.email)},${pool.escape(req.body.adress)}
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
          `INSERT INTO represantative ( nom , prenom,latitude,longitude, tel,email,departement,univ_num,adress) VALUES ( ${pool.escape(
            req.body.nom
          )},${pool.escape(req.body.prenom)},${pool.escape(
            req.body.latitude
          )},${pool.escape(req.body.longitude)},${pool.escape(
            req.body.tel
          )},${pool.escape(req.body.email)},${pool.escape(
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
            pool.query(
              `SELECT * FROM represantative  WHERE  tel = ${pool.escape(
                req.body.tel
              )};`,
              (err, result) => {
                if (result.length) {
                  pool.query(
                    `INSERT INTO working_times (id_rep, time) VALUES ?`,
                    [req.body.times.map((time) => [result[0].id, time.time])],
                    (err, result) => {
                      if (err) {
                        console.log("error: ", err);
                        result(err, null);
                        return;
                      }
                      console.log(res);
                      return res.status(201).send({
                        msg: "Registered!",
                      });
                    }
                  );
                } else {
                  res.status(400).send({
                    msg: "represantative not found",
                  });
                }
              }
            );
          }
        );
      }
    }
  );
};

const loginAdmin = async (request, response) => {};

const siignUpVerification = async (req, res) => {};

const getClientById = async (req, res) => {
  pool.query(
    `SELECT * FROM client  WHERE  id = ${pool.escape(req.body.id)};`,
    (err, result) => {
      if (result.length) {
        return res.status(200).send({
          client: result,
        });
      } else {
        res.status(400).send({
          msg: "client not found",
        });
      }
    }
  );
};

const getRepresantativeById = async (req, res) => {
  pool.query(
    `SELECT * FROM represantative  WHERE  id = ${pool.escape(req.body.id)};`,
    (err, result) => {
      if (result.length) {
        pool.query(
          `SELECT * FROM working_times  WHERE  id_rep = ${result[0].id};`,
          (err, resul) => {
            if (resul.length) {
              result[0]["times"] = resul;
            }
            return res.status(200).json({
              rep: result,
            });
          }
        );
      } else {
        res.status(400).send({
          msg: "represantative not found",
        });
      }
    }
  );
};
const updateProfileRepresantative = async (req, res) => {
  pool.query(
    `
UPDATE represantative 
set 
nom=${pool.escape(req.body.nom)}, 
prenom =${pool.escape(req.body.prenom)}, 
adress=${pool.escape(req.body.adress)},
email=${pool.escape(req.body.email)},
departement=${pool.escape(req.body.departement)},
latitude=${pool.escape(req.body.latitude)},
longitude=${pool.escape(req.body.longitude)}

where id='${req.body.id}'`,
    (err, result) => {
      if (err) {
        throw new Error(err.message);
        return res.status(400).send({
          msg: err,
        });
      }
      return res.status(201).send({
        msg: "updated!",
      });
    }
  );
};
const updateProfileClient = async (req, res) => {
  pool.query(
    `
UPDATE client 
set 
nom=${pool.escape(req.body.nom)}, 
prenom =${pool.escape(req.body.prenom)}, 
adress=${pool.escape(req.body.adress)},
email=${pool.escape(req.body.email)},

latitude=${pool.escape(req.body.latitude)},
longitude=${pool.escape(req.body.longitude)}

where id=${req.body.id}`,
    (err, result) => {
      if (err) {
        throw new Error(err.message);
        return res.status(400).send({
          msg: err,
        });
      }
      return res.status(201).send({
        msg: "updated!",
      });
    }
  );
};

const updateWorkingTimes = async (req, res) => {
  pool.query(
    `DELETE FROM working_times WHERE id_rep=${pool.escape(req.body.id_rep)}`,
    (err, resul) => {
      if (err) {
        throw new Error(err.message);
        return res.status(400).send({
          msg: err,
        });
      }
      pool.query(
        `INSERT INTO working_times (id_rep, time) VALUES ?`,
        [req.body.times.map((time) => [req.body.id_rep, time.time])],
        (err, result) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }

          return res.status(201).send({
            msg: "working times updated!",
          });
        }
      );
    }
  );
};
const addRepesantativeComment = async (req, res) => {
  const note = req.body.note ? req.body.note : "-1";
  const comment = req.body.comment ? req.body.comment : "";
  pool.query(
    `insert into comments (id_client,id_rep,comment,note,is_client) values (
    ${pool.escape(req.body.id_client)},  ${pool.escape(
      req.body.id_rep
    )},  ${pool.escape(comment)},  ${pool.escape(note)}, "false")`,
    (err, result) => {
      if (err) {
        return res.status(400).send({
          msg: err,
        });
      }

      return res.status(201).send({
        msg: "comment added!",
      });
    }
  );
};
const addClientComment = async (req, res) => {
  const comment = req.body.comment ? req.body.comment : "";
  const note = req.body.note ? req.body.note : "-1";
  pool.query(
    `insert into comments (id_client,id_rep,comment,note,is_client) values (
    ${pool.escape(req.body.id_client)},  ${pool.escape(
      req.body.id_rep
    )},  ${pool.escape(comment)},  ${pool.escape(note)}, "true")`,
    (err, result) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      return res.status(201).send({
        msg: "comment added!",
      });
    }
  );
};
module.exports = {
  addRepesantativeComment,
  addClientComment,
  updateWorkingTimes,
  updateProfileRepresantative,
  loginClient,
  signUpClient,
  getRepresantativeById,
  getClientById,
  siignUpVerification,
  loginAdmin,
  signURepresantativet,
  loginRepresantative,
  updateProfileClient,
};

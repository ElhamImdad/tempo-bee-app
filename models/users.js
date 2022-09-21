const pool = require("../config/bdd");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

function randomNumber(length) {
  return Math.floor(
    Math.pow(10, length - 1) +
      Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1)
  );
}
const loginClient = async (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tempobee.confirmation@gmail.com",
      pass: "jayczzzjwfzyawzu",
    },
  });

  pool.query(
    "SELECT * FROM `client` where email = ? ",
    [req.body.email],
    function (error, results) {
      if (error) {
        res.status(500).json({ message: "server error" });
      } else {
        if (results.length) {
          const nom = results[0].nom;
          const val = randomNumber(5).toString();
          console.log(val);
          pool.query(
            `insert into confirmation (email,code) values (${pool.escape(
              req.body.email
            )},${pool.escape(val)})`,
            (err, results) => {
              if (err) {
                res.status(500).json({ message: err });
              } else {
                var mailOptions = {
                  from: "ic_rouzzi@esi.dz",
                  to: req.body.email,
                  subject: "تاكيد الايميل",

                  html:
                    "<p> <b> tompobee في تطبيق " +
                    nom +
                    "مرحبا بك </b> <br>الرجاء ادخال الكود المرفق في التطبيق من اجل تاكيد حسابك:" +
                    val +
                    "<p>",
                };
                transporter.sendMail(mailOptions, function (error, info) {
                  console.log("hhhhhhh");
                  if (error) {
                    console.log(error);
                  } else {
                    console.log("Email sent: " + info.response);
                  }
                });
              }
            }
          );
        } else {
          res.status(400).json({ message: "email not found" });
        }
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
          `INSERT INTO client (nom,prenom,latitude,longitude,tel,email,adress) VALUES ( ${pool.escape(
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

const loginRepresantative = async (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ic_rouzzi@esi.dz",
      pass: "jshbeuwpztmksvyp",
    },
  });

  pool.query(
    "SELECT * FROM `represantative` where email = ? and univ_num=?",
    [req.body.email, req.body.univ_num],
    function (error, results) {
      if (error) {
        res.status(500).json({ message: "server error" });
      } else {
        if (results.length) {
          const val = randomNumber(5).toString();
          const name = results[0].nom;
          console.log(val);
          pool.query(
            `insert into confirmation (email,code) values (${pool.escape(
              req.body.email
            )},${pool.escape(val)})`,
            (err, results) => {
              if (err) {
                res.status(500).json({ message: err });
              } else {
                var mailOptions = {
                  from: "ic_rouzzi@esi.dz",
                  to: req.body.email,
                  subject: "Confirmation email",

                  html:
                    "<p> <b> tompobee في تطبيق " +
                    nom +
                    "مرحبا بك </b> <br>الرجاء ادخال الكود المرفق في التطبيق من اجل تاكيد حسابك:" +
                    val +
                    "<p>",
                };
                transporter.sendMail(mailOptions, function (error, info) {
                  if (error) {
                    console.log(error);
                  } else {
                    console.log("Email sent: " + info.response);
                  }
                });
              }
            }
          );
        } else {
          res.status(400).json({ message: "email not found" });
        }
      }
    }
  );
};

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

const clientSignUpVerification = async (req, res) => {
  pool.query(
    `SELECT * FROM confirmation   WHERE  email= ${pool.escape(
      req.body.email
    )};`,
    (err, result) => {
      if (result.length) {
        var code = result[0].code;
        console.log(code);
        if (code == req.body.code) {
          pool.query(
            `select * from client where email=${pool.escape(req.body.email)}`,
            (err, result) => {
              if (result.length) {
                const token = jwt.sign(
                  {
                    username: result[0].name,
                    userId: result[0].id,
                  },
                  "SECRETKEY",
                  {
                    expiresIn: "15d",
                  }
                );
                return res.status(200).send({
                  msg: "Logged in!",
                  token,
                  client: result,
                });
              }
            }
          );
        } else {
          res.status(400).send({
            msg: "code does not match",
          });
        }
      }
    }
  );
};
const represantativeSignUpVerification = async (req, res) => {
  pool.query(
    `SELECT * FROM confirmation   WHERE  email= ${pool.escape(
      req.body.email
    )};`,
    (err, result) => {
      if (result.length) {
        var code = result[0].code;
        console.log(code);
        if (code == req.body.code) {
          pool.query(
            `select * from reoresantative where email=${pool.escape(
              req.body.email
            )}`,
            (err, result) => {
              if (result.length) {
                const token = jwt.sign(
                  {
                    username: result[0].name,
                    userId: result[0].id,
                  },
                  "SECRETKEY",
                  {
                    expiresIn: "7d",
                  }
                );
                return res.status(200).send({
                  msg: "Logged in!",
                  token,
                  rep: result,
                });
              }
            }
          );
        } else {
          res.status(400).send({
            msg: "code does not match",
          });
        }
      }
    }
  );
};
const getClientById = async (req, res, next) => {
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

const getRepresantativeById = async (req, res, next) => {
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
const updateProfileRepresantative = async (req, res, next) => {
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
const updateProfileClient = async (req, res, next) => {
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

const updateWorkingTimes = async (req, res, next) => {
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
const addRepesantativeComment = async (req, res, next) => {
  const note = req.body.note ? req.body.note : "-1";
  const note_shop = req.body.note_shop ? req.body.note_shop : "-1";
  const comment = req.body.comment ? req.body.comment : "";
  pool.query(
    `insert into comments (id_client,id_rep,comment,note,is_client,id_shop,note_shop) values (
    ${pool.escape(req.body.id_client)},  ${pool.escape(
      req.body.id_rep
    )},  ${pool.escape(comment)},  ${pool.escape(note)}, "false", ${pool.escape(
      req.body.id_shop
    )}, ${pool.escape(note_shop)})`,
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
const addClientComment = async (req, res, next) => {
  const note_shop = req.body.note_shop ? req.body.note_shop : "-1";
  const comment = req.body.comment ? req.body.comment : "";
  const note = req.body.note ? req.body.note : "-1";
  pool.query(
    `insert into comments (id_client,id_rep,comment,note,is_client,id_shop,note_shop) values (
    ${pool.escape(req.body.id_client)},  ${pool.escape(
      req.body.id_rep
    )},  ${pool.escape(comment)},  ${pool.escape(note)}, "true",${pool.escape(
      req.body.id_shop
    )}, ${pool.escape(note_shop)})`,
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
const getRepresantativeNote = async (req, res, next) => {
  pool.query(
    `select * from comments where id_rep=? and isclient=?`,
    [req.body.id_rep, "false"],
    (err, result) => {
      if (err) {
        res.status(400).send({ msg: err });
      } else {
        let j = 0;
        const note = 0;
        for (let i = 0; i < result.length; i++) {
          if (result[i].note > -1) {
            note = note + result[i].note;
            j = j + 1;
          }
        }
        res.status(400).send({ note: note / j });
      }
    }
  );
};
const getClientNote = async (req, res, next) => {
  pool.query(
    `select * from comments where id_client=? and isclient=?`,
    [req.body.id_client, "true"],
    (err, result) => {
      if (err) {
        res.status(400).send({ msg: err });
      } else {
        let j = 0;
        const note = 0;
        for (let i = 0; i < result.length; i++) {
          if (result[i].note > -1) {
            note = note + result[i].note;
            j = j + 1;
          }
        }
        res.status(400).send({ note: note / j });
      }
    }
  );
};
const getShopNote = async (req, res) => {
  pool.query(
    `select * from comments where id_shop=? `,
    [req.res.id_shop],
    (err, result) => {
      if (err) {
        res.status(400).send({ msg: err });
      } else {
        let j = 0;
        const note = 0;
        for (let i = 0; i < result.length; i++) {
          if (result[i].note_shop > -1) {
            note = note + result[i].note_shop;
            j = j + 1;
          }
        }
        res.status(400).send({ note: note / j });
      }
    }
  );
};
module.exports = {
  clientSignUpVerification,

  getShopNote,
  getClientNote,
  getRepresantativeNote,
  addRepesantativeComment,
  addClientComment,
  updateWorkingTimes,
  updateProfileRepresantative,
  loginClient,
  signUpClient,
  getRepresantativeById,
  getClientById,

  represantativeSignUpVerification,
  loginAdmin,
  signURepresantativet,
  loginRepresantative,
  updateProfileClient,
};

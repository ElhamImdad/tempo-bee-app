const emailValidator = require("deep-email-validator");

const clientValidateRegister = (req, res, next) => {
  // username min length 3
  if (!req.body.nom || req.body.nom.length < 3) {
    return res.status(400).send({
      msg: "Please enter a name with min. 3 chars",
    });
  }
  if (!req.body.prenom || req.body.prenom.length < 3) {
    return res.status(400).send({
      msg: "Please enter a first name with min. 3 chars",
    });
  }
  if (!req.body.tel) {
    return res.status(400).send({
      msg: "Please enter a phone number",
    });
  }

  if (!emailValidator.validate(req.body.email)) {
    return res.status(400).send({
      msg: "Please enter a valide email",
    });
  }

  next();
};

const repValidateRegister = (req, res, next) => {
  // username min length 3
  if (!req.body.nom || req.body.nom.length < 3) {
    return res.status(400).send({
      msg: "Please enter a name with min. 3 chars",
    });
  }
  if (!req.body.prenom || req.body.prenom.length < 3) {
    return res.status(400).send({
      msg: "Please enter a first name with min. 3 chars",
    });
  }
  if (!req.body.tel) {
    return res.status(400).send({
      msg: "Please enter a phone number",
    });
  }

  if (!emailValidator.validate(req.body.email)) {
    return res.status(400).send({
      msg: "Please enter a valide email",
    });
  }

  if (!req.body.univ_num) {
    return res.status(400).send({
      msg: "Please enter a valide university number",
    });
  }
  if (!req.body.departement || req.body.departement.length < 3) {
    // password min 6 chars
    return res.status(400).send({
      msg: "Please enter a valide department",
    });
  }

  next();
  console.log("next");
};
module.exports = { clientValidateRegister, repValidateRegister };

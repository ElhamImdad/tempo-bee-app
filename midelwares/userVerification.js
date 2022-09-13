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
  if (!req.body.password || req.body.password.length < 6) {
    // password min 6 chars
    return res.status(400).send({
      msg: "Please enter a password with min. 6 chars",
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
  if (!req.body.password || req.body.password.length < 6) {
    // password min 6 chars
    return res.status(400).send({
      msg: "Please enter a password with min. 6 chars",
    });
  }
  if (!req.body.univ_num) {
    // password min 6 chars
    return res.status(400).send({
      msg: "Please enter a valide university number",
    });
  }
  if (!req.body.departement || req.body.departement.length < 3) {
    // password min 6 chars
    return res.status(400).send({
      msg: "Please enter a valide university number",
    });
  }
  next();
};
module.exports = { clientValidateRegister, repValidateRegister };

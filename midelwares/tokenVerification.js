const emailValidator = require("deep-email-validator");

const validateRegister = (req, res, next) => {
  // username min length 3
  if (!req.body.name || req.body.name.length < 3) {
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
  if (!req.body.name || req.body.name.length < 3) {
    return res.status(400).send({
      msg: "Please enter a name with min. 3 chars",
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
  // password (repeat) does not match
};

module.exports = { validateRegister };

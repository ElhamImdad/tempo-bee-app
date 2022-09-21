const jwt = require("jsonwebtoken");
const isLoggedIn = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(token);
    const decoded = jwt.verify(token, "SECRETKEY");
    console.log(decoded);
    req.userData = decoded;
    next();
  } catch (err) {
    return res.status(401).send({
      msg: err,
    });
  }
};
module.exports = { isLoggedIn };

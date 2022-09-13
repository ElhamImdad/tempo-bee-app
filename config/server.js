const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const usersRoute = require("../routes/users.js");
const deliveryRoute = require("../routes/delivery.js");
const productsRoute = require("../routes/products");
require("dotenv").config();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.Port || 5000;
app.get("/", (req, res) => {
  res.send("App is working");
});

app.use("/auth", usersRoute);
//app.use("/", deliveryRoute);
//app.use("/", productsRoute);
app.listen(port, () => console.log(`Server running on port ${port} ...`));

module.exports = app;

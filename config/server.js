const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const usersRoute = require("../routes/users");
const deliveryRoute = require("../routes/delivery");
const productsRoute = require("../routes/products");
const functions = require("../helpers/fonctions");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use("/", usersRoute);
app.use("/products", productsRoute);
const port = process.env.Port || 5000;
app.get("/", (req, res) => {
  res.send(functions.getAdress("51.507822,-0.076702"));
});

//app.use("/", deliveryRoute);
//app.use("/", productsRoute);
app.listen(port, () => console.log(`Server running on port ${port} ...`));
module.exports = app;

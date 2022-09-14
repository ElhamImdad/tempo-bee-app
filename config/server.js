const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const usersRoute = require("../routes/users");
const deliveryRoute = require("../routes/delivery");
const productsRoute = require("../routes/products");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use("/", usersRoute);
const port = process.env.Port || 5000;
app.get("/", (req, res) => {
  res.send("App is working");
});

//app.use("/", deliveryRoute);
//app.use("/", productsRoute);
app.listen(port, () => console.log(`Server running on port ${port} ...`));
module.exports = app;

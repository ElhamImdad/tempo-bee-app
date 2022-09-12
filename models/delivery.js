const pool = require("../config/bdd");
const clientOrders = async (request, response) => {
  let id = request.body.id;

  pool.query(
    "SELECT * FROM `delivery` where `id_client` = ?  and status= done ",
    [id],
    function (error, results, fields) {
      if (error) {
        response.status(500).json({ message: "server error" });
      } else {
        response.status(200).json({ message: "success" });
      }
    }
  );
};

const represantativeOrdes = async (request, response) => {
  let id = request.body.id;

  pool.query(
    "SELECT * FROM `delivery` where `id_rep` = ?  and status= done ",
    [id],
    function (error, results, fields) {
      if (error) {
        response.status(500).json({ message: "server error" });
      } else {
        response.status(200).json({ message: "success" });
      }
    }
  );
};

const order = async (request, response) => {};

const accepteOrder = async (request, response) => {
  let id = request.body.id;

  pool.query(
    "UPDATE * FROM `delivery`  SET  `status`=`done` where `id` = ?  ",
    [id],
    function (error, results, fields) {
      if (error) {
        response.status(500).json({ message: "server error" });
      } else {
        response.status(200).json({ message: "success" });
      }
    }
  );
};

module.exports = {
  clientOrders,
  represantativeOrdes,
  order,
  accepteOrder,
};

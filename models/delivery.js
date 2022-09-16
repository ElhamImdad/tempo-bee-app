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
    (error, results) => {
      if (error) {
        response.status(500).json({ message: "server error" });
      } else {
        response.status(200).json({ message: "success" });
      }
    }
  );
};

const order = async (req, res) => {
  pool.query(
    `INSERT INTO delivery (id_client,destination,payment_method,category,sub_category,shop,status) values(${pool.escape(
      req.body.id_client
    )}, ${pool.escape(req.body.address)}, ${pool.escape(
      req.body.payment_method
    )}, ${pool.escape(req.body.categorie)}, ${pool.escape(
      req.body.sub_categorie
    )}, ${pool.escape(req.body.shop)},'en cours')`,

    (error, results) => {
      if (error) {
        res.status(500).json({ message: error });
      } else {
        pool.query(
          `INSERT INTO delivery_products (id_delivery, product,quantite,price) VALUES ?`,
          [
            req.body.products.map((product) => [
              results.insertId,
              product.name,
              product.quantite,
              product.price,
            ]),
          ],
          (err, result) => {
            if (err) {
              console.log("error: ", err);
            } else {
              return res.status(200).json({ message: "order added" });
            }
          }
        );
      }
    }
  );
};

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

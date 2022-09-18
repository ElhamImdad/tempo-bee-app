const pool = require("../config/bdd");
const clientOrders = async (request, response) => {
  let id = request.body.id;

  pool.query(
    "SELECT * FROM `delivery` where `id_client` = ? and  status =? ",
    [id, "done"],
    function (error, results) {
      if (error) {
        response.status(500).json({ message: error });
      } else {
        response.status(200).json({ orders: results });
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
        response.status(200).json({ orders: results });
      }
    }
  );
};

const getEncoursOrders = async (req, res) => {
  const tab = [];
  pool.query(
    "SELECT * FROM `delivery`  where    status= ? ",
    ["encours"],
    (error, results) => {
      if (error) {
        res.status(500).json({ message: "server error" });
      } else {
        res.status(200).json({ orders: results });
      }
    }
  );
};
const getOrderwithPriducts = (req, res) => {
  let id = req.body.id;

  pool.query(
    "SELECT * FROM `delivery` d  where    id= ? ",
    [id],
    (error, results) => {
      if (error) {
        res.status(500).json({ message: "server error" });
      } else {
        pool.query(
          "SELECT * FROM `delivery_products` where `id_delivery` = ?  ",
          [results[0].id],
          (error, result) => {
            if (result.length) {
              results[0]["products"] = result;
            }
            res.status(200).json({ order: results });
          }
        );
      }
    }
  );
};
const order = async (req, res) => {
  pool.query(
    `INSERT INTO delivery (id_client,destination,payment_method,category,sub_category,shop,status,id_shop) values(${pool.escape(
      req.body.id_client
    )}, ${pool.escape(req.body.address)}, ${pool.escape(
      req.body.payment_method
    )}, ${pool.escape(req.body.categorie)}, ${pool.escape(
      req.body.sub_categorie
    )}, ${pool.escape(req.body.shop)},'en cours',${pool.escape(
      req.body.id_shop
    )},)`,

    (error, results) => {
      if (error) {
        res.status(500).json({ message: error });
      } else {
        pool.query(
          l`INSERT INTO delivery_products (id_delivery, product,quantite,price) VALUES ?`,
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

const accepteOrder = async (req, res) => {
  let id = req.body.id;
  pool.query(
    "select * FROM `delivery`  where status=? and  id = ?  ",
    ["encours", id],
    function (error, results) {
      if (error) {
        res.status(500).json({ message: error });
      } else {
        if (results.length) {
          pool.query(
            `UPDATE  delivery  SET  
            status='done',
            id_rep=${pool.escape(req.body.id_rep)}

            where id =${pool.escape(req.body.id)}  `,

            function (error, results, fields) {
              if (error) {
                res.status(500).json({ message: error });
              } else {
                res.status(200).json({ message: "order accepted" });
              }
            }
          );
        } else res.status(200).json({ message: "order oldedy taken" });
      }
    }
  );
};

module.exports = {
  getOrderwithPriducts,
  clientOrders,
  represantativeOrdes,
  getEncoursOrders,
  order,
  accepteOrder,
};

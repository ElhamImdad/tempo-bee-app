const productsModel = require("../models/products");
const pool = require("../config/bdd");

const getAllCategorie = async (req, res) => {
  pool.query(`SELECT * FROM categorie `, (err, resutl) => {
    if (err) res.status(400).send({ msg: err });
    else res.status(200).send({ categories: resutl });
  });
};
const getAllSubCategorie = async (req, res) => {
  pool.query(
    `SELECT * FROM sub_categorie where id_categorie=${pool.escape(
      req.body.id
    )} `,
    (err, resutl) => {
      if (err) res.status(400).send({ msg: err });
      else res.status(200).send({ sub_categories: resutl });
    }
  );
};
const getAllShops = async (req, res) => {
  pool.query(
    `SELECT * FROM shop where id_sub_categorie=${pool.escape(req.body.id)}  `,
    (err, resutl) => {
      if (err) res.status(400).send({ msg: err });
      else res.status(200).send({ shops: resutl });
    }
  );
};

const getAllProducts = async (req, res) => {
  pool.query(
    `SELECT * FROM product where id_shop=${pool.escape(req.body.id)}  `,
    (err, resutl) => {
      if (err) res.status(400).send({ msg: err });
      else res.status(200).send({ products: resutl });
    }
  );
};

module.exports = {
  getAllCategorie,
  getAllSubCategorie,
  getAllShops,
  getAllProducts,
};

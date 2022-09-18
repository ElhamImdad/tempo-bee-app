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

const addCategorie = async (req, res) => {
  const url = "image.png";

  pool.query(
    `INSERT INTO  categorie  (name,image) VALUES (${pool.escape(
      req.body.name
    )}, ${pool.escape(url)}) `,
    (err, resutl) => {
      if (err) res.status(400).send({ msg: err });
      else res.status(200).send({ msg: "categorie add " });
    }
  );
};

const editCategorie = async (req, res) => {
  const url = "image.png";

  pool.query(
    ` update   categorie  set  
  name=${pool.escape(req.body.name)},
  image=${pool.escape(url)}  
  where id=${req.body.id}`,
    (err, resutl) => {
      if (err) res.status(400).send({ msg: err });
      else res.status(200).send({ msg: "categorie updated " });
    }
  );
};

const deletCategorie = async (req, res) => {
  pool.query(
    `DELETE FROM categorie WHERE id=${pool.escape(req.body.id)}`,
    (err, resutl) => {
      if (err) res.status(400).send({ msg: err });
      else res.status(200).send({ msg: "categorie deleted " });
    }
  );
};

const addSub_categorie = async (req, res) => {
  const url = "image.png";

  pool.query(
    `INSERT INTO  sub_categorie  (name,image,id_categorie) VALUES (${pool.escape(
      req.body.name
    )}, ${pool.escape(url)},${pool.escape(req.body.id_categorie)})`,
    (err, resutl) => {
      if (err) res.status(400).send({ msg: err });
      else res.status(200).send({ msg: "sub_categorie add " });
    }
  );
};

const editSub_categorie = async (req, res) => {
  const url = "image.png";

  pool.query(
    ` update   sub_categorie  set  
  name=${pool.escape(req.body.name)},
  image=${pool.escape(url)}  
  where id=${req.body.id}`,
    (err, resutl) => {
      if (err) res.status(400).send({ msg: err });
      else res.status(200).send({ msg: "sub_categorie updated " });
    }
  );
};

const deletSub_categorie = async (req, res) => {
  const id = req.body.id_categorie ? req.body.id_categorie : req.body.id;
  pool.query(
    `DELETE FROM sub_categorie WHERE id=${pool.escape(id)}`,
    (err, resutl) => {
      if (err) res.status(400).send({ msg: err });
      else res.status(200).send({ msg: "sub_categorie deleted " });
    }
  );
};

const addshop = async (req, res) => {
  const url = "image.png";
  pool.query(
    `INSERT INTO  shop  (name,image,id_sub_categorie,longitude,latitude,adresse,delivery_time,delivery_price,min_price) VALUES (${pool.escape(
      req.body.name
    )}, ${pool.escape(url)},${pool.escape(
      req.body.id_sub_categorie
    )},${pool.escape(req.body.latitude)},${pool.escape(
      req.body.longitude
    )},${pool.escape(req.body.adresse)},${pool.escape(
      req.body.delivery_time
    )},${pool.escape(req.body.delivery_price)},${pool.escape(
      req.body.min_price
    )})`,
    (err, resutl) => {
      if (err) res.status(400).send({ msg: err });
      else res.status(200).send({ msg: "shop added " });
    }
  );
};

const editshop = async (req, res) => {
  const url = "image.png";
  pool.query(
    ` update   shop  set  
  name=${pool.escape(req.body.name)},
  image=${pool.escape(url)} ,
    latitude=${pool.escape(req.body.latitude)} ,
    longitude=${pool.escape(req.body.longitude)} ,
    adress=${pool.escape(req.body.adress)} ,
    delivery_time=${pool.escape(req.body.delivery_time)} ,  
   delivery_price=${pool.escape(req.body.delivery_price)} ,  
   min_price=${pool.escape(req.body.min_price)}
   where id=${req.body.id}`,
    (err, resutl) => {
      if (err) res.status(400).send({ msg: err });
      else res.status(200).send({ msg: "shop updated " });
    }
  );
};

const deletshop = async (req, res) => {
  const id = req.body.id_sub_categorie
    ? req.body.id_sub_categorie
    : req.body.id;
  pool.query(`DELETE FROM shop WHERE id=${pool.escape(id)}`, (err, resutl) => {
    if (err) res.status(400).send({ msg: err });
    else res.status(200).send({ msg: "shop deleted " });
  });
};
const addproduct = async (req, res) => {
  const url = "image.png";

  pool.query(
    `INSERT INTO  product  (name,image,id_shop,price) VALUES (${pool.escape(
      req.body.name
    )}, ${pool.escape(url)},${pool.escape(req.body.id_shop)},${pool.escape(
      req.body.price
    )})`,
    (err, resutl) => {
      if (err) res.status(400).send({ msg: err });
      else {
        const ins = resutl.insertId;
        pool.query(
          `select * FROM shop WHERE id=${pool.escape(req.body.id_shop)}`,
          (err, resutl) => {
            if (err) res.status(400).send({ msg: err });
            {
              console.log();
              const shop_name = resutl[0].name;
              const id_sub_categorie = resutl[0].id_sub_categorie;
              pool.query(
                `select * FROM  sub_categorie WHERE id=${pool.escape(
                  id_sub_categorie
                )}`,
                (err, resutl) => {
                  if (err) res.status(400).send({ msg: err });
                  else {
                    const sub_categorie_name = resutl[0].name;

                    const id_categorie = resutl[0].id_categorie;
                    pool.query(
                      `select * FROM categorie WHERE id=${pool.escape(
                        id_categorie
                      )}`,
                      (err, resutl) => {
                        if (err) res.status(400).send({ msg: err });
                        else {
                          const categorie_name = resutl[0].name;
                          pool.query(
                            ` update product set shope_name=${pool.escape(
                              shop_name
                            )},sub_category_name=${pool.escape(
                              sub_categorie_name
                            )} ,category_name=${pool.escape(
                              categorie_name
                            )} where id=${ins}`,
                            (err, resutl) => {
                              if (err) res.status(400).send({ msg: err });
                              else
                                res.status(200).send({ msg: " product add  " });
                            }
                          );
                        }
                      }
                    );
                  }
                }
              );
            }
          }
        );
      }
    }
  );
};

const editproduct = async (req, res) => {
  const url = "image.png";

  pool.query(
    ` update   product  set  
  name=${pool.escape(req.body.name)},
  image=${pool.escape(url)} ,
  price= ${pool.escape(req.body.price)}
  where id=${req.body.id}`,
    (err, resutl) => {
      if (err) res.status(400).send({ msg: err });
      else res.status(200).send({ msg: "product updated " });
    }
  );
};

const deletproduct = async (req, res) => {
  const id = req.body.shop ? req.body.shop : req.body.id;
  pool.query(
    `DELETE FROM product WHERE id=${pool.escape(id)}`,
    (err, resutl) => {
      if (err) res.status(400).send({ msg: err });
      else res.status(200).send({ msg: "product deleted " });
    }
  );
};
module.exports = {
  addCategorie,
  editCategorie,
  deletCategorie,
  addSub_categorie,
  editSub_categorie,
  deletSub_categorie,
  addshop,
  editshop,
  deletshop,
  addproduct,
  editproduct,
  deletproduct,
  getAllCategorie,
  getAllSubCategorie,
  getAllShops,
  getAllProducts,
};

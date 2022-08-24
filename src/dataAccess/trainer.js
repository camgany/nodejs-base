const sql = require("../config/db");

const findAll = () => {
  return new Promise((resolve, reject) => {
    sql.query("SELECT * FROM entrenador", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const createTraine = (body) => {
  const {nombre, id_pokemon} = body;
  // String Template 
  let query = `insert into trainer (nombre, id_pokemon) values (${nombre}, ${id_pokemon})`
  return new Promise((resolve, reject) => {
    sql.query(query, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
}

module.exports = { findAll };
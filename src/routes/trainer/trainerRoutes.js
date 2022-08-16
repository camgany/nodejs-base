const routes = require("express").Router();
const getTrainers  = require("../../services/trainer/getTrainers");
routes.get("/trainers", async (req, res) => {
  const response = await getTrainers(req, res);
  res.json(response);
});

module.exports = routes;

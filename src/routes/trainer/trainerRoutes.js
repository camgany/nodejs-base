const routes = require("express").Router();
const getTrainers = require("../../services/trainer/getTrainers");
const createTrainer = require("../../services/trainer/createTrainer")
routes.get("/trainers", async (req, res) => {
  const response = await getTrainers(req, res);
  res.json(response);
});

routes.post("/trainer", async (req, res) => {
  const response = await createTrainer(req, res);
  res.json(response);
});

module.exports = routes;
// localhost:5000/api/v1/pokedex/trainers

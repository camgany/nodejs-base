const routes = require("express").Router();
const trainer = require("./trainer/trainerRoutes");
const BASE_URL = "/v1/pokedex";
routes.use(BASE_URL, trainer);
//routes.use(BASE_URL, auth);

module.exports = routes;

const { Router } = require("express");
const { getTicketController } = require("../controllers/getTickersController");
const router = Router();

router.get("/tickers", getTicketController);

module.exports = { rootRouter: router };

const express = require("express");
const router = express.Router();
const { currencyRateFinding } = require("../controllers/currencyController");

router.get("/currencyRate", currencyRateFinding);

module.exports = router;

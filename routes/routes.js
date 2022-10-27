const express = require("express");
const { getBitcoinData } = require("../controllers/bitcoinController");
const router = express.Router();
const { currencyRateFinding } = require("../controllers/currencyController");

router.get("/currencyRate", currencyRateFinding);
router.get("/bitcoinData", getBitcoinData);

module.exports = router;

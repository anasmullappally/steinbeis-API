import { currencyRateFinding } from "../controllers/currencyController";

const express = require("express");
const router = express.Router();

router.get("/currencyRate", currencyRateFinding);

export default router;

const axios = require("axios");
const currencyRateFinding = async (req, res) => {
  try {
    const currencyCode = req.query.currencyCode;
    const rates = await axios.get("https://open.er-api.com/v6/latest/INR");
    const rate = rates.data.rates[currencyCode];
    rate
      ? res.status(200).json({ rate, currencyCode })
      : res.status(400).json({ message: "Invalid currency code" });
  } catch (error) {
    res.status(error.response.status).json({ error: error.message });
  }
};

module.exports = { currencyRateFinding };

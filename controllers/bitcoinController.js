const axios = require("axios");
const getBitcoinData = async (req, res) => {
  try {
    const PORT = process.env.PORT || 5000;
    const currencyCode = req.query.currencyCode;
    const response = await axios.get(
      `http://localhost:${PORT}/api/currencyRate/?currencyCode=${currencyCode}`
    );
    const rate = response.data.rate;

    await currencyBData()
      .then((response) => {
        const data = response.data.find((item) => item.baseAsset == "btc");
        data.openPrice *= rate;
        data.lowPrice *= rate;
        data.highPrice *= rate;
        data.lastPrice *= rate;
        data.bidPrice *= rate;
        data.askPrice *= rate;
        data.quoteAsset = currencyCode;
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const currencyBData = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://api.wazirx.com/sapi/v1/tickers/24hr")
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = { getBitcoinData };

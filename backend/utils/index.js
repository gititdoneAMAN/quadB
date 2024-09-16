const axios = require("axios");
const { pool } = require("../models/model");

const fetchAndStoreData = async () => {
  try {
    const response = await axios.get("https://api.wazirx.com/api/v2/tickers");
    const tickers = Object.values(response.data).slice(0, 10);

    for (const ticker of tickers) {
      const { name, last, buy, sell, volume, base_unit } = ticker;
      await pool.query(
        `INSERT INTO wazirx_data (name, last, buy, sell, volume, base_unit)
          VALUES ($1, $2, $3, $4, $5, $6)`,
        [name, last, buy, sell, volume, base_unit]
      );
    }
    console.log("Data successfully stored in the database.");
  } catch (error) {
    console.error("Error fetching data from the API:", error);
  }
};

module.exports = { fetchAndStoreData };

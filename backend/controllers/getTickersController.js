const { pool } = require("../models/model");

const getTicketController = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM wazirx_data");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data from the database" });
  }
};

module.exports = { getTicketController };

const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const createTable = async () => {
  await pool.query(`
      CREATE TABLE IF NOT EXISTS wazirx_data (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50),
        last NUMERIC,
        buy NUMERIC,
        sell NUMERIC,
        volume NUMERIC,
        base_unit VARCHAR(10)
      )
    `);
};

module.exports = { createTable, pool };

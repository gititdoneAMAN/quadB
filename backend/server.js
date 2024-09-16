const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { rootRouter } = require("./routes/route");

const { fetchAndStoreData } = require("./utils");
const { createTable } = require("./models/model");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use("/api/v1", rootRouter);

app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
  await createTable();
  await fetchAndStoreData();
});

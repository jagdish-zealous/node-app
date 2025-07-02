const express = require("express");
const fs = require("fs");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    ping: true,
  });
});

module.exports = app;

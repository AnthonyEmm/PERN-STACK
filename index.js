require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8050;
const USER = process.env.USER;
const HOST = process.env.HOST;
const DATABASE = process.env.DATABASE;
const PASSWORD = process.env.PASSWORD;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`));

require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const pool = require("./DB/dbController.js");

app.use(cors());

const PORT = process.env.PORT || 8050;
const USER = process.env.USER;
const HOST = process.env.HOST;
const DATABASE_URL = process.env.DATABASE_URL;
const PASSWORD = process.env.PASSWORD;

// Testing App //
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the Books Database</h1>`);
});

// Handling GET requests to retrieve all books from the database //
app.get("/books", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM books");
    res.json(result.rows);
  } catch (error) {
    res.sendStatus(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`));

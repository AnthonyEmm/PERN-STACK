require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const pool = require("./DB/dbController.js");

app.use(cors());
app.use(express.json());

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
    res.sendStatus(500).json({ error: "Internal Server Error" });
  }
});

// POST request on path ‘/books’ into the database //
app.post("/books/create", async (req, res) => {
  const {
    title,
    author,
    description,
    category,
    cover_url,
    published_at,
    is_active,
  } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO books (title, author, description, category, cover_url, published_at, is_active) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        title,
        author,
        description,
        category,
        cover_url,
        published_at,
        is_active,
      ],
    );
    res.status(201).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE request on path ‘/books/:id’ to delete a book from DB //
app.delete("/books/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM books WHERE id=$1 RETURNING *",
      [id],
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Starting the Server //
app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`));

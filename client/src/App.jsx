import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8050/books")
      .then((response) => {
        console.log(response);
        setBooks(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <form>
        <label for="btitle">Title</label>
        <br />
        <input type="text" id="btitle" name="btitle" placeholder="Book Title" />
        <br />
        <label for="author">Author</label>
        <br />
        <input type="text" id="author" name="author" placeholder="Author" />
        <br />
        <label for="description">Description</label>
        <br />
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description"
        />
        <br />
        <label for="category">Category</label>
        <br />
        <input
          type="text"
          id="category"
          name="category"
          placeholder="Category"
        />
        <br />
        <label for="url">Cover URL</label>
        <br />
        <input type="text" id="URL" name="URL" placeholder="Cover URL" />
        <br />
        <label for="date">Published At</label>
        <br />
        <input type="date" id="date" name="date" />
      </form>
      <br />
      <button type="submit">Submit</button>
      {books.map((book) => {
        return (
          <div key={book.id}>
            <h1>{book.title}</h1> <h2>{book.author}</h2>
            <p>{book.description}</p> <h2>{book.category}</h2>
            <img src={book.cover_url} />
            <p>{book.published_at}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;

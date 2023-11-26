import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import CreateBook from "./components/CreateBook";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8050/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/books" element={<books />} />
          <Route path="/books/create" element={<CreateBook />} />
        </Routes>
      </BrowserRouter>
      <h1>Book List</h1>
      {books.map((book) => {
        return (
          <div className="book-list">
            <div key={book.id}>
              <h1>{book.title}</h1> <h2>{book.author}</h2>
              <p>{book.description}</p> <h2>{book.category}</h2>
              <img src={book.cover_url} />
              <p>{book.published_at}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;

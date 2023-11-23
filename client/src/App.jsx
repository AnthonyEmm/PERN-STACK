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
      <input type="text" placeholder="Book title" />
      {books.map((book) => {
        return (
          <div key={book.id}>
            {book.title} {book.author} {book.description} {book.category}
            {book.cover_url} {book.published_at} {book.is_active}
          </div>
        );
      })}
    </>
  );
}

export default App;

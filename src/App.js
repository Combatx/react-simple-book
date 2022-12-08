import { useState } from "react";
import { BookCreate } from "./BookCreate";

export default function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log("est", title);
  };

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

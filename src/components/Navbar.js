import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

function Navbar() {
  const { books } = useContext(BookContext);
  return (
    <div className='navbar'>
      <h1>Best Reading List</h1>
      <p>Currently You have {books.length} books to read this year </p>
    </div>
  );
}

export default Navbar;

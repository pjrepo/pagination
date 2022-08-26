import React from "react";

import Book from "./Book";

import { books } from "./Books";

const BookList = () => {
  return (
    <section>
      {books.map((book) => {
        const { image, title, author } = book;
        return (
          <Book key={book.id} image={image} title={title} author={author} />
        );
        // return <Book key={book.id} {...book} />;
      })}
    </section>
  );
};

export default BookList;

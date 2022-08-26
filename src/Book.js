import React from "react";

import Image from "./Image";
import Author from "./Author";
import Title from "./Title";

const Book = (props) => {
  const { image, author, title } = props;

  const clickHandler = (event) => {
    console.log(event);
  };

  return (
    <article>
      <Image image={image} />
      <Author author={author} />
      <Title title={title} />
      <button onClick={clickHandler}>Button</button>
    </article>
  );
};

export default Book;

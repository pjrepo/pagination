import React from "react";

const Title = (props) => {
  const clickHandler = () => console.log(props.title);
  return <h4 onClick={clickHandler}>{props.title}</h4>;
};

export default Title;

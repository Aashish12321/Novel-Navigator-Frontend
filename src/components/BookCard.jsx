import React from "react";

const BookCard = (props) => {
  return (
    <div className="bookcard">
      <img className="bookcard--cover" src={props.image_url}></img>
      <p>{props.title}</p>
      <p>{props.language}</p>
      <p>{props.year}</p>
    </div>
  );
};

export default BookCard;

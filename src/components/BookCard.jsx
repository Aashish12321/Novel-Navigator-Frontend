import React from "react";

const BookCard = (props) => {
  return (
    <div className="bookcard">
      <img className="bookcard--cover" src={props.image_url}></img>
      <p>{props.title}</p>
      <div className="mt-2" style={{ fontWeight: "500" }}>
        <p>{props.language}</p>
        <p>{props.year}</p>
      </div>
    </div>
  );
};

export default BookCard;

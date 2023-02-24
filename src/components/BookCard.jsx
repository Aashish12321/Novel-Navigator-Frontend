import React from "react";
import Card from "react-bootstrap/Card";

const BookCard = (props) => {
  return (
    <div className="p-1 clickable-card m-3">
      <Card style={{ width: "15rem" }}>
        <Card.Img
          variant="top"
          className="bookcard--cover"
          src={props.image_url}
        />
        <Card.Body>
          <Card.Title>{props.BookName}</Card.Title>
          <Card.Text>Ratings: {props.ratings}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookCard;

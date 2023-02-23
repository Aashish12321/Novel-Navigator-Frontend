import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ClickableCard = (props) => {
  return (
    <div className="p-3">
      <Card style={{ width: "16rem" }}>
        <Card.Img
          variant="top"
          className="bookcard--cover"
          src={props.image_url}
        />
        <Card.Body>
          <Card.Title>{props.BookName}</Card.Title>
          <Card.Text>Ratings : {props.ratings}</Card.Text>
          <Button variant="dark">Add to liked books</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ClickableCard;

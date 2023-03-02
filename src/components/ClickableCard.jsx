import React from "react";
import axios from "axios";
import { useAuthUser } from "react-auth-kit";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ClickableCard = (props) => {
  const book_id = props.book_id;
  const auth = useAuthUser();

  function addToLiked() {
    const url = "http://127.0.0.1:5000/addbook";
    const data = {
      book_id: book_id,
      username: auth().username,
    };
    axios
      .post(url, data)
      .then(function (response) {
        console.log(response.data);
        alert(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="p-1 clickable-card">
      <Card style={{ width: "16rem" }}>
        <Card.Img
          variant="top"
          className="bookcard--cover"
          src={props.image_url}
        />
        <Card.Body>
          <Card.Title>{props.BookName}</Card.Title>
          <Card.Text>Author : {props.Author}</Card.Text>
          <Button onClick={addToLiked} variant="dark">
            Add to liked books
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ClickableCard;

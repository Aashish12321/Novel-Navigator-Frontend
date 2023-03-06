import axios from "axios";
import React from "react";
import { useAuthUser } from "react-auth-kit";
import { Button } from "@mui/material";

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
    <div className="card--container">
      <div>
        <img className="card--image" src={props.image_url}></img>
      </div>
      <h5 className="mt-2 p-2 card--title">{props.BookName}</h5>
      <h5 className="p-2 card--author">Author: {props.author}</h5>
      <Button className="mb-3" variant="contained" onClick={addToLiked}>
        Add to My Liked
      </Button>
    </div>
  );
};

export default ClickableCard;

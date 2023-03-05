import React from "react";
import { useAuthUser } from "react-auth-kit";
import axios from "axios";
import Button from "react-bootstrap/Button";
import BookCard from "./BookCard";

const RecommendedBooks = () => {
  const [recBooks, setRecBooks] = React.useState([]);
  const auth = useAuthUser();
  const data = {
    username: auth().username,
  };

  const url = "http://127.0.0.1:5000/getrecommendations";
  const fetchdata = async () => {
    console.log(data);
    const response = await axios.post(url, data);
    setRecBooks(response.data);
    console.log("recommended books");
    console.log(recBooks);
  };

  React.useEffect(() => {
    fetchdata();
  }, []);
  const recElements = recBooks.map((element) => {
    return (
      <BookCard
        BookName={element.title}
        author={element.author}
        image_url={element.image}
      />
    );
  });

  return (
    <div>
      {recBooks.length === 0 ? (
        <p>Loading your recommendations, please wait</p>
      ) : (
        <div className="book-container">{recElements}</div>
      )}
    </div>
  );
};

export default RecommendedBooks;

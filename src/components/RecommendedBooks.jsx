import React from "react";
import { useAuthUser } from "react-auth-kit";
import axios from "axios";
import BookCardWithAuthor from "./BookCardWithAuthor";

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
      <BookCardWithAuthor
        BookName={element.title}
        author={element.author}
        image_url={element.image}
      />
    );
  });

  return (
    <div>
      <p className="Recommendations--heading p-5">Books tailored for you!</p>
      {recBooks.length === 0 ? (
        <h1
          style={{
            textAlign: "center",
            fontFamily: "Karla",
            fontWeight: "bold",
          }}
        >
          Loading Your Recommendations, Please Wait..
        </h1>
      ) : (
        <div className="book-container">{recElements}</div>
      )}
    </div>
  );
};

export default RecommendedBooks;

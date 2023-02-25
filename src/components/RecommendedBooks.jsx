import React from "react";
import { useAuthUser } from "react-auth-kit";
import axios from "axios";

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
    console.log(recBooks);
  };

  React.useEffect(() => {
    fetchdata();
  }, []);

  const recElements = recBooks.map(function (element) {
    return <p>{element}</p>;
  });
  return <div>{recElements}</div>;
};

export default RecommendedBooks;

import React from "react";
import Header from "../components/Header";
import BookCard from "../components/BookCard";
import axios from "axios";

const Top50Books = () => {
  const [topBookData, setTopBookData] = React.useState([]);
  const url = "http://127.0.0.1:5000/top50books";
  const fetchdata = async () => {
    const res = await axios.get(url);
    // console.log(res.data);
    setTopBookData(res.data);
  };
  React.useEffect(() => {
    fetchdata();
  }, []);
  const bookElements = topBookData.map(function (element) {
    return (
      <BookCard
        BookName={element.title}
        ratings={element.ratings}
        image_url={element.cover_image}
      />
    );
  });

  return (
    <>
      <Header />
      <p className="TopBooks--heading mt-4">Top 50 Books</p>
      <div className="book-container">{bookElements}</div>
    </>
  );
};

export default Top50Books;

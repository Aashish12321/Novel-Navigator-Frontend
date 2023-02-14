import React from "react";
import Header from "../components/Header";
import BookCard from "../components/BookCard";
import BookData from "../assets/books.json";

const Top50Books = () => {
  const bookElements = BookData.map(function (element) {
    return (
      <BookCard
        title={element.title}
        language={element.language}
        year={element.year}
        image_url={`src/assets/${element.imageLink}`}
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

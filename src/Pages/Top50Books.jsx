import React from "react";
import Header from "../components/Header";
import TopBooksTitle from "../components/TopBooksTitle";
import BookCard from "../components/BookCard";
import BookData from "../../public/assets/books.json";

const Top50Books = () => {
  const bookElements = BookData.map(function (element) {
    return (
      <BookCard
        title={element.title}
        language={element.language}
        year={element.year}
        image_url={`../assets/${element.imageLink}`}
      />
    );
  });

  return (
    <>
      <Header />
      <TopBooksTitle />
      <div className="book-container">{bookElements}</div>
    </>
  );
};

export default Top50Books;

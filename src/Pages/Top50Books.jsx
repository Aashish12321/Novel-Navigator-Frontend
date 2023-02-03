import React from "react";
import Header from "../components/Header";
import TopBooksTitle from "../components/TopBooksTitle";
import BookCard from "../components/BookCard";

const Top50Books = () => {
  return (
    <>
      <Header />
      <TopBooksTitle />
      <BookCard
        title="The Stranger"
        image_url="../assets/images/l-etranger.jpg"
        language="French"
        year="1942"
      />
    </>
  );
};

export default Top50Books;

import React from "react";
import Header from "../components/Header";
import Recommendations from "../components/Recommendations";
import RecommendedBooks from "../components/RecommendedBooks";

const GetRecommendations = () => {
  return (
    <div>
      <Header />
      <Recommendations />
      <RecommendedBooks />
    </div>
  );
};

export default GetRecommendations;

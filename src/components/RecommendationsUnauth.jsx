import React from "react";
import Header from "./Header";

const RecommendationsUnauth = () => {
  return (
    <div>
      <Header />
      <h1 className="p-5 text-dark">
        You Need to Login first to get personalized recommendations.
      </h1>
    </div>
  );
};

export default RecommendationsUnauth;

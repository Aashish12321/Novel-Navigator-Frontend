import React from "react";
import Header from "./Header";

const RecommendationsUnauth = () => {
  return (
    <div>
      <Header />
      <h1 className="p-5" style={{ fontFamily: "Karla", textAlign: "center" }}>
        You Need to Login first to get personalized recommendations.
      </h1>
    </div>
  );
};

export default RecommendationsUnauth;

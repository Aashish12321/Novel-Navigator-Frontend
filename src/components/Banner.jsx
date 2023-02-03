import React from "react";
import readingBook from "../assets/images/reading-book.png";
const Banner = () => {
  return (
    <div className="banner--body">
      <div className="promo-text">
        <p className="top-line">Read what you love to read</p>
        <p className="promo-para">
          With recommendations from us. Be it top books of all time or
          personalized recommendations for you, we have got you covered.
        </p>
      </div>
      <img src={readingBook} className="promo-image"></img>
    </div>
  );
};

export default Banner;

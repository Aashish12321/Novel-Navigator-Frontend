import React from "react";

const Banner = () => {
  return (
    <div className="banner--body">
      <div className="promo-text">
        <p className="top-line p-4">Read what you love to read</p>
        <p className="promo-para p-4">
          With recommendations from us. Be it top books of all time or
          personalized recommendations for you, we have got you covered.
        </p>
      </div>
      <img
        src="src/assets/images/reading-book.png"
        className="promo-image"
      ></img>
    </div>
  );
};

export default Banner;

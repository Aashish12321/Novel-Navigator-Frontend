import React from "react";
import Header from "../components/Header";

const About = () => {
  return (
    <div>
      <Header />
      <p className="about--text">
        About Us:
        <br />
        We are Computer Engineering Students currently enrolled in 3rd year (as
        of 2023).
        <br />
        This project has been done for fulfillment of Minor Project to be done
        in 3rd year by Computer Engineering Students. The purpose of this
        project is to create a simplistic recommendation system for Book Lovers.
        Rather than reading what is popular, avid readers can provide us with a
        list of their previously liked books and we provide with recommendations
        to suit their taste.
      </p>
      <footer>Made with ❤️ by Aashish Sah and Ashwini Mandal</footer>
    </div>
  );
};

export default About;

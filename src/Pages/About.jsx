import React from "react";
import Header from "../components/Header";

const About = () => {
  return (
    <div>
      <Header />
      <p className="about--text">
        About Us:
        <br />
        SoftAi is a technology company that is dedicated to make the world a
        better place by integrating AI into our daily lives. Our mission is to
        improve lives by offering AI solutions to a number of problems.
        <br />
        Our team of experts, with 10+ of combined experience in the tech
        industry, is dedicated to ensuring that our customers receive the
        highest level of value. Whether you are an individual customer or
        company, we are here to help.
      </p>
      <footer>Made with &#x2764; by SoftAi </footer>
    </div>
  );
};

export default About;

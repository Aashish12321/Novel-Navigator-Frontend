import React from "react";
import { useCookies } from "react-cookie";
import { useFormik } from "formik";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import ClickableCard from "./ClickableCard";

const Recommendations = () => {
  const [bookData, setBookData] = React.useState([]);
  //handling forms using formik
  const formik = useFormik({
    initialValues: {
      book_title: "",
    },
    onSubmit: (event) => {
      event.preventDefault;
      console.log(formik.values.book_title);
      const url = "http://127.0.0.1:5000/search";
      const data = {
        book_title: formik.values.book_title,
      };
      axios
        .post(url, data)
        .then(function (response) {
          console.log(response.data);
          setBookData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });

  const bookElements = bookData.map(function (element) {
    return (
      <ClickableCard
        BookName={element.title}
        ratings={element.ratings}
        image_url={element.cover_image}
      />
    );
  });
  // const [cookies, setCookies] = useCookies([""]);
  // const current_user = cookies._auth_state.username;
  return (
    <div>
      <h1 className=" fs-3 p-5">
        Search for favorite books to add them to your liked books and get
        recommendations accordingly.
      </h1>
      <div className="w-50 p-5">
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="mb-3 fs-3">
              Search for your Favorite Book.
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Book Name"
              name="book_title"
              onChange={formik.handleChange}
              value={formik.values.book_title}
              required
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="dark" size="lg">
            Search Now!
          </Button>
        </Form>
      </div>
      <div className="book-container">{bookElements}</div>
      <p className="Recommendations--heading p-5">Books tailored for you!</p>
    </div>
  );
};

export default Recommendations;

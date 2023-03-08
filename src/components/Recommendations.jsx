import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ClickableCard from "./ClickableCard";

const Recommendations = () => {
  const [bookData, setBookData] = React.useState([]);
  const { state } = useLocation();
  React.useEffect(() => {
    const url = "http://127.0.0.1:5000/search";
    const data = {
      book_title: state,
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
  }, [state]);
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
        author={element.author}
        image_url={element.image}
        book_id={element.ISBN}
      />
    );
  });
  return (
    <div>
      <div className="w-50 p-5">
        <h1 className="mb-3" style={{ fontFamily: "Karla" }}>
          Search for and add your favorite books.
        </h1>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3">
            <TextField
              fullWidth
              label="Book Name"
              variant="standard"
              placeholder="Enter Book Name"
              name="book_title"
              onChange={formik.handleChange}
              value={formik.values.book_title}
              required
            ></TextField>
          </Form.Group>
          <Button type="submit" variant="contained" size="large" fullWidth>
            Search Now!
          </Button>
        </Form>
      </div>
      <div className="book-container">{bookElements}</div>
    </div>
  );
};

export default Recommendations;

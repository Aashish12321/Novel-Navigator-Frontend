import React from "react";
import { useCookies } from "react-cookie";
import { useFormik } from "formik";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const Recommendations = () => {
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
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });
  const [cookies, setCookies] = useCookies([""]);
  const current_user = cookies._auth_state.username;
  return (
    <div>
      <div className="w-50 p-5">
        <h1 className="mb-4 fs-3">
          Search for favorite books to add them to your liked books and get
          recommendations accordingly.
        </h1>
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
      <p className="Recommendations--heading p-5">Books tailored for you!</p>
    </div>
  );
};

export default Recommendations;

import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Form, FormFloating } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

const SearchBar = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      book_title: "",
    },
    onSubmit: (event) => {
      event.preventDefault;
      //   const url = "http://127.0.0.1:5000/search";
      //   const data = {
      //     book_title: formik.values.book_title,
      //   };
      //   axios
      //     .post(url, data)
      //     .then(function (response) {
      //       console.log(response.data);
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
      if (formik.values.book_title) {
        navigate("/search", { state: formik.values.book_title, replace: true });
      }
      formik.values.book_title = "";
    },
  });
  return (
    <div className="searchbar">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
          <TextField
            variant="standard"
            placeholder="Enter Book Name"
            name="book_title"
            onChange={formik.handleChange}
            value={formik.values.book_title}
            inputProps={{ style: { color: "#fff" } }}
          ></TextField>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchBar;

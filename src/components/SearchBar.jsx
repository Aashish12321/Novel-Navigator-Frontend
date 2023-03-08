import { TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      book_title: "",
    },
    onSubmit: (event) => {
      event.preventDefault;
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

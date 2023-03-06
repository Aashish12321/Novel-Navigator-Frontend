import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Form } from "react-bootstrap";
import { TextField, Button, Paper } from "@mui/material";

const RegisterPage = () => {
  const navigate = useNavigate();
  const toLogin = () => {
    navigate("/login");
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (event) => {
      event.preventDefault;
      const url = "http://127.0.0.1:5000/register";
      axios
        .post(url, formik.values)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(formik.values);

      formik.resetForm();
    },
  });
  return (
    <div>
      <Header />
      <Paper elevation={20} className="paper--container">
        <div className="p-3">
          <h2 className="mb-4">Register Page</h2>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
              <TextField
                fullWidth
                label="Username"
                variant="standard"
                placeholder="Enter Username"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                required
              ></TextField>
            </Form.Group>
            <Form.Group className="mb-3">
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="standard"
                placeholder="Enter Password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                required
              ></TextField>
            </Form.Group>
            <Button type="submit" size="large" fullWidth variant="contained">
              Register Now!
            </Button>
          </Form>
          <h4 className="mt-5 mb-4">Already Have an account?</h4>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={toLogin}
            fullWidth
          >
            Login
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default RegisterPage;

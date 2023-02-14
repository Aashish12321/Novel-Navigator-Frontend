import React from "react";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
import { useFormik } from "formik";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showError, setShowError] = React.useState(false);
  const signIn = useSignIn();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (event) => {
      event.preventDefault;
      const url = "http://127.0.0.1:5000/login";
      axios
        .post(url, formik.values)
        .then((res) => {
          if (res.status === 200) {
            if (
              signIn({
                token: res.data.access_token,
                expiresIn: 3600,
                tokenType: "Bearer",
                authState: { username: formik.values.username },
              })
            ) {
              console.log("you are now logged in.");
              navigate("/recommendations");
            } else {
              console.log("Unknown Error");
            }
          }
        })
        .catch((error) => {
          console.error(error);
          console.error("Invalid Username or Password");
          setShowError(true);
        });

      formik.resetForm();
    },
  });

  return (
    <div className="w-50 p-5">
      <h1 className="mb-4">Welcome to Login Page.</h1>
      {showError ? (
        <p className="text-danger">
          Invalid Username or Password. Please Try again.
        </p>
      ) : (
        ""
      )}
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" size="lg">
          Log In!
        </Button>
      </Form>

      <h3 className="mt-5 mb-4">First time? Do register Now!</h3>
      <Link to="/register" className="btn btn-info btn-lg text-white">
        Register
      </Link>
    </div>
  );
};

export default Login;

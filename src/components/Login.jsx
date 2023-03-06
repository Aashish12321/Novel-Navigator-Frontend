import { Button, Paper, TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useSignIn } from "react-auth-kit";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const toRegister = () => {
    navigate("/register");
  };
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
    <div className="login-bg">
      <Paper elevation={20} className="paper--container">
        <div className="p-3">
          <h2 className="mb-4">Login Page</h2>
          {showError ? (
            <p className="text-danger">
              Invalid Username or Password. Please Try again.
            </p>
          ) : (
            ""
          )}
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
                variant="standard"
                type="password"
                placeholder="Enter Password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                required
              ></TextField>
            </Form.Group>
            <Button variant="contained" type="submit" size="large" fullWidth>
              Log In!
            </Button>
          </Form>

          <h4 className="mt-5 mb-4">First time? Do register Now!</h4>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={toRegister}
            fullWidth
          >
            Register
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default Login;

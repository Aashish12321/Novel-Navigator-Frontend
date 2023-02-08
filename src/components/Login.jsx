import React from "react";
import axios from "axios";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";

const Login = () => {
  const signIn = useSignIn();
  const [data, setData] = React.useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = "http://127.0.0.1:5000/login";
    axios.post(url, data).then((res) => {
      if (res.status === 200) {
        if (
          signIn({
            token: res.data.access_token,
            expiresIn: 3600,
            tokenType: "Bearer",
            authState: { username: data.username },
          })
        ) {
          console.log("you are now logged in.");
        } else {
          console.log("Unknown error");
        }
      }
    });
    setData({
      username: "",
      password: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          className="login-form--username"
          type="text"
          name="username"
          value={data.username}
          placeholder="Username"
          onChange={handleChange}
          required
        ></input>
        <input
          className="login-form--password"
          type="password"
          name="password"
          value={data.password}
          placeholder="Password"
          onChange={handleChange}
          required
        ></input>
        <button className="login-form--button">Submit</button>
      </form>
    </div>
  );
};

export default Login;

import React from "react";
import axios from "axios";

const Login = () => {
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
    axios
      .post("http://127.0.0.1:5000/login", data)
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error));

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

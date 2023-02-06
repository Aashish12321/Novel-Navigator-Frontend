import React from "react";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username: { username },
      password: { password },
    };

    console.log(data);
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          className="login-form--username"
          type="text"
          name="username"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        ></input>
        <input
          className="login-form--password"
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <button className="login-form--button">Submit</button>
      </form>
    </div>
  );
};

export default Login;

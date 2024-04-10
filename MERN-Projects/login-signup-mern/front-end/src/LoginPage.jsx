import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  // Add state for login data
  const [loginData, setLoginData] = React.useState({
    username: "",
    password: "",
  });

  // Add event handler for login form submit
  const handleLoginSubmitChange = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        loginData
      );
      const { success, message } = response.data;

      if (success) {
        console.log("login sucessfully");
      } else {
        console.log(message);
      }
    } catch (error) {
      console.error(error);
    }

    setLoginData({
        username: "",
        password: "",
    })
  };

  // Add event handler for login form change
  // prevData used as if u want to change the username the password shouldnt get affectede
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLoginSubmitChange}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={loginData.username}
          onChange={handleLoginChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleLoginChange}
          required
        />
        <button type="submit">Login</button>
        <p>
          Not Registered yet? <Link to="/register">Register Here</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;

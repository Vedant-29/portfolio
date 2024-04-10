import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function RegistrationPage() {
    // Add state for registration data
    const [RegisterData, setRegisterData] = React.useState({
        username: "",
        password: "",
    });

    // Add event handler for registration form submit
    const handleRegistrationSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/register", RegisterData);
            const { success, message } = response.data;

            if (success) {
                console.log("registration successful");
            } else {
                console.log(message);
            }
        }
        catch (error) {
            console.error(error);
        }
        setRegisterData({
            username: "",
            password: "",
        })
    }   

    // Add event handler for registration form change
    const handleRegistrationChange = (e) => {
        const {name, value} = e.target;
        setRegisterData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }


  return (
    <div>
      <h1>Registration Page</h1>
      <form onSubmit={handleRegistrationSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={RegisterData.username}
          onChange={handleRegistrationChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={RegisterData.password}
          onChange={handleRegistrationChange}
          required
        />
        <button type="submit">Login</button>
        <p>
          Already Registered? <Link to="/login">Click to Login</Link>
        </p>
      </form>
    </div>
  );
}

export default RegistrationPage;

import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../console-firebase";
import logo_light from "../assets/logos/unifest-logo-white-mode.png";

function SignUpPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    setEmailError(
      validateEmail(value) ? "" : "Please enter a valid email address."
    );
    updateFormValidity();
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    setPasswordError(
      value.length >= 8 ? "" : "Password must be at least 8 characters long."
    );
    updateFormValidity();
  };

  const updateFormValidity = () => {
    setIsFormValid(
      emailError === "" &&
        passwordError === "" &&
        email !== "" &&
        password !== ""
    );
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
        // ...
      })
      .catch((e) => {
        let errorMessage;
        if (e.code === "auth/email-already-in-use") {
          errorMessage =
            "The email address is already in use by another account.";
        } else {
          errorMessage = "Invalid email or password. Please try again.";
        }
        setError(errorMessage);
        // ..
      });
  };

  return (
    <main className="flex items-start justify-center min-h-screen bg-white">
      <div className="bg-transparent py-10 px-12 rounded-[12px] m-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-12">
            <Link to="/">
              <img src={logo_light} className="h-16" />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center mb-4">
            <h1 className="text-2xl font-medium">Create an account</h1>
            <p className="mt-1">Let's get started</p>
          </div>
          <form>
            <div className="mb-2">
              <input
                type="email"
                label="Email address"
                value={email}
                onChange={handleEmailChange}
                required
                placeholder="Email address"
                className="appearance-none border min-w-72 border-[#9D9D9D] rounded w-full py-3.5 px-3.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {emailError && (
                <div className="flex justify-start text-sm text-red-500">
                  {emailError}
                </div>
              )}
            </div>

            <div className="mb-2">
              <input
                type="password"
                label="Create password"
                value={password}
                onChange={handlePasswordChange}
                required
                placeholder="Password"
                className="appearance-none border border-[#9D9D9D] rounded w-full py-3.5 px-3.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {passwordError && (
                <div className="flex justify-start text-sm text-red-500">
                  {passwordError}
                </div>
              )}
            </div>

            <button
              type="submit"
              onClick={onSubmit}
              className="bg-[#E75A5A] text-white font-medium w-full py-3.5 px-3.5 rounded focus:outline-none focus:shadow-outline"
            >
              Sign up
            </button>
            {error && (
              <div className="flex justify-center items-center">
                <div className="flex justify-center text-center mt-2 text-sm text-red-500 max-w-60">
                  {error}
                </div>
              </div>
            )}
          </form>

          <p className="mt-4">
            Already have an account?{" "}
            <NavLink to="/login" className="text-blue-500 hover:text-blue-700">
              Sign in
            </NavLink>
          </p>
        </div>
      </div>
    </main>
  );
}

export default SignUpPage;

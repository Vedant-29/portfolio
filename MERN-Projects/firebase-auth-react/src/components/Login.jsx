import React from 'react'
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
      const loginAccount = (e) => {
          e.preventDefault();
          signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              console.log(userCredential);
          })
      }



    return (
        <div>
          <form onSubmit={loginAccount}>
            <h1>Login</h1>
            <input
              type="email"
              value = {email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="password"
              value = {password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type="submit">Login</button>
          </form>
        </div>
      );
}

export default Login
import React from "react";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


function Create() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const createAccount = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        })
    }

  return (
    <div>
      <form onSubmit={createAccount}>
        <h1>Create a new account</h1>
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Create;

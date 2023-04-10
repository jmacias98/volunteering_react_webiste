import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Replace this with your actual authentication logic
    const isEmailAndPasswordValid = false;

    if (isEmailAndPasswordValid) {
      // Redirect the user to the desired page after successful login
    } else {
      setErrorMessage("E-mail or Password is incorrect!");
    }
  };

  return (
    <div>
      <div className="loginBoxContainer">
        <div className="loginBox">
          <h1>Sign in</h1>
          <form className="loginForm" onSubmit={handleSignIn}>
            <input
              type="text"
              placeholder="Username/Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn volunteer_sign-button">Sign in</button>
          </form>

          <Link to="/register" className="sing-up">
            Sign up if you do not have an account
          </Link>
          <Link to="/password" className="sing-up">
            Forgot your password?
          </Link>

          {errorMessage && (
            <div className="volunteer_sign-validate-input">
              <p>{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

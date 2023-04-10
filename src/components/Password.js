import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./password.css";

export const Password = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      alert("Please check your email to reset your password.");
      // You can add your logic to send a password reset link to the user's email here.
      console.log("Email submitted:", email);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <>
      <div className="forgotPassword-box">
        <div className="forgotPassword-content">
          <h3> Reset Password</h3>
          <p>Enter your Email Address or username</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="emailPassword"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div class="confirm-decision">
              <button
                className="btn"
                type="button"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
              <button className="btn" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import "./style.css";

export const Footer = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !email) {
      setError("Full name and email address are required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    setSubmitted(true);
    alert("Thank you for subscribing!");
  };

  return (
    <div>
      <footer>
        <h1>Don’t Miss an Update!</h1>
        <h4>
          Sign up for our mailing list to keep informed of regular updates on
          volunteer events, news, and additional updates.
        </h4>
        <form className="signup" onSubmit={handleSubmit}>
          <input
            className="signup_fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            placeholder="First Name"
            id="fullName"
            name="fullName"
            required
          />
          <input
            className="signup_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email Address"
            id="Email"
            name="email"
            required
          />
          <button type="submit" className="btn signup_button">
            Sign up
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}

        {submitted && !error && (
          <p className="success-message">You have successfully subscribed!</p>
        )}

        <div className="footer_info">
          <p>Copyright © 2023 Group2 Volunteer - All rights reserved</p>
        </div>
        <div className="footer_underline"></div>
      </footer>
    </div>
  );
};

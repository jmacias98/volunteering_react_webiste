import React from "react";
import { useNavigate } from "react-router-dom";
import "./nomatch.css";

export const Nomatch = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="nomatch">
        <div className="notfound">
          <h1>404</h1>
          <h2>Page not found!</h2>

          <button class="btn" type="button" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
    </>
  );
};

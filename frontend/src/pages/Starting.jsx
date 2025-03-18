import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Starting.css";

const Starting = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <h1 className="homepage-title">Welcome to Job Portal</h1>
        <p className="homepage-subtitle">Choose your role to get started:</p>
        <div className="homepage-buttons">
          <button
            className="homepage-button applicant-button"
            onClick={() => navigate("/StudentSignUp1")}
          >
            Applicant
          </button>
          <button
            className="homepage-button recruiter-button"
            onClick={() => navigate("/RecruiterSignup1")}
          >
            Recruiter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Starting;

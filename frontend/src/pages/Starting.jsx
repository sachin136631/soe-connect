import React from "react";
import { useNavigate } from "react-router-dom";

const Starting = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Define the animations */}
      <style>
        {`
          /* Background Gradient Animation */
          @keyframes gradientAnimation {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 100% 50%;
            }
          }

          /* Fade-in Animation for Title and Subtitle */
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Button Hover Animation */
          .btn-hover-effect {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .btn-hover-effect:hover {
            transform: scale(1.05); /* Slightly enlarge the button */
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); /* Add a shadow */
          }

          /* Container Slide-in Animation */
          @keyframes slideIn {
            0% {
              opacity: 0;
              transform: scale(0.9) translateY(20px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `}
      </style>

      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{
          background: 'linear-gradient(135deg, #4361ee, #9d4edd, #e0c3fc)', // Multi-color gradient
          backgroundSize: '300% 300%', // Larger size for smoother animation
          animation: 'gradientAnimation 8s infinite alternate', // Slower and smoother animation
        }}
      >
        {/* Centered container with slide-in animation */}
        <div
          className="container-sm p-5 rounded shadow text-center"
          style={{
            maxWidth: '400px',
            backgroundColor: '#ffffff', // White background for contrast
            border: '2px solid rgba(255, 255, 255, 0.3)', // Subtle glowing border
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)', // Add depth with shadow
            animation: 'slideIn 1.5s ease-out', // Slide-in animation
          }}
        >
          {/* Title with fade-in animation */}
          <h1
            className="display-4 fw-bold"
            style={{
              fontSize: '1.8rem',
              color: '#000000',
              fontWeight: '700',
              animation: 'fadeIn 1s ease-out', // Fade-in animation
            }}
          >
            Welcome to Job Portal
          </h1>

          {/* Subtitle with fade-in animation */}
          <p
            className="lead mt-3"
            style={{
              color: '#1d3557',
              animation: 'fadeIn 1.5s ease-out', // Slightly delayed fade-in
            }}
          >
            Choose your role to get started:
          </p>

          {/* Buttons */}
          <div className="mt-4">
            <button
              className="btn btn-primary w-100 py-3 rounded-pill mb-3 btn-hover-effect"
              onClick={() => navigate("/StudentSignUp1")}
              style={{ animation: 'fadeIn 2s ease-out',backgroundColor:'black' }} // Delayed fade-in
            >
              Applicant
            </button>
            <button
              className="btn btn-primary w-100 py-3 rounded-pill btn-hover-effect"
              onClick={() => navigate("/RecruiterSignup1")}
              style={{ animation: 'fadeIn 2.2s ease-out',backgroundColor:'black' }} // Slightly delayed fade-in
            >
              Recruiter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Starting;
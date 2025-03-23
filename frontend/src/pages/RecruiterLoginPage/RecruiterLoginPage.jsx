import React, { useState } from 'react';

const RecruiterLoginPage = () => {
  const [loginDetails, setLoginDetails] = useState({
    institutionMailId: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Details:', loginDetails);
    alert('Login Successful!');
  };

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

      {/* Full-page background */}
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
          className="container-sm p-5 rounded shadow"
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
            className="display-4 fw-bold text-center"
            style={{
              fontSize: '1.8rem',
              color: '#000000',
              fontWeight: '700',
              marginBottom: '1rem',
              animation: 'fadeIn 1s ease-out', // Fade-in animation
            }}
          >
            Recruiter Login
          </h1>

          <form onSubmit={handleSubmit}>
            {/* Institution Mail ID Field */}
            <div className="mb-3">
              <label htmlFor="institutionMailId" className="form-label" style={{ animation: 'fadeIn 1.2s ease-out' }}>
                Institution Mail ID
              </label>
              <input
                type="email"
                id="institutionMailId"
                value={loginDetails.institutionMailId}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter your mail ID"
                required
                style={{ animation: 'fadeIn 1.4s ease-out' }}
              />
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label" style={{ animation: 'fadeIn 1.6s ease-out' }}>
                Password
              </label>
              <input
                type="password"
                id="password"
                value={loginDetails.password}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter your password"
                required
                style={{ animation: 'fadeIn 1.8s ease-out' }}
              />
            </div>

            {/* Submit Button */}
            <div className="d-grid mt-4">
              <button
                type="submit"
                className="btn btn-primary py-3 rounded-pill btn-hover-effect"
                style={{ animation: 'fadeIn 2s ease-out',backgroundColor:'black' }}
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RecruiterLoginPage;
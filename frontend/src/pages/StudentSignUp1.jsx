import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignupContext } from '../context/SignupContext';

const StudentSignUp1 = () => {
  const navigate = useNavigate();
  const { formData, setformData } = useContext(SignupContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/StudentSignUp2");
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setformData({
      ...formData,
      [id]: value,
    });
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
            className="display-4 fw-bold"
            style={{
              fontSize: '2.2rem',
              color: '#000000',
              fontWeight: '700',
              textAlign: 'center', // Keep the title centered
              animation: 'fadeIn 1s ease-out', // Fade-in animation
            }}
          >
            Create Applicant Account
          </h1>

          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label" style={{ animation: 'fadeIn 1.2s ease-out' }}>
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your name"
                required
                style={{ animation: 'fadeIn 1.4s ease-out' }}
              />
            </div>

            {/* Department Field */}
            <div className="mb-3">
              <label htmlFor="department" className="form-label" style={{ animation: 'fadeIn 1.6s ease-out' }}>
                Department
              </label>
              <input
                type="text"
                id="department"
                value={formData.department}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your department"
                required
                style={{ animation: 'fadeIn 1.8s ease-out' }}
              />
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label" style={{ animation: 'fadeIn 2s ease-out' }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your email"
                required
                style={{ animation: 'fadeIn 2.2s ease-out' }}
              />
            </div>

            {/* Year Field */}
            <div className="mb-3">
              <label htmlFor="year" className="form-label" style={{ animation: 'fadeIn 2.4s ease-out' }}>
                Year
              </label>
              <input
                type="number"
                id="year"
                value={formData.year}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your year"
                required
                min="2000"
                style={{ animation: 'fadeIn 2.6s ease-out' }}
              />
            </div>

            {/* Submit Button */}
            <div className="d-grid mt-4">
              <button
                type="submit"
                className="btn btn-primary py-2 px-3 btn-hover-effect rounded-pill"
                style={{ animation: 'fadeIn 2.8s ease-out',backgroundColor:'black' }}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default StudentSignUp1;
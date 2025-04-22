import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecruiterSignUpContext } from '../context/RecruiterSignUpContext';
// gets data of announcer like name , organization name , designation and store it in context API of announcer
const RecruiterSignUp1 = () => {
  const navigate = useNavigate();
  const { formData, updateformdata } = useContext(RecruiterSignUpContext);

  const handleChange = (e) => {
    const { id, value } = e.target;
    updateformdata({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/RecruiterSignUp2');
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

          /* Fade-in Animation */
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
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
        {/* Centered container with glowing border */}
        <div
          className="container-sm p-5 rounded shadow bg-light"
          style={{
            maxWidth: '400px',
            border: '2px solid rgba(255, 255, 255, 0.3)', // Subtle glowing border
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)', // Add depth with shadow
          }}
        >
          {/* Title with fade-in animation */}
          <h1
            className="text-center mb-4"
            style={{
              fontSize: '2.2rem',
              color: '#000000',
              fontWeight: '700',
              animation: 'fadeIn 1s ease-out', // Fade-in animation
            }}
          >
            Create Recruiter Account
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

            {/* Organization Name Field */}
            <div className="mb-3">
              <label htmlFor="organizationName" className="form-label" style={{ animation: 'fadeIn 1.6s ease-out' }}>
                Organization Name
              </label>
              <input
                type="text"
                id="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter the name of the organization"
                required
                style={{ animation: 'fadeIn 1.8s ease-out' }}
              />
            </div>

            {/* Designation Field */}
            <div className="mb-3">
              <label htmlFor="designation" className="form-label" style={{ animation: 'fadeIn 2s ease-out' }}>
                Designation
              </label>
              <input
                type="text"
                id="designation"
                value={formData.designation}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your designation"
                required
                style={{ animation: 'fadeIn 2.2s ease-out' }}
              />
            </div>

            {/* Submit Button */}
            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary py-2 px-4  btn-hover-effect rounded-pill"
                style={{ animation: 'fadeIn 2.4s ease-out' ,backgroundColor:'black' }}
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

export default RecruiterSignUp1;
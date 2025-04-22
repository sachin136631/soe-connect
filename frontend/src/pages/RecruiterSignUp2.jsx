import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecruiterSignUpContext } from '../context/RecruiterSignUpContext';
import axios from 'axios';
// handles data from announcer signup 1 and post the acccount details of announcer to database
const RecruiterSignUp2 = () => {
  const navigate = useNavigate();
  const { formData } = useContext(RecruiterSignUpContext);
  const [form3, setForm3] = useState({
    officialMailId: '',
    password: '',
    confirmpassword: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm3({
      ...form3,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form3.password !== form3.confirmpassword) {
      alert('The passwords do not match');
    } else {
      try {
        console.log('Submitting recruiter data');
        const response = await axios.post('http://localhost:5000/signup/recruiter', {
          name: formData.name,
          organizationName: formData.organizationName,
          designation: formData.designation,
          officialMailId: form3.officialMailId,
          password: form3.password,
        });
        if (response.status === 201) {
          console.log(response);
          alert('Recruiter account created successfully');
          navigate('/postpage');
        }
      } catch (error) {
        console.log('The error is ', error);
      }
    }
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
            style={{
              fontSize: '2.1rem',
              color: '#000000',
              textAlign: 'center',
              fontWeight: '700',
              marginBottom: '1rem',
              animation: 'fadeIn 1s ease-out', // Fade-in animation
            }}
          >
            Create Recruiter Account
          </h1>

          <form onSubmit={handleSubmit}>
            {/* Official Email Field */}
            <div className="mb-3">
              <label htmlFor="officialMailId" className="form-label" style={{ animation: 'fadeIn 1.2s ease-out' }}>
                Official Email ID
              </label>
              <input
                type="email"
                id="officialMailId"
                value={form3.officialMailId}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your official email ID"
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
                value={form3.password}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your password"
                required
                style={{ animation: 'fadeIn 1.8s ease-out' }}
              />
            </div>

            {/* Confirm Password Field */}
            <div className="mb-3">
              <label htmlFor="confirmpassword" className="form-label" style={{ animation: 'fadeIn 2s ease-out' }}>
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmpassword"
                value={form3.confirmpassword}
                onChange={handleChange}
                className="form-control"
                placeholder="Confirm your password"
                required
                style={{ animation: 'fadeIn 2.2s ease-out' }}
              />
            </div>

            {/* Submit Button */}
            <div className="d-grid mt-4">
              <button
                type="submit"
                className="btn btn-primary py-3 rounded-pill btn-hover-effect"
                style={{ animation: 'fadeIn 2.4s ease-out',backgroundColor:'black' }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RecruiterSignUp2;
import React from 'react';
import { useNavigate } from 'react-router-dom';
//import './HomepageA.css'; // Ensure this file contains relevant styles
//import image1 from './images/flower.png'; // Use the imported image

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="d-flex justify-content-center align-items-center" 
      style={{ minHeight: '100vh', backgroundColor: '#4361ee', position: 'relative' }} // Added position: relative
    >
      {/* Centered container */}
      <div className="container-sm p-5 rounded shadow" style={{ maxWidth: '400px', backgroundColor: '#caf0f8' }}>
        {/* Header Section */}
        <div className="row">
          <div className="col text-center">
            <h1 className="display-4">Roles</h1>
          </div>
        </div>

        {/* Applicant Button */}
        <div className="row mt-4">
          <div className="col text-center">
            <button
              className="btn btn-primary w-100 py-3"
              onClick={() => navigate('/StudentSignUp1')}
            >
              Applicant
            </button>
          </div>
        </div>

        {/* Recruiter Button */}
          <div className="row mt-4">`
            <div className="col text-center">
              <button
                className="btn btn-primary w-100 py-3"
                onClick={() => navigate('/RecruiterSignup1')}
              >
                Recruiter
              </button>
            </div>
          </div>
        </div>

        {/* Image positioned at the bottom-left corner */}

      <div className="row">
        <div className="col">
        <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
          <img 
            src={image1} 
            alt="Flower" 
            className="img-fluid" 
            style={{ maxWidth: '320px' }} // Increased size here
          />
        </div>
        </div>
      </div>
        
      </div>
    );
  };

  export default Homepage;
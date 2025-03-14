import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecruiterSignUpContext } from '../context/RecruiterSignUpContext';
import '../styles/RecruiterSignUp1.css'; 

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
    <div className="recruiter-signup-container">
      <h1 className="recruiter-signup-title">Create Recruiter Account</h1>
      <form onSubmit={handleSubmit} className="recruiter-signup-form">
        <div className="form-group">
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            placeholder="Enter the name of the organization"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Enter your designation"
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Next
        </button>
      </form>
    </div>
  );
};

export default RecruiterSignUp1;
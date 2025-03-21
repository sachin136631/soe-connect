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
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: '#4361ee' }} // Blue background color
    >
      <div
        className="container-sm p-4 rounded shadow bg-light"
        style={{ maxWidth: '400px' }}
      >
        <h1 className="text-center mb-4">Create Applicant Account</h1>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
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
            />
          </div>

          {/* Department Field */}
          <div className="mb-3">
            <label htmlFor="department" className="form-label">
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
            />
          </div>

          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
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
            />
          </div>

          {/* Year Field */}
          <div className="mb-3">
            <label htmlFor="year" className="form-label">
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
            />
          </div>

          {/* Submit Button */}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentSignUp1;
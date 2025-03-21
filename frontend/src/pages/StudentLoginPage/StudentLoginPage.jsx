import React, { useState } from 'react';
import './StudentLoginPage.css';

const StudentLoginPage = () => {
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
    <div>
      <div className="container bg1">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <h1 className="heading-1s text-center">Student Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="institutionMailId" className="form-label">
                  Institution Mail ID
                </label>
                <input
                  type="email"
                  className="form-input"
                  id="institutionMailId"
                  value={loginDetails.institutionMailId}
                  onChange={handleInputChange}
                  placeholder="Enter your mail ID"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-input"
                  id="password"
                  value={loginDetails.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="text-center">
                <button className="post" type="submit">
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLoginPage;
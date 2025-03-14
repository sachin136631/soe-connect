import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecruiterSignUpContext } from '../context/RecruiterSignUpContext';
import axios from 'axios';
import '../styles/RecruiterSignUp1.css'; 

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
          navigate('/RecruiterHomepg');
        }
      } catch (error) {
        console.log('The error is ', error);
      }
    }
  };

  return (
    <div className="recruiter-signup2-container">
      <h1 className="recruiter-signup2-title">Create Recruiter Account</h1>
      <form onSubmit={handleSubmit} className="recruiter-signup2-form">
        <div className="form-group">
          <input
            type="email"
            id="officialMailId"
            value={form3.officialMailId}
            onChange={handleChange}
            placeholder="Enter your official email ID"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            value={form3.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="confirmpassword"
            value={form3.confirmpassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RecruiterSignUp2;
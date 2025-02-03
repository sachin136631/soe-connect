import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate=useNavigate();
  return (
    <div>
      <h1>Roles</h1>
      <button onClick={()=>navigate('/StudentSignUp1')}>Applicant</button>
      <button onClick={()=>navigate('/RecruiterSignup1')}>Recruiter</button>
    </div>
  )
}

export default Homepage

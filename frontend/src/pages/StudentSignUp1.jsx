import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { SignupContext } from '../context/SignupContext';


const StudentSignUp1 = () => {
    const navigate=useNavigate();
    const {formData,setformData}=useContext(SignupContext);


    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate("/StudentSignUp2");
    }

    const handleChange=(e)=>{
        const {id,value}=e.target;
        setformData({
            ...formData,
            [id]:value
        })
        
    }

  return (
    <div>
      <h1>create applicant account</h1>
      <form onSubmit={handleSubmit}>
        <div>
            <input
                type='text'
                id='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter the name'
                required
            />
        </div>
        <div>
            <input
                type='text'
                id='department'
                value={formData.department}
                onChange={handleChange}
                placeholder='Enter the department'
                required
            />
        </div>
        <div>
            <input
                type='email'
                id='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter the email'
                required
            />
        </div>
        <div>
            <input
                type='number'
                id='year'
                value={formData.year}
                onChange={handleChange}
                placeholder='Enter the year'
                required
            />
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  )
}
export default StudentSignUp1;

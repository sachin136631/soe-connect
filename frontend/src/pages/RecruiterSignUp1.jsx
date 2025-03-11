import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { RecruiterSignUpContext } from '../context/RecruiterSignUpContext';

const RecruiterSignUp1 = () => {
  const navigate=useNavigate();
  const {formData,updateformdata}=useContext(RecruiterSignUpContext);

const handleChange=(e)=>{
  const {id,value}=e.target;
  updateformdata({
    ...formData,
    [id]:value
  })
}

const handleSubmit=(e)=>{
    e.preventDefault();
    navigate('/RecruiterSignUp2');
}
  return (
    <div>
      <h1>create Recruiter account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            id='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='enter the name'
            required
          />
        </div>
        <div>
          <input
            type='text'
            id='organizationName'
            value={formData.organizationName}
            onChange={handleChange}
            placeholder='enter the name of the organization'
             required
          />
        </div>
        <div>
          <input
            type='text'
            id='designation'
            value={formData.designation}
            onChange={handleChange}
            placeholder='enter the designation'
            required
          />
        </div>
        <button type="submit">Next</button>
      </form>     
    </div>
  )
}
export default RecruiterSignUp1

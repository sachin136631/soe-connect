import React,{useContext} from 'react'
import { SignupContext } from '../context/SignupContext'

const StudentSignUp2 = () => {
  const {formData}=useContext(SignupContext);
  return (
    <div>
      <h1>create applicant account</h1>
      
    </div>
  )
}

export default StudentSignUp2

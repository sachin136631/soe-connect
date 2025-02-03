import React,{useContext} from 'react'
import { SignupContext } from '../context/SignupContext'

const StudentSignUp2 = () => {
  const {formData,setformData}=useContext(SignupContext);
  return (
    <div>
      <h1>create applicant account</h1>
      <h2>hello {formData.name}</h2>
      <h2> this is my department {formData.department}</h2>
      <h2> this is my email {formData.email}</h2>
      <h2> this is the year of study {formData.year}</h2>
    </div>
  )
}

export default StudentSignUp2

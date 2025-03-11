import React,{useContext,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { RecruiterSignUpContext } from '../context/RecruiterSignUpContext';
import axios from "axios";

const RecruiterSignUp2 = () => {
  const navigate=useNavigate();
  const {formData}=useContext(RecruiterSignUpContext);
  const [form3,setform3]=useState({officialMailId:"",password:"",confirmpassword:""});

  const handleChange=(e)=>{
    const {id,value}=e.target;
    setform3({
      ...form3,
      [id]:value
    })
  }

  const handleSubmit= async(e)=>{
    e.preventDefault();
    if(form3.password!=form3.confirmpassword){
      alert("the passowrds dont match");
    }
    else{
      try{
        console.log("submitting recruiter data");
        const response=await axios.post("http://localhost:5000/signup/recruiter",{
          name:formData.name,
          organizationName:formData.organizationName,
          designation:formData.designation,
          officialMailId:form3.officialMailId,
          password:form3.password,
        })
        if(response.status===201){
          console.log (response)
          alert("recruiter account created successfully");
          navigate("/RecruiterHomepg");
        }
      }catch(error){
        console.log("the error is ",error);
      }
    }
  }

  return (
    <div>
      <h1>create Recruiter account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            id='officialMailId'
            value={form3.officialMailId}
            onChange={handleChange}
            placeholder='enter the official Mail ID'
            required
          />
        </div>
        <div>
          <input
            type='text'
            id='password'
            value={form3.password}
            onChange={handleChange}
            placeholder='enter the password'
            required
          />
        </div>
        <div>
          <input
            type='text'
            id='confirmpassword'
            value={form3.confirmpassword}
            onChange={handleChange}
            placeholder='confirm the password'
            required
          />
        </div>
        <button type="submit">submit</button>
      </form>

    </div>
  )
}

export default RecruiterSignUp2

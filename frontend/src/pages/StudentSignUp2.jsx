import React,{useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { SignupContext } from '../context/SignupContext';
import axios from "axios";

const StudentSignUp2 = () => {
  const navigate=useNavigate();
  const {formData}=useContext(SignupContext);
  const [form2,setform2]=useState({skill:"",password:"",confirmpassword:""});

  const handleChange=(e)=>{
    const {id,value}=e.target;
    setform2({
      ...form2,
      [id]:value
    })
  }

  const handleSubmit2=async(e)=>{
    e.preventDefault();
    if(form2.password!=form2.confirmpassword){
      alert("the passwords doesnt match");
    }
    else{
      try{
      console.log("submitting student data");
      const response=await axios.post("http://localhost:5000/signup/student",{
        name:formData.name,
        branch:formData.branch,
        email:formData.email,
        year:formData.year,
        skill:form2.skill,
        password:form2.password,

      })
      if(response.status===201){
        console.log(response);
        alert("student account created successfully");
        navigate("/Homepage");
      }
    }catch(error){
      console.log("the error in creating student account is ",error);
    }  
    }
  }
  return (
    <div>
      <h1>create applicant account</h1>
      <form onSubmit={handleSubmit2}>
        <div>
          <input
            type='text'
            id='skill'
            value={form2.skill}
            onChange={handleChange}
            placeholder='enter the skills'
            required
          />
        </div>
        <div>
          <input
            type='text'
            id='password'
            value={form2.password}
            onChange={handleChange}
            placeholder='enter the password'
            required
          />
        </div>
        <div>
          <input
            type='text'
            id='confirmpassword'
            value={form2.confirmpassword}
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
export default StudentSignUp2;

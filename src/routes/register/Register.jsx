import React, { useState } from 'react'
import './register.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

function RegisterPage() {
  const [error,setError]= useState("");

  const navigate= useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const formData= new FormData(e.target);

    const username= formData.get("username");
    const email= formData.get("email");
    const password= formData.get("password");

    try{
      const res= await axios.post("http://localhost:3001/api/auth/register",{
        username,email,password
      })
    
      navigate("/login");
      
    }catch(err){
      
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
      
    }
    
  }
  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button >Register</button>
          {error && <span>{error}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default RegisterPage
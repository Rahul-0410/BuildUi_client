import React, { useContext, useState } from 'react'
import './loginPage.scss'
import { Link, useNavigate } from 'react-router-dom'
import apiRequest from '../../lib/apiRequest';
import { AuthContext } from '../../context/AuthContext';

function LoginPage() {
  const [error,setError]= useState("");
  const [loading,setLoading]= useState(false);
  

  const {updateUser}=useContext(AuthContext)
  const navigate= useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setLoading(true);
    setError("");
    const formData= new FormData(e.target);

    const username= formData.get("username");
    const password= formData.get("password");

    try{
      const res= await apiRequest.post("/auth/login",{
        username,password
      })
      // localStorage.setItem("user", JSON.stringify(res.data));
      updateUser(res.data);
      
    
      navigate("/");
      
    }catch(err){
      
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
      
    }finally{
      setLoading(false);
    }
    
  }
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" required minLength={3} type="text" placeholder="Username" />
          <input name="password" required type="password" placeholder="Password" />
          <button disabled={loading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default LoginPage
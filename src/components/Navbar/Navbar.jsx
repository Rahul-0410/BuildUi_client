import React, { useContext, useState } from 'react'
import "./navbar.scss";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function Navbar() {
   const[open, setOpen] = useState();

   const navigate = useNavigate();
   const {currentUser}= useContext(AuthContext);
   const pro=()=>{
    navigate("/profile");
   }
  return (
    <nav>
      
        <div className="left">
          <Link to='/' className='logo'>
            <img src="/logo.png" alt="logo"  />
            <span>RGSEstate</span>
          </Link>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Agents</Link>
        </div>
        <div className="right">
        {currentUser ? (
          <div className="user">
            
            <img
            src={currentUser.avatar || "/noavatar.jpg"}
              alt=""
              onClick={pro}
            />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to={'/login'}>Sign in</Link>
            <Link to='/register' className="profile register1">
              Sign up
            </Link>   </>
        )}
          <div className='menuIcon'>
            <img src="/menu.png" alt="bar" onClick={()=> setOpen((prev)=>!prev)} />
          </div>
          <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Agents</Link>
          <Link to="/login">Sign in</Link>
          <Link to="/register">Sign up</Link>
          </div>
        </div>
    </nav>
  )
}

export default Navbar;
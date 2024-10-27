import React, { useState } from 'react'
import "./navbar.scss";
import { Link } from 'react-router-dom';

function Navbar() {
   const[open, setOpen] = useState();
   const user=true;
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
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign in</a>
            <a href="/" className="register">
              Sign up
            </a>
          </>
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
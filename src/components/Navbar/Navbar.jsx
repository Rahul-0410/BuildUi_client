import React, { useState } from 'react'
import "./navbar.scss";
import { Link } from 'react-router-dom';

function Navbar() {
   const[open, setOpen] = useState();
  return (
    <nav>
      
        <div className="left">
          <Link href='/' className='logo'>
            <img src="/logo.png" alt="logo"  />
            <span>RGSEstate</span>
          </Link>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Agents</Link>
        </div>
        <div className="right">
          <Link href="/">Sign in</Link>
          <Link href="/" className='register'>Sign up</Link>
          <div className='menuIcon'>
            <img src="/menu.png" alt="bar" onClick={()=> setOpen((prev)=>!prev)} />
          </div>
          <div className={open ? "menu active" : "menu"}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Agents</Link>
          <Link href="/">Sign in</Link>
          <Link href="/">Sign up</Link>
          </div>
        </div>
    </nav>
  )
}

export default Navbar;
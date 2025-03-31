import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Contact from './Contact';
import useOnlineStatus from "../hooks/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus()

  const [btnNameReact, setBtnNameReact] = useState("Login")
  return (
    <div className="header">
      <Contact />
      <div className="logo-container">
        <img
          className="logo"
          alt="logo"
          src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus ? "✅" : "🔴"} </li>
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about'>
              About Us
            </Link>
          </li>

          <li>
            <Link to='/contact'>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to='/grocery'>
              Grocery
            </Link>
          </li>
          <li>
            <Link to='/cart'>
              Cart
            </Link>
          </li>
          <button className="login" onClick={() => {
            btnNameReact === 'Login' ? setBtnNameReact("Logout") : setBtnNameReact("Login")
          }}>{btnNameReact}</button>
        </ul>
      </div>
    </div >
  );
};

export default Header;

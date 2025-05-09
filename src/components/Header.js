import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Contact from './Contact';
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../context/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus()
  const user = useContext(UserContext)

  // Subscribing to the store using Selector
  const cartItem = useSelector((store) => store.cart.items)
  console.log(cartItem, "cartItem")
  const [btnNameReact, setBtnNameReact] = useState("Login")
  return (
    <div className="header">

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
          <li className="font-bold">
            <Link to='/cart'>
              Cart ({cartItem?.length} Items)
            </Link>
          </li>
          <li>{user.name}</li>
          <button className="login" onClick={() => {
            btnNameReact === 'Login' ? setBtnNameReact("Logout") : setBtnNameReact("Login")
          }}>{btnNameReact}</button>
        </ul>
      </div>
    </div >
  );
};

export default Header;

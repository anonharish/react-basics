import React, { useState,useContext } from "react";
import logo from "../src/assets/fooddelivery.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContex from "./utils/Usercontex";
import { useSelector } from "react-redux";
import cartItems from './utils/cartSlice';

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser}=useContext(UserContex);
  const cartItems=useSelector(state=>state.items)

  return (
    <div>
      <div className="header-container">
        <img src={logo} className="logo-img" />
        <div>
          <ul className="nav-container">
            <li className="nav-item">
              <p>Online Status :{onlineStatus ? "✔️" : "🔴"}</p>
            </li>
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart">Cart({cartItems.length})</Link>
            </li>
            <li className="nav-item">
              <Link to="/grocery">Grocery Store</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact Us</Link>
            </li>
            <button
              style={{ width: "60px", padding: "4px 8px" }}
              onClick={() => {
                btnText == "Login" ? setBtnText("Logout") : setBtnText("Login");
              }}
            >
              {btnText}
            </button>
          </ul>
          <h1>{loggedInUser}</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.png";

const Menu = () => (
  <>
    
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/About Us">About Us</Link>
      </li>
      <li>
        <Link to="/FAQ">FAQs</Link>
      </li>
      <li>
        <Link to="/Term Of Use">Term Of Use</Link>
      </li>
    
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="straddle__navbar">
      <div className="straddle__navbar-links">
        <div className="straddle__navbar-links_logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="straddle__navbar-links_container">
        <Menu />
        </ul>
      
      </div>
      <div className="straddle__navbar-contact">
        <button type="button">
          <Link to="/Contact Us">Contact Us</Link>
        </button>
      </div>
      <div className="straddle__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#06232D"
            size={30}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#06232D"
            size={30}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="straddle__navbar-menu_container scale-up-center ">
            <div className="straddle__navbar-menu_container-links">
              <Menu />
              <div className="straddle__navbar-menu_contact">
                <button type="button">
                  <Link to="/Contact Us">Contact Us</Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar

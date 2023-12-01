import React, { useRef, useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Arali_Logo_Final from "../../Images/Navbar/Arali_Logo_Final.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import LandingPage from "../../pages/landingPage/LandingPage";
import ContactHome from "../../pages/contactHome/ContactHome";


const Navbar = () => {
  const navRef = useRef();
  const location = useLocation();
  const [profile, setProfile] = useState({});


  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header>
        <div className="nav-logo">
          <img src={Arali_Logo_Final} alt="SheRise" className="logo" />
        </div>
        <button className="nav-btn" title="Expand" onClick={showNavbar}>
          <FaBars className="fa-bars" />
        </button>
        <nav ref={navRef}>
          <li className="nav-links" onClick={showNavbar}>
            <a
              href="#"
              key={<LandingPage />}
              className={
                location.pathname === "#" ? "active-select" : "nav-main-links"
              }
            >
              <p>HOME</p>
            </a>
          </li>
          <li className="nav-links" onClick={showNavbar}>
            <a
              href="#services"
              className={
                location.pathname === "#services"
                  ? "active-select"
                  : "nav-main-links"
              }
            >
              <p>Services</p>
            </a>
          </li>
          <li className="nav-links" onClick={showNavbar}>
            <a
              href="#contact"
              key={<ContactHome />}
              className={
                location.pathname === "#contact"
                  ? "active-select"
                  : "nav-main-links"
              }
            >
              <p>CONTACT US</p>
            </a>
          </li>
          <>
            <div className="back-menu"></div>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

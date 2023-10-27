import React, { useState } from 'react';
import './Navbar.css'; // Create a CSS file for styling
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const navigate = useNavigate()
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
const gotoHome =()=>{
    navigate("/")
}
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div onClick={gotoHome} className="navbar-logo">Octal Optimum</div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="/login">Login</a>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

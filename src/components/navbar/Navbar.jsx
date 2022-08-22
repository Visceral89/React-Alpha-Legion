import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/alpha-legion.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='alpha__navbar'>
      <div className="alpha__navbar-links">
        <div className="alpha__navbar-links_logo">
          <img src={logo} alt="alpha legion logo" />
        </div>
        <div className="alpha__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#whatalpha">What is the Alpha Legion?</a></p>
          <p><a href="#primarch">Alpharious</a></p>
          <p><a href="#primarch">Omegon</a></p>
          <p><a href="#blog">Read Moore</a></p>
        </div>
      </div>
      <div className='alpha__navbar-sign'>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
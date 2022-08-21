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
      </div>
    </div>
  )
}

export default Navbar
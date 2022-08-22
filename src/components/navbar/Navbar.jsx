import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLin, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/alpha-legion.svg';
import './Navbar.css';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#whatalpha">What is the Alpha Legion?</a></p>
  <p><a href="#primarch">Alpharious</a></p>
  <p><a href="#primarch">Omegon</a></p>
  <p><a href="#blog">Read Moore</a></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='alpha__navbar'>
      <div className="alpha__navbar-links">
        <div className="alpha__navbar-links_logo">
          <img src={logo} alt="alpha legion logo" />
        </div>
        <div className="alpha__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className='alpha__navbar-sign'>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className="alpha__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="alpha__navbar-menu_container scale-up-center">
            <div className='alpha__navbar-menu_container-links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
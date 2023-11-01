import React, {useState} from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom'
import logo from '../assets/The-Book-Avengers-Logo.png'


function Header(args) {
const [isOpen, setIsOpen] = useState(false)
const [isLoggedIn, setIsLoggedIn] = useState(false)

const toggle = () => setIsOpen(!isOpen)  

const handleLogout = () => {
  // Add logout logic here
  setIsLoggedIn(false);
};


  return (
    <div className='header'>
      <Navbar {...args}>
        <div>
        <NavbarBrand  href="/" className='navbar-brand'>
        <img 
            className='logo'
            alt="logo"
            src={logo}
          />
        </NavbarBrand>
        </div>
        <div className='dropDownMenu'>
        <NavbarToggler  onClick={toggle} className='navbar-toggler'/>
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className='navbar-nav'>
            <NavItem className='nav-item'>
              <NavLink to="/" className='custom-link'>Home</NavLink>
            </NavItem>
            { isLoggedIn && (
              <>
              <NavItem className="nav-item">
                  <NavLink to="/profile" className="custom-link">
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink to="/yourclubs" className="custom-link">
                    Your Book Clubs
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/clubs/index" className="custom-link">
                    See Available Book Clubs
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink to="/aboutus" className="custom-link">
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <button onClick={handleLogout} className="custom-link">
                    Logout
                  </button>
                </NavItem>
                </>
            )}
            { !isLoggedIn && (
              <>
            <NavItem className='nav-item'>
              <NavLink to="/newaccount" className='custom-link'>
                Sign Up
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink to="/login" className='custom-link'>
                Sign in       
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/clubs/index" className='custom-link'>
                See Available Book Clubs
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink to="/aboutus" className='custom-link'>
                About Us
              </NavLink>
            </NavItem>
            </>
            )}
          </Nav>
        </Collapse>
        </div>
      </Navbar>
    </div>
  )
}
export default Header
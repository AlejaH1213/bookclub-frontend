import React, {useState} from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom'
import logo from '../assets/The-Book-Avengers-Logo.png'
import { useNavigate } from 'react-router-dom';


const Header = ( { login, currentUser }) => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const toggle = () => setIsOpen(!isOpen)  
  const handleLogIn = () => {
    navigate("/login")
  }
  return (
    <div className='header'>
      <Navbar>
        <div>
        <NavLink  to="/" className='navbar-brand'>
        <img 
            className='logo'
            alt="logo"
            src={logo}
          />
        </NavLink>
        </div>
        <div className='dropDownMenu'>
        <NavbarToggler  onClick={toggle} className='navbar-toggler'/>
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className='navbar-nav'>
            <NavItem className='nav-item'>
              <NavLink to="/" className='custom-link'>Home</NavLink>
            </NavItem>
            { currentUser && (
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
                  <button  className="custom-link">
                    Logout
                  </button>
                </NavItem>
                </>
            )}
            { !currentUser && (
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
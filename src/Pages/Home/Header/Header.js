import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
  const { users, logOut } = useAuth()
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Doctor's Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className='m-3 text-dark text-decoration-none' to="/home">Home</NavLink>
              <NavLink className='m-3 text-dark text-decoration-none' to="/about">About</NavLink>
              <NavLink className='m-3 text-dark text-decoration-none' to="/service">Service</NavLink>
              {
                users?.email ?
                  <button onClick={logOut} className="btn-light border-0">Log Out</button>
                  :
                  <NavLink className='m-3 text-black text-decoration-none' to="/login">Log in</NavLink>
              }
            </Nav>
            {
            users?.email ?
              <Navbar.Text>
                Signed in as: <a className='text-decoration-none' href="#login">{users.displayName}</a>
              </Navbar.Text> : <p className='pt-3'>Sign in</p>
          }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
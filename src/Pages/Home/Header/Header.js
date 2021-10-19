import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
  const {users , logOut} = useAuth()
  return (
    <div><Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Doctor's Home</Navbar.Brand>

        <Nav className="me-auto">
          <NavLink className='m-3 text-white text-decoration-none' to="/home">Home</NavLink>
          <NavLink className='m-3 text-white text-decoration-none' to="/about">About</NavLink>
          <NavLink className='m-3 text-white text-decoration-none' to="/service">Service</NavLink>
          {
           users?.email ? 
           <button onClick={logOut} className="btn-dark">Log Out</button>
           :
            <NavLink className='m-3 text-white text-decoration-none' to="/login">Log in</NavLink>
            }
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" />
        { 
        users?.email ?
        <Navbar.Text>
          Signed in as: <a className='text-decoration-none' href="#login">{users.displayName}</a>
        </Navbar.Text> : <p>Log In</p>
        }
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;
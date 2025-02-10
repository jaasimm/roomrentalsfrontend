import React, { useContext, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaHeart } from "react-icons/fa";
import { RiBuilding2Fill } from "react-icons/ri";
import AuthContext, { AuthContextResponse } from '../ContextAPI/AuthContext';

function Header({ blinking,toggleDarkMode }) {
 

  return (
    <div>
      <Navbar style={{ position: "fixed", width: "100%", zIndex: "1", backgroundColor: "rgba(255, 255, 255, 0.5)" }} expand="lg">
        <Container fluid>
          <Navbar.Brand style={{marginLeft:"30px"}} href="#"><RiBuilding2Fill />RoomRentals</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 m-5 " style={{ maxHeight: '100px' }} navbarScroll> 
              <Nav.Link className='ps-5'  href="/">Home</Nav.Link>
              
              <NavDropdown title="Login" id="navbarScrollingDropdown" className={blinking ? 'blinking' : ''}>
                <NavDropdown.Item href="/user/login">User</NavDropdown.Item>
                <NavDropdown.Item href="/broker/login">Broker</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Admin</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="More" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/contactus">Contact Us</NavDropdown.Item>
                <NavDropdown.Item href="/aboutus">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Chat</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/reportaproblem">Report Other Issues</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/broker/save">
                <FaHeart style={{ fontSize: "large"  }} className='text-primary' />
              </Nav.Link>
              <Nav.Link onClick={toggleDarkMode} href="">
                toggle
              </Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

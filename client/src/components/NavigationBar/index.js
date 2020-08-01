import React from 'react';
import { Nav, Navbar, Image } from 'react-bootstrap';
import './style.css';
import logo from './logo.png';
import LoginButton from './../LoginButton';
import SignupButton from './../SignupButton';

/**
 *  Navbar Component using {Link}
 */
function NavigationBar() {
  return (
    <Navbar bg="light" shadow="lg" expand="lg">
      <Navbar.Brand href="/">
        <Image src={logo} className="custom-img" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto color-link">
          <Nav.Link href="/">Home</Nav.Link>
          <LoginButton />
          <SignupButton />
          <Nav.Link href="/events">Events</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/logout">Logout</Nav.Link>
          <Nav.Link href="/venues">Venues</Nav.Link>
          <Nav.Link href="/newreservation">New-Reservation</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;

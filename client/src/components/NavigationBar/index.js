import React from 'react';
import { Nav, Navbar, Image, NavDropdown } from 'react-bootstrap';
import './style.css';
import logo from './logo.png';
import LoginLink from '../LoginLink';
import SignupLink from './../SignupLink';
import LogoutLink from '../LogoutLink';
import { useAuth0 } from '@auth0/auth0-react';

/**
 *  Navbar Component using {Link}
 */
function NavigationBar() {
  const { isAuthenticated } = useAuth0();

  return (
    <Navbar bg="light" shadow="lg" expand="lg">
      <Navbar.Brand href="/">
        <Image src={logo} className="custom-img" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse>
        {isAuthenticated ? (
          <Nav className="ml-auto color-link">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="/events">Events</Nav.Link> */}
            <NavDropdown title="Event" id="basic-nav-dropdown">
              <NavDropdown.Item href="/events">
                Events
              </NavDropdown.Item>
              <NavDropdown.Item href="/events/new">
                Create Event
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <LogoutLink />
          </Nav>
        ) : (
          <Nav className="ml-auto color-link">
            <LoginLink />
            <SignupLink />
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;

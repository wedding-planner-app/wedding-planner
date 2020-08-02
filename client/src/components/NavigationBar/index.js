import React from 'react';
import { Nav, Navbar, Image, NavDropdown } from 'react-bootstrap';
import './style.css';
import logo from './logo.png';
import LoginLink from '../LoginLink';
import SignupLink from './../SignupLink';
import LogoutLink from '../LogoutLink';
import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCalendarPlus,
  faUserCircle,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

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
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faHome} size="lg" />
            </Nav.Link>
            <Nav.Link href="/events">
              <FontAwesomeIcon icon={faCalendarPlus} size="lg" />
            </Nav.Link>

            <Nav.Link href="/profile">
              {' '}
              <FontAwesomeIcon icon={faUserCircle} size="lg" />
            </Nav.Link>
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

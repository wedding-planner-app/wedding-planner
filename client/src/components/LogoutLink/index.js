import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const LogoutLink = () => {
  const { logout } = useAuth0();
  return (
    <Nav.Link
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
    </Nav.Link>
  );
};

export default LogoutLink;

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const LogoutLink = () => {
  const { logout } = useAuth0();
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="tooltip-logout">Sign Out</Tooltip>}
    >
      <Nav.Link
        onClick={() =>
          logout({
            returnTo: window.location.origin,
          })
        }
      >
        <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
      </Nav.Link>
    </OverlayTrigger>
  );
};

export default LogoutLink;

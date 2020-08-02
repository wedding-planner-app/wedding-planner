import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const SignupLink = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="tooltip-signup">Sign Up</Tooltip>}
    >
      <Nav.Link
        onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
      >
        <FontAwesomeIcon icon={faUserPlus} size="lg" />
      </Nav.Link>
    </OverlayTrigger>
  );
};

export default SignupLink;

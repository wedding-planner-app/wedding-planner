import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Nav } from 'react-bootstrap';

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Nav.Link
      onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
    >
      Sign Up
    </Nav.Link>
  );
};

export default SignupButton;

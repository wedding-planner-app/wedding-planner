import React from 'react';
import { Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const ProfileLink = () => {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="tooltip-profile">Profile</Tooltip>}
    >
      <Nav.Link href="/profile">
        <FontAwesomeIcon icon={faUserCircle} size="lg" />
      </Nav.Link>
    </OverlayTrigger>
  );
};

export default ProfileLink;

import React from 'react';
import './style.css';
import VenuesPageComponent from '../../components/VenuesPageComponent';
import { useAuth0 } from '@auth0/auth0-react';

const VenuesPage = (props) => {
  const { getAccessTokenSilently } = useAuth0();
  // used to send user to next page on create success

  return (
    <VenuesPageComponent
      getAccessToken={getAccessTokenSilently}
      eventId={props.match.params.eventId}
    />
  );
};

export default VenuesPage;

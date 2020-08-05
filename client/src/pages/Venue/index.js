import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WeddingCard from '../../components/WeddingCard';
import Venue from './placeholder_venue.png';
import InputText from '../../components/InputText';
import BtnComponent from '../../components/Button';
import './style.css';
import VenuesPageComponent from '../../components/VenuesPageComponent';
import { useAuth0 } from '@auth0/auth0-react';

const VenuesPage = () => {
  const { getAccessTokenSilently } = useAuth0();
 // used to send user to next page on create success
 const [nextUrl, setNextUrl] = useState('');

  return (
    <VenuesPageComponent getAccessToken={getAccessTokenSilently} />
  );
};

export default VenuesPage;

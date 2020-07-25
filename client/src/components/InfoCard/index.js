import React from 'react';
import { Card } from 'react-bootstrap';
import venues from './imgs/venues.jpg';
import './style.css';

const InfoCard = () => {
  return (
    <Card
      style={{ width: '20rem' }}
      className="ml-5 card-hover-style"
    >
      <Card.Img variant="top" src={venues} />
      <Card.Body>
        <Card.Title className="cards-component-title">
          Venues
        </Card.Title>
        <Card.Text className="cards-component-text">
          Venues Summary Text
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InfoCard;

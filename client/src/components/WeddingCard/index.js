import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import logo from './logo.png';

const WeddingCard = () => {
  return (
    <CardDeck className="mt-5 pt-5 mr-5 ml-5">
      <Card>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>Events</Card.Title>
          <Card.Text>Wedding Data</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">from wedding team</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in
            to additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Last updated 3 mins ago
          </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a
            natural lead-in to additional content. This card has even
            longer content than the first to show that equal height
            action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Last updated 3 mins ago
          </small>
        </Card.Footer>
      </Card>
    </CardDeck>
  );
};

export default WeddingCard;

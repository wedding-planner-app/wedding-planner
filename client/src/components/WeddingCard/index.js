import React from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap';

const WeddingCard = (props) => {
  return (
    <Card style={{ height: '30erm' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.data}</Card.Text>
        <Button />
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          update by {props.username}
        </small>
      </Card.Footer>
    </Card>
  );
};

export default WeddingCard;

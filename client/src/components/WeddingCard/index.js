import React from 'react';
import { Card, Row } from 'react-bootstrap';
import './style.css';

const WeddingCard = (props) => {
  return (
    <Card style={{ height: '30erm' }} className="mb-4 m-auto">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.address}</Card.Text>
        <Card.Text>{props.url}</Card.Text>
        <Row className="d-flex flex-wrap">
          <button
            className="btn btn-light mr-3 border-style mb-2 m-auto"
            type="button"
          >
            Select Venue for Wedding
          </button>
        </Row>
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

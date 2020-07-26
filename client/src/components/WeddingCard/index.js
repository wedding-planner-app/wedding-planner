import React from 'react';
import { Card, Row } from 'react-bootstrap';
import './style.css';

const WeddingCard = (props) => {
  return (
    <Card style={{ height: '30erm' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.data}</Card.Text>
        <Row className="d-flex flex-row justify-content-center">
          <button
            className="btn btn-light mr-3 border-style"
            type="button"
          >
            Edit Event
          </button>

          <button
            className="btn btn-light border-style"
            type="button"
          >
            Delete Event
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

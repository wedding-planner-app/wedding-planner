import React from 'react';
import { Card, Row, Button } from 'react-bootstrap';
import './style.css';

const WeddingCard = (props) => {
  return (
    <Card style={{ height: '30erm' }} className="mb-4 m-auto">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title className="data-style text-wrap">
          {props.title}
        </Card.Title>
        <div className="d-flex flex-column align-items-start">
          <Card.Text>
            <span className="font-weight-bold data-style">
              Description:
            </span>{' '}
            {props.description}
          </Card.Text>
          <Card.Text>
            <span className="font-weight-bold data-style">
              Date:{' '}
            </span>
            {props.date}
          </Card.Text>
          <Card.Text>
            <span className="font-weight-bold data-style">
              Time:{' '}
            </span>
            {props.time}
          </Card.Text>
        </div>
        <Row className="d-flex flex-wrap mt-3">
          <Button
            className="btn btn-light mr-3 border-style mb-2 m-auto"
            type="button"
            href={`/events/${props.id}`}
          >
            Edit Event
          </Button>

          <button
            className="btn btn-light border-style mb-2 m-auto"
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

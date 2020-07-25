import React from 'react';
import { Card } from 'react-bootstrap';
import './style.css';

const InfoCard = (props) => {
  return (
    <div className="wraper mb-5">
      <Card
        style={{ width: '20rem' }}
        className="ml-5 card-hover-style"
      >
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title className="cards-component-title">
            {props.title}
          </Card.Title>
          <Card.Text className="cards-component-text">
            {props.summary}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InfoCard;

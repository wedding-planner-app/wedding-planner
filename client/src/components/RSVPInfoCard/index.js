import React from 'react';
import './style.css';
import Table from 'react-bootstrap/Table';
import { Card, Container } from 'react-bootstrap';

const RSVPInfoCard = (props) => {
  return (
    <row>
      <Card border="dark" style={{ width: '14rem' }}>
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>
          <Card.Text>{props.total} </Card.Text>
        </Card.Body>
      </Card>
    </row>
  );
};

export default RSVPInfoCard;

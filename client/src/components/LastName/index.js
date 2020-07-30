import React from 'react';
import { Form } from 'react-bootstrap';
import './style.css';

function LastName() {
  return (
    <Form>
      <Form.Group controlId="formGridEmail">
        <Form.Label className="text-style">Last Name</Form.Label>
        <Form.Control
          type="email"
          placeholder="Last name goes here"
        />
      </Form.Group>
    </Form>
  );
}

export default LastName;

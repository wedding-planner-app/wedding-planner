import React from 'react';
import { Form } from 'react-bootstrap';
import './style.css';

function FirstName() {
  return (
    <Form>
      <Form.Group controlId="formGridEmail">
        <Form.Label className="text-style">First Name</Form.Label>
        <Form.Control
          type="email"
          placeholder="First name goes here"
        />
      </Form.Group>
    </Form>
  );
}

export default FirstName;

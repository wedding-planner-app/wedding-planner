import React from 'react';
import { Form } from 'react-bootstrap';
import './style.css';

function Email(props) {
  return (
    <Form.Group controlId="formBasicEmail">
      <Form.Label className="text-style">Email Address</Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter email"
        value={props.value}
        onChange={props.onChange}
      />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  );
}

export default Email;

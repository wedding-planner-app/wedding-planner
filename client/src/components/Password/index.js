import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './style.css';

function Password(props) {
  return (
    <Form.Group controlId="formBasicPassword">
      <Form.Label className="text-style">Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Password"
        value={props.value}
        onChange={props.onChange}
      />
    </Form.Group>
  );
}

export default Password;

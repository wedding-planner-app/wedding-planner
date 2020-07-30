import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './style.css';

function Password() {
  return (
    <Form>
      <Form.Group controlId="formBasicPassword">
        <Form.Label className="text-style">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
  );
}

export default Password;

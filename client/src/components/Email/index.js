import React from 'react';
import { Form } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css'

function Email() {
  return (
    <Container fluid className="pt-3">
      <Row>
        <Col className="col-3"></Col>
        <Col className="col-6">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-style">Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Form>
        </Col>
        <Col className="col-3"></Col>
      </Row>
    </Container>
  );
}

export default Email;

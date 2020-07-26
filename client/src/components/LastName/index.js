import React from 'react';
import { Form } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

function LastName() {
  return (
    <Container fluid className="pt-3">
      <Row>
        <Col className="col-3"></Col>
        <Col className="col-6">
          <Form>
            <Form.Group controlId="formGridEmail">
              <Form.Label className="text-style">
                Last Name
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Last name goes here"
              />
            </Form.Group>
          </Form>
        </Col>
        <Col className="col-3"></Col>
      </Row>
    </Container>
  );
}

export default LastName;

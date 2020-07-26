import React from 'react';
import { Form } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

function FirstName() {
  return (
    <Container fluid className="pt-3">
      <Row>
        <Col className="col-3"></Col>
        <Col className="col-6">
          <Form>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="text-style">
                First Name
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="First name goes here"
              />
            </Form.Group>
          </Form>
        </Col>
        <Col className="col-3"></Col>
      </Row>
    </Container>
  );
}

export default FirstName;

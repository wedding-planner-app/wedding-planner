import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

function Password() {
  return (
    <Container fluid className="pt-1">
      <Row>
        <Col className="col-3"></Col>
        <Col className="col-6">
          <Form>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Col>
        <Col className="col-3"></Col>
      </Row>
    </Container>
  );
}

export default Password;

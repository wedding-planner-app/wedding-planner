import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './style.css';

function BtnComponent() {
  return (
    <Container fluid className="p-3">
      <Row>
        <Col className="col-3"></Col>
        <Col className="col-6">
          <Button
            type="submit"
            variant="outline-light"
            className="btnColor"
            size="md"
            block
          >
            Submit
          </Button>
        </Col>
        <Col className="col-3"></Col>
      </Row>
    </Container>
  );
}

export default BtnComponent;

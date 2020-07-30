import React from 'react';
import Email from '../../components/Email';
import Password from '../../components/Password';
import BtnComponent from '../../components/Button';
import { Card, Container, Row, Col } from 'react-bootstrap';
import user from './user.png';
import './style.css';

const LoginPage = () => {
  return (
    <Container fluid className="pt-5">
      <Row>
        <Col xs="2" md="3" lg="3"></Col>
        <Col xs="8" md="6" lg="6">
          <Card className="bgLoginComponent custom-style-login bg-light pb-4">
            <Card.Header className="text-center bg-light login-title-style">
              <h3>Login</h3>
            </Card.Header>
            <Card.Body>
              <Col className="custom pt-3">
                <Card.Img
                  className="login-img-style"
                  variant="top"
                  src={user}
                />
              </Col>
              <Email />
              <Password />
              <Col className="custom">
                <BtnComponent name="Submit" />
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="2" md="6" lg="3"></Col>
      </Row>
    </Container>
  );
};

export default LoginPage;

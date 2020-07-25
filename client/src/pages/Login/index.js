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
        <Col className="col-3"></Col>
        <Col className="col-6">
          <Card className="bgLoginComponent custom-style-login bg-light">
            <Card.Header className="text-center">
              <Card.Title className="login-title-style">
                <h3>Login</h3>
              </Card.Title>
            </Card.Header>
            <Col className="custom pt-3">
              <Card.Img
                className="login-img-style"
                variant="top"
                src={user}
              />
            </Col>
            <Email />
            <Password />
            <BtnComponent />
          </Card>
        </Col>
        <Col className="col-3"></Col>
      </Row>
    </Container>
  );
};

export default LoginPage;

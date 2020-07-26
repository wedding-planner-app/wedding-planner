import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import user from './user.png';
import './style.css';
import BtnComponent from '../../components/Button';
import Email from '../../components/Email';
import Password from '../../components/Password';

const SignUp = () => {
  return (
    <Container fluid className="pt-5">
      <Row>
        <Col className="col-6">
          <Card className="bgLoginComponent custom-style-login bg-light">
            <Card.Header className="text-center">
              <Card.Title className="login-title-style">
                <h3>SignUp</h3>
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

export default SignUp;

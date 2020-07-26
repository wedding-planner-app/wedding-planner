import React from 'react';
import FirstName from '../../components/FirstName';
import Email from '../../components/Email'
import { Card, Container, Row, Col } from 'react-bootstrap';
import user from './user.png';

const ProfilePage = () => {
  return (
    <Container fluid className="pt-5">
      <Row>
        <Col className="col-3"></Col>
        <Col className="col-6">
          <Card className="bgLoginComponent custom-style-login bg-light">
            <Card.Header className="text-center">
              <Card.Title className="login-title-style">
                <h3>Profile</h3>
              </Card.Title>
            </Card.Header>
            <Col className="custom pt-3">
              <Card.Img
                className="login-img-style"
                variant="top"
                src={user}
              />
            </Col>
            <FirstName />
            <Email />
          </Card>
        </Col>
        <Col className="col-3"></Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;

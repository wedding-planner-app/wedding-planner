import React from 'react';
import FirstName from '../../components/FirstName';
import LastName from '../../components/LastName';
import Email from '../../components/Email';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import user from './user.png';
import './style.css';

const ProfilePage = () => {
  return (
    <Container fluid className="pt-5">
      <Row>
        <Col className="col-3"></Col>
        <Col className="col-6">
          <Card className="bgProfileComponent custom-style-profile bg-light">
            <Card.Header className="text-center">
              <Card.Title className="profile-title-style">
                <h3>Profile</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body className="custom">
              <Col className="custom pt-3">
                <Card.Img
                  className="profile-img-style"
                  variant="top"
                  src={user}
                />
              </Col>
              <FirstName />
              <LastName />
              <Email />
              <Button className="btnColor">
                <i class="fa fa-plus p-1" aria-hidden="true"></i>
                Create New Reservation
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-3"></Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;

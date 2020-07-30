import React from 'react';
import FirstName from '../../components/FirstName';
import LastName from '../../components/LastName';
import Email from '../../components/Email';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import user from './user.png';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ProfilePage = () => {
  return (
    <Container fluid className="pt-5">
      <Row>
        <Col className="col-3"></Col>
        <Col className="col-6">
          <Card className="bgProfileComponent custom-style-profile bg-light">
            <Card.Header>
              <Card.Title className="profile-title-style">
                <h3>Profile</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Col className="center">
                <Card.Img
                  className="profile-img-style"
                  variant="top"
                  src={user}
                />
              </Col>
              <FirstName className="custom" />
              <LastName />
              <Email />
              <Button className="btnColor">
                <FontAwesomeIcon icon={faPlus} />
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

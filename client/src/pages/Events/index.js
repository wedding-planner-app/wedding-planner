import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WeddingCard from '../../components/WeddingCard';
import logo from './logo.png';
import Btn from '../../components/Button';

const EventsPage = () => {
  return (
    <Container className="pt-3 mb-5">
      <Row>
        <Btn name="Create Event" />
      </Row>
      <Row className="d-flex flex-wrap">
        <Col className="col-sm-12 col-lg-6 mb-3">
          <WeddingCard
            img={logo}
            title="Event"
            username="@ wedding_team"
          />
        </Col>
        <Col className="col-sm-12 col-lg-6 mb-3">
          <WeddingCard
            img={logo}
            title="Event"
            username="@ wedding_team"
          />
        </Col>
      </Row>
      <Row>
        <Col className="col-sm-12 col-lg-6 mb-3">
          <WeddingCard
            img={logo}
            title="Event"
            username="@ wedding_team"
          />
        </Col>
        <Col className="col-sm-12 col-lg-6 mb-3">
          <WeddingCard
            img={logo}
            title="Event"
            username="@ wedding_team"
          />
        </Col>
      </Row>
      <Row className="custom-margin">
        <Btn name="Create Event" />
      </Row>
    </Container>
  );
};

export default EventsPage;

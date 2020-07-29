import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WeddingCard from '../../components/WeddingCard';
import logo from './logo.png';

const EventsPage = () => {
  return (
    <Container className="pt-5 mb-5">
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
    </Container>
  );
};

export default EventsPage;

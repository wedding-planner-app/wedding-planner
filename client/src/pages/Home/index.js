import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarouselPage from '../../components/Carousel';
import Message from '../../components/Message';
import InfoCard from '../../components/InfoCard';
import venues from './imgs/venues.jpg';
import guest from './imgs/guest.png';
import media from './imgs/media.jpeg';
import invitations from './imgs/invitations.png';
import './style.css';

const HomePage = () => {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col className="col-12">
          <CarouselPage />
        </Col>
      </Row>
      <Row>
        <Col>
          <Message className="col-12" />
        </Col>
      </Row>
      <Row className="d-flex flex-wrap">
        <Col className="col-lg-3 col-xs-12 col-md-6">
          <InfoCard
            title="Venues"
            summary="Summary here"
            img={venues}
          />
        </Col>
        <Col className="col-lg-3 col-xs-12 col-md-6">
          {' '}
          <InfoCard
            title="Invitations"
            summary="Summary here"
            img={invitations}
          />
        </Col>
        <Col className="col-lg-3 col-xs-12 col-md-6">
          {' '}
          <InfoCard
            title="Media"
            summary="Summary here"
            img={media}
          />
        </Col>
        <Col className="col-lg-3 col-xs-12 col-md-6">
          {' '}
          <InfoCard
            title="Guests"
            summary="Summary here"
            img={guest}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;

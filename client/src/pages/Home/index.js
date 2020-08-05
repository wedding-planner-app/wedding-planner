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
      <Row className="d-flex flex-wrap mb-5 pb-5">
        <Col className="col-lg-3 col-xs-12 col-md-6 col-12">
          <InfoCard
            title="Venues"
            summary="Find the perfect venue"
            img={venues}
          />
        </Col>
        <Col className="col-lg-3 col-xs-12 col-md-6 col-12">
          {' '}
          <InfoCard
            title="Invitations"
            summary="Invite your loved ones"
            img={invitations}
          />
        </Col>
        <Col className="col-lg-3 col-xs-12 col-md-6 col-12">
          {' '}
          <InfoCard
            title="Media"
            summary="Store photos, video, and more"
            img={media}
          />
        </Col>
        <Col className="col-lg-3 col-xs-12 col-md-6 col-12">
          {' '}
          <InfoCard
            title="Guests"
            summary="Mange guest RSVPs"
            img={guest}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;

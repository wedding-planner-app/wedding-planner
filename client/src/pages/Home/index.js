import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarouselPage from '../../components/Carousel';
import Message from '../../components/Message';
import InfoCard from '../../components/InfoCard';
import venues from './imgs/venues.jpg';
import guests from './imgs/guests-modified.png';
import media from './imgs/media.png';
import invitations from './imgs/invitations.png';
import './style.css';

const HomePage = () => {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col>
          <CarouselPage />
        </Col>
      </Row>
      <Row>
        <Col>
          <Message />
        </Col>
      </Row>
      <Row>
        <Col>
          <InfoCard
            title="Venues"
            summary="Summary here"
            img={venues}
          />
        </Col>
        <Col>
          {' '}
          <InfoCard
            title="Invitations"
            summary="Summary here"
            img={invitations}
          />
        </Col>
        <Col>
          <InfoCard
            title="Media"
            summary="Summary here"
            img={media}
          />
        </Col>
        <Col>
          {' '}
          <InfoCard
            title="Guests"
            summary="Summary here"
            img={guests}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;

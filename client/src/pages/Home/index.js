import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarouselPage from '../../components/Carousel';
import Message from '../../components/Message';
import InfoCard from '../../components/InfoCard';
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
          <div className="wraper mb-5">
            <InfoCard />
          </div>
        </Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
        <Col>3 of 4</Col>
      </Row>
    </Container>
  );
};

export default HomePage;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarouselPage from '../../components/Carousel';
import Message from '../../components/Message';

const HomePage = () => {
  return (
    <Container fluid className="p-0">
      <CarouselPage />
      <Message />
    </Container>
  );
};

export default HomePage;

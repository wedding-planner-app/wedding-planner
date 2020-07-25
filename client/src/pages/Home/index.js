import React from 'react';
import { Container } from 'react-bootstrap';
import CarouselPage from '../../components/Carousel';
import Message from '../../components/Message';

const HomePage = () => {
  return (
    <Container className="mt-5 mb-5">
      <CarouselPage />
      <Message className=" mb-5" />
    </Container>
  );
};

export default HomePage;

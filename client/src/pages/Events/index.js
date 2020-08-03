import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WeddingCard from '../../components/WeddingCard';
import logo from './logo.png';
import Btn from '../../components/Button';

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: '/api/weddings',
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setEvents(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Container className="pt-3 mb-5">
      {events.length == 0 && (
        <Row className="d-flex justify-content-center my-5">
          <h3>No Events Availables</h3>
        </Row>
      )}

      <Row className="d-flex flex-wrap justify-content-start my-3">
        {events.map((event) => (
          <Col
            className="col-sm-12 col-md-6 col-lg-4 mb-3"
            id={`wedding-${event.id}`}
          >
            <WeddingCard
              img={logo}
              title={event.title}
              username={event.user_email}
              date={new Date(event.date).toDateString()}
              time={event.time}
              description={event.description}
              id={event.id}
            />
          </Col>
        ))}
      </Row>

      <Row className="custom-margin my-5">
        <Btn name="Create New Event" href="/events/new" />
      </Row>
    </Container>
  );
};

export default EventsPage;

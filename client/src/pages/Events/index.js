import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WeddingCard from '../../components/WeddingCard';
import logo from './logo.png';
import Btn from '../../components/Button';
import { useAuth0 } from '@auth0/auth0-react';

const EventsPage = () => {
  const { user } = useAuth0();
  const { email } = user;

  const [events, setEvents] = useState([]);

  const loadEvents = () => {
    console.log('Loading Events for user: ' + email);
    var loadedEvents = [];
    // TODO: use API call
    for (var i = 0; i < 4; i++) {
      loadedEvents.push({
        id: i,
        title: 'Sample Event',
        description: 'my description',
        date: '2020-12-12T00:00:00.000Z',
        time: '13:30:00',
        createdAt: '2020-07-30T00:53:21.000Z',
        updatedAt: '2020-07-30T01:29:09.000Z',
        UserId: email,
      });
    }
    setEvents(loadedEvents);
  };

  // use to load data async from API
  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <Container className="pt-3 mb-5">
      <Row>
        <Btn
          className="mb-5"
          name="Create Event"
          href="/events/new"
        />
      </Row>

      <Row className="d-flex flex-wrap">
        {events.map((event) => (
          <Col
            className="col-sm-12 col-lg-6 mb-3"
            id={`wedding-${event.id}`}
          >
            <WeddingCard
              img={logo}
              title={event.title}
              username={email}
            />
          </Col>
        ))}
      </Row>

      <Row className="custom-margin">
        <Btn name="Create Event" href="/events/new" />
      </Row>
    </Container>
  );
};

export default EventsPage;

import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WeddingCard from '../../components/WeddingCard';
import logo from './logo.png';
import Btn from '../../components/Button';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  const { getAccessTokenSilently } = useAuth0();

  //code used to generate the tpken and test on dev
  // const showToken = async () => {
  //   let t = await getAccessTokenSilently();
  //   console.log(t);
  // };

  // showToken();

  const loadEventsFromApi = async () => {
    const token = await getAccessTokenSilently();
    var config = {
      method: 'get',
      url: '/api/weddings',
      headers: { Authorization: `Bearer ${token}` },
    };

    axios(config)
      .then(function (response) {
        setEvents(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDeleteEvent = async (id) => {
    const token = await getAccessTokenSilently();
    var config = {
      method: 'delete',
      url: `/api/weddings/${id}`,
      headers: { Authorization: `Bearer ${token}` },
    };

    axios(config)
      .then(function (response) {
        loadEventsFromApi();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    loadEventsFromApi();
  }, []);

  return (
    <Container className="pt-3 mb-5">
      {events.length === 0 && (
        <Row className="d-flex justify-content-center my-5">
          <h3>No Events Availables</h3>
        </Row>
      )}

      <Row className="d-flex flex-wrap justify-content-start my-3">
        {events.map((event) => (
          <Col
            className="col-sm-12 col-md-6 col-lg-4 mb-3"
            id={`wedding-${event.id}`}
            key={`wedding-${event.id}`}
          >
            <WeddingCard
              img={logo}
              title={event.title}
              username={event.user_email}
              date={new Date(event.date).toDateString()}
              time={event.time}
              description={event.description}
              id={event.id}
              onClickDelete={() => {
                handleDeleteEvent(event.id);
              }}
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

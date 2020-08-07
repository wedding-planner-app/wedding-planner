import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import BtnComponent from '../../components/Button';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './style.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Redirect } from 'react-router';
var axios = require('axios');
var qs = require('qs');

const NewReservationPage = () => {
  const { getAccessTokenSilently } = useAuth0();

  //added useState hook
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  // used to send user to next page on create success
  const [eventCreated, setEventCreated] = useState(false);
  const [nextUrl, setNextUrl] = useState('');

  const saveNewReservation = async (event) => {
    event.preventDefault();

    const token = await getAccessTokenSilently();

    var data = qs.stringify({
      title: title,
      description: description,
      date: date,
      time: time,
    });
    var config = {
      method: 'post',
      url: '/api/weddings',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setNextUrl(`/events/`);
        setEventCreated(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container className="pt-5 mb-5 fixed-margin">
      {eventCreated && <Redirect to={nextUrl} />}
      <br></br>
      <h3 className="title-style">Reserve A Date for the Wedding</h3>
      <br></br>
      <Row>
        <InputGroup className="mb-3 vertical-align">
          <InputGroup.Append>
            <InputGroup.Text id="TitleOfWedding">
              Title
            </InputGroup.Text>
          </InputGroup.Append>
          <FormControl
            placeholder="Title of your Wedding"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputGroup>
      </Row>
      <Row>
        <InputGroup className="mb-3 vertical-align">
          <InputGroup.Append>
            <InputGroup.Text id="DescriptionTimeOfWedding">
              Description
            </InputGroup.Text>
          </InputGroup.Append>
          <FormControl
            placeholder="Description of your Wedding"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputGroup>
      </Row>
      <Row>
        <Col>
          <InputGroup className="mb-3 vertical-align">
            <InputGroup.Append>
              <InputGroup.Text id="StartTimeOfWedding">
                Start Time
              </InputGroup.Text>
            </InputGroup.Append>
            <FormControl
              placeholder="Enter start time of the Wedding"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col className="center">
          <Calendar
            className="calendar"
            onClickDay={(value, event) => setDate(value)}
          />
        </Col>
      </Row>
      <Row>
        <BtnComponent
          name="Make Reservation"
          onClick={saveNewReservation}
        />
      </Row>
    </Container>
  );
};

export default NewReservationPage;

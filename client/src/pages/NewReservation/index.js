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
  // used to handle errors on the page
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const displayError = (message) => {
    setShowError(true);
    setErrorMessage(message);
  };

  const saveNewReservation = async (event) => {
    event.preventDefault();

    const token = await getAccessTokenSilently();

    // set the error back to false when the component refresh
    setShowError(false);

    // validate title
    if (!title) return displayError('Please, enter a valid title');

    // validate description
    if (!description)
      return displayError('Please enter a valid description');

    // validate time
    if (!time) return displayError('Please enter a valid time');

    // validate date
    if (!date) return displayError('Please enter a valid date');

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
        setShowError(true);
        setErrorMessage(error);
        console.log(error);
      });
  };

  return (
    <Container className="pt-5 mb-5 fixed-margin">
      {eventCreated && <Redirect to={nextUrl} />}

      <Row className="d-flex flex-wrap flex-column mb-5 p-md-5 shadow-lg mb-3 card-custom-style">
        <h3 className="title-style text-center">
          Create Event Reservation
        </h3>
        <hr></hr>
        <Col className="col-sm-12">
          <InputGroup className="mb-3 vertical-align">
            <InputGroup.Append>
              <InputGroup.Text id="TitleOfWedding">
                Title
              </InputGroup.Text>
            </InputGroup.Append>
            <FormControl
              placeholder="Wedding Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3 vertical-align">
            <InputGroup.Append>
              <InputGroup.Text id="StartTimeOfWedding">
                Start Time
              </InputGroup.Text>
            </InputGroup.Append>
            <FormControl
              placeholder="Wedding Start Time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3 vertical-align">
            <InputGroup.Append>
              <InputGroup.Text id="DescriptionTimeOfWedding">
                Description
              </InputGroup.Text>
            </InputGroup.Append>
            <FormControl
              placeholder="Wedding Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </InputGroup>
          <h6 className="title-style text-center ont-weight-bold">
            Select Date for the Event
          </h6>
        </Col>
        <Col className="center col-sm-12">
          <Calendar
            className="calendar"
            onClickDay={(value, event) => setDate(value)}
          />
        </Col>
      </Row>
      <Row className="text-center">
        <Col className="col-sm-12">
          {showError && (
            <h5 className="text-danger">{errorMessage}</h5>
          )}{' '}
        </Col>
      </Row>
      <Row>
        <BtnComponent
          className="create-btn-style"
          name="Make Reservation"
          onClick={saveNewReservation}
        />
      </Row>
    </Container>
  );
};

export default NewReservationPage;

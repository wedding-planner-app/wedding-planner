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
// docs for calendar https://github.com/wojtekmaj/react-calendar
import { useAuth0 } from '@auth0/auth0-react';
var axios = require('axios');
var qs = require('qs');

const NewReservationPage = () => {
  const { getAccessTokenSilently } = useAuth0();

  //added useState hook
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

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
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container className="pt-5 mb-5">
      <br></br>
      <h1 className="title-style">Reserve A Date for the Wedding</h1>
      <br></br>
      <Row>
        <InputGroup className="mb-3 vertical-align">
          <FormControl
            placeholder="Title of your Wedding"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <InputGroup.Append>
            <InputGroup.Text id="TitleOfWedding">
              Title
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </Row>
      <Row>
        <InputGroup className="mb-3 vertical-align">
          <FormControl
            placeholder="Description of your Wedding"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <InputGroup.Append>
            <InputGroup.Text id="DescriptionTimeOfWedding">
              Description
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </Row>
      <Row>
        <Col className="center">
          <Calendar
            className="calendar"
            onClickDay={(value, event) => setDate(value)}
          />
        </Col>
      </Row>
      <br></br>
      <br></br>
      <Row>
        <Col>
          <InputGroup className="mb-3 vertical-align">
            <FormControl
              placeholder="Enter start time of the Wedding"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <InputGroup.Append>
              <InputGroup.Text id="StartTimeOfWedding">
                Start Time
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
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

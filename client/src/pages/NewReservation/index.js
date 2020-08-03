import React from 'react';
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

  const saveNewReservation = async (event) => {
    event.preventDefault();

    const token = await getAccessTokenSilently();

    console.log(`token: ${token}`);

    var data = qs.stringify({
      title: 'Dummy wedding',
      description: 'dummy description text',
      date: '12/12/2020',
      time: '13:30',
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
            aria-describedby="basic-addon2"
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
            aria-describedby="basic-addon2"
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
            onClickDay={(value, event) =>
              alert('Clicked day: ', value, new Date())
            }
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
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <InputGroup.Text id="StartTimeOfWedding">
                Start Time
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col>
          <InputGroup className="mb-3 vertical-align">
            <FormControl
              placeholder="Enter end time of the Wedding"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <InputGroup.Text id="EndTimeOfWedding">
                End Time
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

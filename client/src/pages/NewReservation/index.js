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

const NewReservationPage = () => {
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
        <BtnComponent name="Make Reservation" onClick="" />
      </Row>
    </Container>
  );
};

export default NewReservationPage;

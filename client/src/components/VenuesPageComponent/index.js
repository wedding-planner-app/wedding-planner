import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WeddingCard from '../WeddingCard';
import Venue from './placeholder_venue.png';
import InputText from '../InputText';
import BtnComponent from '../Button';
import './style.css';
import VenueAPI from "../../utils/VenueAPI";

class VenuesPageComponent extends Component {



    
  render() {
    return (
      // Components venue search functionality
      <Container className="pt-5 mb-5">
        <h1 className="title-style">Search for Venues</h1>
        <Row className="d-flex flex-column flex-md-row vertical-align">
          <Col className="col-sm-12 col-lg-6">
            <InputText
              style="p5 mb-3 vertical-align"
              name="Search by venue name"
            />
          </Col>
          <Col className="col-sm-12 col-lg-6 mb-3">
            <BtnComponent name="Search" />
          </Col>
        </Row>
        <br></br>
        {/* Venue card components */}
        <Row>
          <Col className="col-6 mb-3">
            <WeddingCard
              img={Venue}
              name="Venue Name from API"
              username="@ wedding_team"
            />
          </Col>
          <Col className="col-6 mb-3">
            <WeddingCard
              img={Venue}
              name="Venue Name from API"
              username="@ wedding_team"
            />
          </Col>
        </Row>
        <Row>
          <Col className="col-6 mb-3">
            <WeddingCard
              img={Venue}
              name="Venue Name from API"
              username="@ wedding_team"
            />
          </Col>
          <Col className="col-6 mb-3">
            <WeddingCard
              img={Venue}
              name="Venue Name from API"
              username="@ wedding_team"
            />
          </Col>
          <Col className="col-6 mb-3">
            <WeddingCard
              img={Venue}
              name="Venue Name from API"
              username="@ wedding_team"
            />
          </Col>
          <Col className="col-6 mb-3">
            <WeddingCard
              img={Venue}
              name="Venue Name from API"
              username="@ wedding_team"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default VenuesPageComponent;

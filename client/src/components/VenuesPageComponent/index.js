import axios from 'axios';
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WeddingCard from '../WeddingCard';
import PlaceholderImage from './placeholder_venue.png';
import InputText from '../InputText';
import BtnComponent from '../Button';
import './style.css';

class VenuesPageComponent extends Component {
  constructor() {
    super();
    this.state = {
      venueList: [],
    };
  }

  componentDidMount() {
    fetch(window.location.origin + '/api/venue/search?name=Convention')
      .then((res) => res.json())
      .then((res) => this.setState({ venueList: res.data }))
      .catch((err) => console.log(err));
  }

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
          {this.state.venueList.map((venue) => (
            <Col className="col-6 mb-3">
              <WeddingCard
                img={(venue.photo === 'Sorry, no photo available') ? PlaceholderImage : venue.photo}
                name={venue.name}
                username={venue.address}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default VenuesPageComponent;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WeddingCard from '../../components/WeddingCard';
import Venue from './placeholder_venue.png';
import InputText from '../../components/InputText';
import DropdownButtonAll from '../../components/DropdownButton';
import BtnComponent from '../../components/Button';
import './style.css';

const VenuesPage = () => {
  return (
    <Container className="pt-5 mb-5">
      <h1 className="title-style">Search for Venues</h1>
      <Row className ="d-flex flex-column flex-md-row align-items-center ">
        <Col className="col-sm-12 col-lg-4 center">
          <InputText style="p5 mb-5 vertical-align" name="City"/>
        </Col>
        <Col  className="col-sm-12 col-lg-4 mb-3 center">
          <DropdownButtonAll className="pt-5 mb-5" />
        </Col>
        <Col  className=" col-sm-12 col-lg-4 mb-3 center">
          <InputText style="p5 mb-5 vertical-align" name="Zip Code" />
        </Col>
      </Row>
      <br></br>
      <Row>
        <BtnComponent name="Search" />
      </Row>

      <Row>
        <Col className="col-6 mb-3">
          <WeddingCard
            img={Venue}
            title="Venue Name from API"
            username="@ wedding_team"
          />
        </Col>
        <Col className="col-6 mb-3">
          <WeddingCard
            img={Venue}
            title="Venue Name from API"
            username="@ wedding_team"
          />
        </Col>
      </Row>
      <Row>
        <Col className="col-6 mb-3">
          <WeddingCard
            img={Venue}
            title="Venue Name from API"
            username="@ wedding_team"
          />
        </Col>
        <Col className="col-6 mb-3">
          <WeddingCard
            img={Venue}
            title="Venue Name from API"
            username="@ wedding_team"
          />
        </Col>
        <Col className="col-6 mb-3">
          <WeddingCard
            img={Venue}
            title="Venue Name from API"
            username="@ wedding_team"
          />
        </Col>
        <Col className="col-6 mb-3">
          <WeddingCard
            img={Venue}
            title="Venue Name from API"
            username="@ wedding_team"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default VenuesPage;

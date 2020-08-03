import React, { Component } from 'react';
import {
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import PlaceholderImage from './placeholder_venue.png';
import BtnComponent from '../Button';
import './style.css';
import VenueCard from '../VenueCard';

class VenuesPageComponent extends Component {
  constructor() {
    super();

    // Initialize a reference to the search text input, so we can extract its value later.
    this.searchInput = React.createRef();

    // State will hold list of venues as they arrive from the search API.
    // isLoading is a bool to show placeholder text while data is being loaded.
    this.state = {
      venueList: [],
      isLoading: false,
    };
  }

  // When the component starts up, pre-populate venue data matching 'convention' search.
  componentDidMount() {
    this.searchVenues('Convention');
  }

  // Method to call venue search API endpoint
  searchVenues = (name) => {
    // Do not allow the user to search for a venue if the search text input is empty.
    if (!name) {
      alert('Please enter a venue name to search.');
      return;
    }

    // Toggle the loading bool to show the placeholder text.
    this.setState({ isLoading: true });

    fetch(window.location.origin + '/api/venue/search?name=' + name)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          venueList: res.data,
          isLoading: false,
        }),
      )
      .catch((err) => console.log(err));
  };

  // When user hits enter while still in text input focus, trigger venue search
  onKeyPress = (event) => {
    if (event.charCode == 13) {
      this.searchVenues(this.searchInput.current.value);
    }
  };

  // When user clicks search button, trigger venue search
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchVenues(this.searchInput.current.value);
  };

  render() {
    return (
      // Components venue search functionality
      <Container className="pt-5 mb-5">
        <h1 className="title-style">Search for Venues</h1>
        <Row className="d-flex flex-column flex-md-row vertical-align">
          <Col className="col-sm-12 col-lg-6">
            <InputGroup className="p5 mb-3 vertical-align">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  Search by venue name
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                ref={this.searchInput}
                onKeyPress={this.onKeyPress}
              />
            </InputGroup>
          </Col>
          <Col className="col-sm-12 col-lg-6 mb-3">
            <BtnComponent
              name="Search"
              onClick={this.handleFormSubmit}
            />
          </Col>
        </Row>
        <br></br>
        {/* Venue card components */}
        <Row>
          {this.state.isLoading ? (
            <Col className="col-6 mb-3">
              <h1 className="title-style">Loading...</h1>
            </Col>
          ) : (
            this.state.venueList.map((venue) => (
              <Col className="col-6 mb-3">
                <VenueCard
                  img={
                    venue.photo === 'Sorry, no photo available'
                      ? PlaceholderImage
                      : venue.photo
                  }
                  name={venue.name}
                  address={venue.address}
                  url={venue.url}
                  username={'wedding team'}
                />
              </Col>
            ))
          )}
        </Row>
      </Container>
    );
  }
}

export default VenuesPageComponent;

import React, { useState, useEffect } from 'react';
import {
  Container,
  Button,
  Modal,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import SearchTable from '../../components/SearchTable';
import InputText from '../../components/InputText';
import { textFilter } from 'react-bootstrap-table2-filter';
import './style.css';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const GuestsPage = (props) => {
  const [addShow, setAddShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [guests, setGuests] = useState([]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const eventId = props.match.params.eventId;
  const { getAccessTokenSilently } = useAuth0();

  const loadGuestsFromAPI = async () => {
    const token = await getAccessTokenSilently();

    var config = {
      method: 'get',
      url: `/api/guests?eventid=${eventId}`,
      headers: { Authorization: `Bearer ${token}` },
    };

    axios(config)
      .then(function (response) {
        setGuests(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleAddGuest = async (event) => {
    setAddShow(false);
    event.preventDefault();
    const token = await getAccessTokenSilently();

    var qs = require('qs');
    var data = qs.stringify({
      name: name,
      email: email,
      phone: phone,
      eventid: eventId,
    });
    var config = {
      method: 'post',
      url: '/api/guests',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        loadGuestsFromAPI();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    loadGuestsFromAPI();
  }, []);

  const selectRow = {
    mode: 'radio', // single row selection
  };

  const columns = [
    {
      dataField: 'id',
      text: 'Id',
      hidden: true, // set to false only for dev
    },
    {
      dataField: 'name',
      text: 'Name  ',
      filter: textFilter({
        placeholder: 'Search by name',
      }),
      sort: true,
    },
    {
      dataField: 'email',
      text: 'Email  ',
      filter: textFilter({
        placeholder: 'Search by email',
      }),
      sort: true,
    },
    {
      dataField: 'phone',
      text: 'Phone  ',
      sort: true,
    },
  ];

  return (
    <Container className="marginCustom mt-5">
      <div className="row m-auto">
        {/* Add Guest Button */}
        <Button
          variant="outline-primary"
          onClick={() => setAddShow(true)}
        >
          ADD
        </Button>{' '}
        {/* Modal alert to add */}
        <Modal show={addShow} onHide={() => setAddShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Guest</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Name</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Email</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Phone Number</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setAddShow(false)}
            >
              Close
            </Button>
            <Button variant="primary" onClick={handleAddGuest}>
              Add Guest
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Edit Guest Info Button */}
        <Button
          variant="outline-secondary"
          onClick={() => setEditShow(true)}
        >
          EDIT
        </Button>{' '}
        {/* Modal alert to edit */}
        <Modal show={editShow} onHide={() => setEditShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Guest Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputText
              style="vertical-align"
              placeholder="existing guest info here"
              name="Name"
            />
            <InputText
              style="vertical-align"
              placeholder="existing guest info here"
              name="Email"
            />
            <InputText
              style="vertical-align"
              placeholder="existing guest info here"
              name="Phone Number"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setEditShow(false)}
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => setEditShow(false)}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Delete Guest Button */}
        <Button
          variant="outline-danger"
          onClick={() => setDeleteShow(true)}
        >
          REMOVE
        </Button>{' '}
        {/* Modal alert to delete*/}
        <Modal show={deleteShow} onHide={() => setDeleteShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Entry</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete this entry?
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setDeleteShow(false)}
            >
              Do Not Delete
            </Button>
            <Button
              variant="primary"
              onClick={() => setDeleteShow(false)}
            >
              Yes Delete Entry
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div>
        <SearchTable
          data={guests}
          keyField="id"
          columns={columns}
          selectRow={selectRow}
        />
      </div>
    </Container>
  );
};

export default GuestsPage;

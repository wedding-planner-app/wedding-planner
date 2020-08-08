import React, { useState, useEffect } from 'react';
import {
  Container,
  Button,
  Modal,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import SearchTable from '../../components/SearchTable';
import { textFilter } from 'react-bootstrap-table2-filter';
import './style.css';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const GuestsPage = (props) => {
  const [addShow, setAddShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [inviteShow, setInviteShow] = useState(false);
  const [guests, setGuests] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedRow, setSelectedRow] = useState({});
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const eventId = props.match.params.eventId;
  const { getAccessTokenSilently } = useAuth0();

  const displayError = (message) => {
    setShowError(true);
    setErrorMessage(message);
    setAddShow(true);
  };

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

    setShowError(false);

    if (!name) return displayError('Please enter a valid name');
    if (!email) return displayError('Please enter a valid email');
    if (!phone) return displayError('Please enter a valid phone');

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
        setName('');
        setPhone('');
        setEmail('');
        loadGuestsFromAPI();
      })
      .catch(function (error) {});
  };

  const handleDeleteGuest = async () => {
    const token = await getAccessTokenSilently();

    setDeleteShow(false);

    let id = selectedRow.id;
    if (!id) return;

    var config = {
      method: 'delete',
      url: `/api/guests/${id}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        setSelectedRow({});
        loadGuestsFromAPI();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleInviteGuest = async (email) => {
    const token = await getAccessTokenSilently();

    setInviteShow(false);

    if (!email) return false;

    var config = {
      method: 'get',
      url: `/api/invitation/send/${email}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        setSelectedRow({});
        loadGuestsFromAPI();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleEditGuest = async () => {
    const token = await getAccessTokenSilently();

    setEditShow(false);

    let id = selectedRow.id;
    if (!id) return;

    var qs = require('qs');
    var data = qs.stringify(selectedRow);

    var config = {
      method: 'put',
      url: `/api/guests/${id}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setSelectedRow({ name: '', email: '', phone: '' });
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
    onSelect: (row, isSelect, rowIndex, e) => {
      setSelectedRow(row);
    },
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
            {showError && (
              <h6 className="text-danger mr-auto">{errorMessage}</h6>
            )}
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
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Name</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                value={selectedRow.name}
                onChange={(e) =>
                  setSelectedRow({
                    ...selectedRow,
                    name: e.target.value,
                  })
                }
              />
            </InputGroup>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Email</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                value={selectedRow.email}
                onChange={(e) =>
                  setSelectedRow({
                    ...selectedRow,
                    email: e.target.value,
                  })
                }
              />
            </InputGroup>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Phone Number</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                value={selectedRow.phone}
                onChange={(e) =>
                  setSelectedRow({
                    ...selectedRow,
                    phone: e.target.value,
                  })
                }
              />
            </InputGroup>
            <h6
              className="text-danger mt-3 text-center"
              hidden={selectedRow.id}
            >
              'Edit failed: Please select a guest (Try again)',
            </h6>
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
              onClick={() => handleEditGuest()}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Invite Guest Button */}
        <Button
          variant="outline-primary"
          onClick={() => setInviteShow(true)}
        >
          INVITE
        </Button>{' '}
        {/* Modal alert to invite*/}
        <Modal show={inviteShow} onHide={() => setInviteShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Invite Guest</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to invite {selectedRow.name}?
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setInviteShow(false)}
            >
              Do Not Invite
            </Button>
            <Button
              variant="primary"
              onClick={async () => {
                await handleInviteGuest(selectedRow.email);
              }}
            >
              Yes Invite Guest
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
            <Modal.Title>Delete Guest</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6
              className="text-danger mt-3 text-center"
              hidden={selectedRow.id}
            >
              'Delete failed: Please select a guest to delete (Try
              again)',
            </h6>
            <h6 hidden={!selectedRow.id}>
              {' '}
              Are you sure you want to delete this entry?{' '}
            </h6>
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
              onClick={() => handleDeleteGuest()}
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

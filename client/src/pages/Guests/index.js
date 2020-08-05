import React, { useState } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import SearchTable from '../../components/SearchTable';
import InputText from '../../components/InputText';
import './style.css';

const GuestsPage = () => {
  const [addShow, setAddShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);

  return (
    <Container>
      <div className="row">
        {/* Add Guest Button */}
        <Button
          variant="outline-success"
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
            <InputText style="vertical-align" name="First Name" />
            <InputText style="vertical-align" name="Last Name" />
            <InputText style="vertical-align" name="Email" />
            <InputText style="vertical-align" name="Phone Number" />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setAddShow(false)}
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => setAddShow(false)}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Edit Guest Info Button */}
        <Button
          variant="outline-primary"
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
              name="First Name"
            />
            <InputText
              style="vertical-align"
              placeholder="existing guest info here"
              name="Last Name"
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
        <SearchTable />
      </div>
    </Container>
  );
};

export default GuestsPage;

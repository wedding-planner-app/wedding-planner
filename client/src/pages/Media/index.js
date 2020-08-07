import React, { useState } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
// import Table from 'react-bootstrap/Table';
import MediaTable from '../../components/MediaTable';
import InputText from '../../components/InputText';
import './style.css';

const MediaPage = () => {
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
            <Modal.Title>Add New Media</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>The media ID is auto-generated for you. </h5>
            <InputText name="File Type" />
            <InputText name="URL Link" />
            <InputText name="Wedding ID" />
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
            <Modal.Title>Edit Media Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputText
              placeholder="existing info here"
              name="Media ID (locked)"
            />
            <InputText
              placeholder="existing info here"
              name="File Type"
            />
            <InputText
              placeholder="existing info here"
              name="URL Link"
            />
            <InputText
              placeholder="existing info here"
              name="Wedding ID (locked)"
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
        <MediaTable />
      </div>
    </Container>
  );
};

export default MediaPage;

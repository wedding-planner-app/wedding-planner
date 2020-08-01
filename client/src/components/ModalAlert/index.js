import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './style.css';

const ModalAlert = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {props.btn1}
        </Button>
        <Button variant="primary" onClick={handleClose}>
          {props.btn2}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAlert;

import React from 'react';
import { Modal } from 'react-bootstrap';
import './style.css';

function DeleteAlert(props) {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{props.text}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">{props.btn1}</Button>
        <Button variant="primary">{props.btn2}</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default DeleteAlert;

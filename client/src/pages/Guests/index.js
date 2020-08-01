import React from 'react';
import { Container, Row, Button, Modal } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import SearchTable from '../../components/SearchTable';
import DeleteAlert from '../../components/DeleteAlert';
import './style.css';

const GuestsPage = () => {


  const guestListData = [
    {
      guestNameFirst: 'John',
      guestNameLast: 'Doe',
      guestEmail: 'johndoe@gmail.com',
      guestPhoneNumber: '512-555-5555',
    },
    {
      guestNameFirst: 'Jane',
      guestNameLast: 'Doe',
      guestEmail: 'jandoe@gmail.com',
      guestPhoneNumber: '512-555-6666',
    },
  ];

  return (
    <Container>
      <div className="row">
        <Button variant="outline-success">ADD</Button>{' '}
        <Button variant="outline-primary">EDIT</Button>{' '}
        <Button variant="outline-danger">REMOVE</Button>{' '}
        <DeleteAlert
          title="Delete Entry"
          message="Are you sure you want to delete this guest?"
          btn1="Do Not Delete"
          btn2="Yes"
        />
      </div>

      <div>
        <SearchTable />
      </div>
    </Container>
  );
};

export default GuestsPage;

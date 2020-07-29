import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import SearchTable from '../../components/SearchTable';
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
      </div>

      <div>
        <SearchTable />
      </div>
    </Container>
  );
};

export default GuestsPage;

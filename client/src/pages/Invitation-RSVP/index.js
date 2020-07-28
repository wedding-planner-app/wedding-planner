import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import RSVPInfoCard from '../../components/RSVPInfoCard';

const RSVPPage = () => {
  const guestListData = [
    {
      guestName: 'John Doe',
      guestStatus: 'Yes',
    },
    {
      guestName: 'Jane Doe',
      guestStatus: 'No',
    },
  ];

  return (
    <Container>
      <Row>
        <RSVPInfoCard
          title="Total Guest"
          total={this?.state?.totalGuest || 0}
        />
        <RSVPInfoCard
          title="RSVP Yes"
          total={this?.state?.rsvpYes || 0}
        />
        <RSVPInfoCard
          title="RSVP No"
          total={this?.state?.rsvpNo || 0}
        />
        <RSVPInfoCard
          title="Pending"
          total={this?.state?.pendingGuest || 0}
        />
      </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Guest Name</th>
            <th>Guest Status</th>
          </tr>
        </thead>
        <tbody>
          {guestListData.map((guest) => (
            <tr>
              <td>{guest.guestName}</td>
              <td>{guest.guestStatus}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default RSVPPage;

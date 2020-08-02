import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, {
  textFilter,
} from 'react-bootstrap-table2-filter';

const SearchTable = () => {
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

  const columns = [
    {
      dataField: 'guestNameFirst',
      text: 'First Name ',
      filter: textFilter({
        placeholder: 'Search by first name',
      }),
    },
    {
      dataField: 'guestNameLast',
      text: 'Last Name',
      sort: true,
    },
    {
      dataField: 'guestEmail',
      text: 'Email',
      sort: true,
    },
    {
      dataField: 'guestPhoneNumber',
      text: 'Phone Number',
    },
  ];

  return (
    <div>
      <BootstrapTable
        data={guestListData}
        keyField="guestEmail"
        columns={columns}
        filter={filterFactory()}
      />
    </div>
  );
};

export default SearchTable;

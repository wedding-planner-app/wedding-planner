import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';

const SearchTable = (props) => {
  return (
    <div>
      <BootstrapTable
        data={props.data}
        keyField={props.keyField}
        columns={props.columns}
        filter={filterFactory()}
        selectRow={props.selectRow}
      />
    </div>
  );
};

export default SearchTable;

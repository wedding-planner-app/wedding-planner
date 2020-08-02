import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, {
  textFilter,
} from 'react-bootstrap-table2-filter';

const MediaTable = () => {
  const mediaListData = [
    {
      mediaID: '1234',
      type: 'video',
      url: 'testUrl.com',
      wedding_id: '101112',
    },
    {
      mediaID: '5678',
      type: 'video2',
      url: 'testURL.com',
      wedding_id: '131415',
    },
  ];

  const columns = [
    {
      dataField: 'mediaID',
      text: 'Media ID #',
      filter: textFilter({
        placeholder: 'Search by media ID',
      }),
    },
    {
      dataField: 'type',
      text: 'File Type',
      sort: true,
    },
    {
      dataField: 'URL',
      text: 'URL Link',
      sort: true,
    },
    {
      dataField: 'wedding_id',
      text: 'wedding ID',
    },
  ];

  return (
    <div>
      <BootstrapTable
        data={mediaListData}
        keyField="weddind_id"
        columns={columns}
        filter={filterFactory()}
      />
    </div>
  );
};

export default MediaTable;

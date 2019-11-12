import React from 'react';
import ReactDOM from 'react-dom';
import { DataTable } from 'react-data-components';

const api_uri = "http://localhost:5000/api/";
const api_players = "players";

const DisplayTable = (data) => {
  const renderNameSearchUrl = (val, row) => {
    const playerName = row['name'];
    console.log('playerName: ', playerName);
    return (
      <a href={`https://www.google.com/search?q=%22${playerName.replace(' ','+')}%22`} target="_blank">
        {playerName}
      </a>
    );
  }

  const tableColumns = [
    { title: 'ID', prop: 'id' },
    { title: 'Name', prop: 'name', render: renderNameSearchUrl },
    { title: 'Country', prop: 'country' },
    { title: 'Searches', prop: 'searches' }
  ];

  return (
    <DataTable
      className="container"
      keys="id"
      columns={tableColumns}
      initialData={data}
      initialPageLength={10}
      initialSortBy={{ prop: 'id', order: 'ascending' }}
      pageLengthOptions={[ 5, 10, 25, 50, 100 ]}
    />
  );
}

fetch(api_uri+api_players)
  .then(res => res.json())
  .then((rows) => {
    ReactDOM.render(DisplayTable(rows), document.getElementById('root'));
  });

export default DisplayTable;
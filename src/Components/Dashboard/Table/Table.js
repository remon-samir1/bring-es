import React from 'react';
import './Table.css'
const Table = () => {
  return (
    <table className='custom-table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>order No</th>
          <th>transaction</th>
          <th>delivery status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Julie Funk</td>
          <td>#4768</td>
          <td>cash</td>
          <td>delivered</td>
        </tr>
        <tr>
          <td>Julie Funk</td>
          <td>#4768</td>
          <td>cash</td>
          <td>delivered</td>
        </tr>
        <tr>
          <td>Julie Funk</td>
          <td>#4768</td>
          <td>cash</td>
          <td>delivered</td>
        </tr>
        <tr>
          <td>Julie Funk</td>
          <td>#4768</td>
          <td>cash</td>
          <td>delivered</td>
        </tr>
        <tr>
          <td>Julie Funk</td>
          <td>#4768</td>
          <td>cash</td>
          <td>delivered</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;

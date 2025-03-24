import React from 'react';
import './Table.css'
import { Link } from 'react-router-dom';
const Table = () => {
  return (
    <table className='custom-table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>order No</th>
          <th>transaction</th>
          <th>delivery status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Julie Funk</td>
          <td>#4768</td>
          <td>cash</td>
          <td>delivered</td>
          <td><Link to='details'>view</Link></td>
        </tr>
        <tr>
          <td>Julie Funk</td>
          <td>#4768</td>
          <td>cash</td>
          <td>delivered</td>
          <td><Link to='details'>view</Link></td>

        </tr>
        <tr>
          <td>Julie Funk</td>
          <td>#4768</td>
          <td>cash</td>
          <td>delivered</td>
          <td><Link to='details'>view</Link></td>

        </tr>
        <tr>
          <td>Julie Funk</td>
          <td>#4768</td>
          <td>cash</td>
          <td>delivered</td>
          <td><Link to='details'>view</Link></td>

        </tr>
        <tr>
          <td>Julie Funk</td>
          <td>#4768</td>
          <td>cash</td>
          <td>delivered</td>
          <td><Link to='details'>view</Link></td>

        </tr>
      </tbody>
    </table>
  );
}

export default Table;

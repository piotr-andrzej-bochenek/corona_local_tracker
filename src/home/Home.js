import * as React from 'react';
import { Table } from 'semantic-ui-react';
import './Home.css';

export default function Home () {
    return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>New reported cases, deaths and recoveries yesterday</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
        <Table.Row>
            <Table.Cell className='datawrapper_Home_container'>
                <iframe src="https://datawrapper.dwcdn.net/JNx3A/3/"></iframe>
            </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Spare Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Spare Cell</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};
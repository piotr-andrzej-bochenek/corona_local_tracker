import * as React from 'react';
import { Table } from 'semantic-ui-react';
import './Home.css';

export default function Home () {
  return (
    <div className="Home">
      <h1>
        Personal local coronavirus SARS-COV-2 tracker
      </h1>
      
      <h3>
        In the storm of a daily coming statistics it's easy to miss the ones, that are actually important. When you can't find useful source, you need to create it on your own!
      </h3>
      
      <div>
        You may know this data presentation (please be patient, while it loads a worldwide big amount of data):
        
        <div className="embed-container">
          <iframe src="https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6"></iframe>
        </div>
        
        There are many other ways of presenting data, some less informative, some more:
      </div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Newly reported cases, deaths and recoveries yesterday</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
    
        <Table.Body>
          <Table.Row>
              <Table.Cell className='datawrapper_Home_container'>
                  <iframe src="https://datawrapper.dwcdn.net/JNx3A/3/"></iframe>
              </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Chart 02</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Chart 03</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};
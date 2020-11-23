import * as React from 'react';
import {
  Image,
  Table,
} from 'semantic-ui-react';
import './Home.css';
import img1 from "../assets/icons/corona192.png";

export default function Home () {
  return (
    <div className="Home">
      <h1>
        Personal coronavirus SARS-COV-2 data tracker
      </h1>
      
      <h3>
        In the storm of a daily coming statistics it's easy to miss the ones, that are actually important.
      </h3>

      <h3>
        When you can't find useful and daily updated source, create it on your own!
      </h3>

      <div>
        <Image src={img1} style={{width: 'auto', height: '25px'}}/>
        <Image src={img1} style={{width: 'auto', height: '25px'}}/>
        <Image src={img1} style={{width: 'auto', height: '25px'}}/>
        <Image src={img1} style={{width: 'auto', height: '25px'}}/>
        <Image src={img1} style={{width: 'auto', height: '25px'}}/>
      </div>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>There are many other ways of presenting data, some more useful and informative, some less.</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
    
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              You may be familiar with this data presentation (please be patient, while it loads a worldwide amount of data):
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className='embed-container'>
              <iframe title="JHU COVID-19 Dashboard" src="https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6"></iframe>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Newly reported cases, deaths and recoveries yesterday:</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className='datawrapper_Home_container'>
              <iframe title="DataWrapper chart 1" src="https://datawrapper.dwcdn.net/JNx3A/3/"></iframe>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Chart 03</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};
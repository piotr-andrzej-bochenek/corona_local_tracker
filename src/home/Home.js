import * as React from 'react';
import {
  Image,
  Table,
} from 'semantic-ui-react';
import './Home.css';
import img1 from "../assets/icons/corona192.png";

export default function Home () {
  return (
    <div className="Home--container">
      <h1>
        Personal coronavirus SARS-COV-2 data tracker
      </h1>
      
      <h3>
        In the storm of a daily coming statistics it's easy to miss the ones, that are actually important.
      </h3>

      <h3>
        When you can't find useful and daily updated source, create it on your own!
      </h3>

      <div className="Home__Separator">
        <Image src={img1} style={{width: 'auto', height: '25px'}}/>
        <Image src={img1} style={{width: 'auto', height: '25px'}}/>
        <Image src={img1} style={{width: 'auto', height: '25px'}}/>
        <Image src={img1} style={{width: 'auto', height: '25px'}}/>
        <Image src={img1} style={{width: 'auto', height: '25px'}}/>
      </div>

      <Table celled className="Home__Table">
        <Table.Header>
          <Table.Row verticalAlign="middle">
            <Table.HeaderCell className="Home__Table--header">There are many ways of presenting data, some more useful and informative, some less.</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
    
        <Table.Body>
          <Table.Row verticalAlign="middle">
            <Table.Cell className="Home__Table--cell">
              You may be familiar with this data presentation (please be patient, while it loads a worldwide amount of data):
            </Table.Cell>
          </Table.Row>
          <Table.Row verticalAlign="middle">
            <Table.Cell className='Home__Table--cell Home__Table--charts--container Home__Table--charts--01'>
              <iframe title="JHU COVID-19 Dashboard" src="https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6" scrolling="no" frameBorder="0"></iframe>
            </Table.Cell>
          </Table.Row>
          <Table.Row verticalAlign="middle">
            <Table.Cell className="Home__Table--cell">
              The above set of data is huge to load and process. It's focused on total numbers, with some attention to daily changes of them. It brings limited base for conclusions. USA has the most reported cases, and most deaths. Is it then the most affected country?
            </Table.Cell>
          </Table.Row>
          <Table.Row verticalAlign="middle">
            <Table.Cell className='Home__Table--cell Home__Table--charts--container Home__Table--charts--02'>
            <iframe title="Coronavirus COVID-19 cases in all countries" aria-label="chart" src="https://datawrapper.dwcdn.net/a8p5B/1/" scrolling="no" frameBorder="0"></iframe>
            </Table.Cell>
          </Table.Row>
          <Table.Row verticalAlign="middle">
            <Table.Cell className="Home__Table--cell">Newly reported cases, deaths and recoveries yesterday:</Table.Cell>
          </Table.Row>
          <Table.Row verticalAlign="middle">
            <Table.Cell className='Home__Table--cell Home__Table--charts--container Home__Table--charts--03'>
              <iframe title="DataWrapper chart 1" aria-label="chart" src="https://datawrapper.dwcdn.net/JNx3A/3/" scrolling="no" frameBorder="0"></iframe>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="Home__Table--row" verticalAlign="middle">
            <Table.Cell className="Home__Table--cell">Chart 03</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};
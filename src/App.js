import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToolStatus from './ToolStatus';
import {Table, PageHeader} from 'react-bootstrap';

import {get} from 'axios';

const tools = [
  // {toolName: 'Lathe', status: 'bad', message: 'Gary needs help holding the motor to remount.'},
  // {toolName: 'Mill', status: 'good', message: ''},
  // {toolName: 'Tormach', status: 'warning', message: 'Likely needs the coolant lines cleaned.'},
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {tools};
  }

  componentWillMount() {
    get('https://api.fieldbook.com/v1/59488d0c69766c03006b02f9/status').then(((res)=> {
      this.setState({tools:res.data});
    }).bind(this))
  }

  render() {
    return (
      <div className="App">
        <PageHeader>Tampa Hackerspace Tool Status</PageHeader>
        <div className='container'>
          <Table striped bordered condensed>
            <thead>
              <tr>
                <th>Status</th>
                <th>Tool</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tools.map((t, i) => {
                return <ToolStatus key={i} {...t}/>
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default App;

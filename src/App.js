import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, FormControl, FormGroup, Button} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <span><i className="fa fa-newspaper-o fa-5x App-logo" aria-hidden="true"></i></span>

          <h2>[untitled social justice resource center]</h2>
        </div>
        <p className="App-intro">
          Stay up to date on current events.
        </p>
        <Navigation />
      </div>
    );
  }
}

class Navigation extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">[untitled]</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>
            {' '}
            <Button type="submit">Submit</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default App;

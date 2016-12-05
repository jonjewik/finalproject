import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {Navbar, FormControl, FormGroup, Button, Panel} from 'react-bootstrap';

import DataController from './DataController';

class App extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			subject: [],
			date: '',
			form: ''
		};
		this.fetchContent = this.fetchContent.bind(this);
  }


  fetchContent(search) {
    var firstThis = this; // necessary??
      DataController.searchNYT(search)
      .then(function(data) {
        firstThis.setState({
          subject: data.response.docs
        }
      )
    })
    console.log(this.state.subject);
  }    // ?????????

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
        <Navigation getSearch={this.fetchContent} />
        <Content getSearch={this.fetchContent} subject={this.state.subject}/>
      </div>
    );
  }
}

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: ""
    };
    this.searchClick = this.searchClick.bind(this);
    this.searchChange = this.searchChange.bind(this);
  }

  // gets values for search bar input
  searchClick() {
    this.props.getSearch(this.state.searchValue);

    console.log(this.state.searchValue);
    //console.log(this.state.subject);
  }

  // grabs search bar input
  searchChange(event) {
    var newValue = event.target.value;
    this.setState({searchValue: newValue});
  }

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
              <FormControl type="text" placeholder="Search" onChange={this.searchChange}/>
            </FormGroup>
            {' '}
            <Button type="submit" onClick={this.searchClick}>Submit</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

class Content extends React.Component {
  render() {
    var articles = this.props.subject.map(function(art) {
      return <Card art={art} key={art._id}/>;
    });

    return (
      <div role= "main" className="contentArea"> 
        {articles}
      </div>
    );
  }
}

class Card extends React.Component {
  render() {
    return (
      <div className="artCard">
        <Panel className="songList" header={this.props.art.headline.main}>
          <img className="albmImg"  alt="thumbnail"/>
          <p>{this.props.art.snippet}</p>
        </Panel>
      </div>
    );
  }
}

//src={this.props.art.multimedia[0].url}

export default App;

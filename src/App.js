// DELETE CONSOLE . LOGS

import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {Navbar, FormControl, FormGroup, Button, Panel, ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';
import DataController from './DataController';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      subject: [],
      date: '',
      hits: null,
      page: 0
    };
    this.fetchContent = this.fetchContent.bind(this);
    this.setDate = this.setDate.bind(this);
    this.setPageUp = this.setPageUp.bind(this);
    this.setPageDown = this.setPageDown.bind(this);
  }

  fetchContent(search) {
    
    var firstThis = this; 

    if(this.state.page !== null) {
      DataController.pageControl(search, this.state.date, this.state.page)
        .then(function (data) {
          firstThis.setState({
            search: search,
            subject: data.response.docs,
            hits: data.response.meta.hits
          })
        })
    } 

    console.log(this.state.subject);
    console.log(this.state.date);
    console.log(this.state.hits);
    console.log(this.state.page);
    console.log(this.state.search);
  }  

  setDate(newDate) {
    console.log('first' + newDate);
    this.setState({ date: newDate })
    console.log("setDate");
    console.log("NOW " + this.state.date);
  }

  setPageUp(p) {
    p++;
    console.log('page   ' + p);
    this.setState({ page: p }, function() {
      console.log("NOW 1 " + this.state.page);
    });
    console.log("NOW 2 " + this.state.page);
  }

  setPageDown(p) {
    p--;
    console.log('page   ' + p);
    this.setState({ page: p })
    console.log("NOW " + this.state.page);
  }


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
        <Navigation getSearch={this.fetchContent} getDate={this.setDate}/>
        <Pages setPageUp={this.setPageUp} setPageDown={this.setPageDown} getPage={this.fetchContent} hits={this.state.hits} search={this.state.search}/>
        <Content getSearch={this.fetchContent} subject={this.state.subject} />
        <Pages setPageUp={this.setPageUp} setPageDown={this.setPageDown} getPage={this.fetchContent} hits={this.state.hits} search={this.state.search}/>
      </div>
    );
  }
}
class Navigation extends React.Component {

  // input type date for calendar 

  constructor(props) {
    super(props)
    this.state = {
      searchValue: "",
      date: ""
    };
    this.searchClick = this.searchClick.bind(this);
    this.searchChange = this.searchChange.bind(this);
    this.startDate = this.startDate.bind(this);
  }
  // gets values for search bar input
  searchClick() {
    console.log(this.state.date);
    if (this.state.date !== "") {
      this.props.getDate(this.state.date);
      this.props.getSearch(this.state.searchValue);
    } else {
      this.props.getSearch(this.state.searchValue);
    }
  }
  // grabs search bar input
  searchChange(event) {
    var newValue = event.target.value;
    this.setState({ searchValue: newValue });
  }
  startDate(event) {
    var newDate = event.target.value;
    this.setState({ date: newDate });

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
            <FormGroup>
              <FormControl type="text" placeholder="YYYYMMDD" onChange={this.startDate}/>
            </FormGroup>
            <Button type="submit" onClick={this.searchClick}>Submit</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
class Content extends React.Component {
  render() {
    var articles = this.props.subject.map(function (art) {
      return <Card art={art} key={art._id}/>;  
    });

    console.log("ARTICLES " + articles);

    return (
      <div role="main" className="contentArea">
        {articles}
      </div>
    );
  }
}


class Card extends React.Component {

  render() {
    return (
      
      <div className="artCard">
        <a href={this.props.art.web_url}>
        <Panel className="songList" header={this.props.art.headline.main}>
          <img className="albmImg"  alt="thumbnail"/>
          <p>{this.props.art.snippet}</p>
        </Panel>
        </a>
      </div>
    );
  }
}


class Pages extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0
    };
    this.pageFor = this.pageFor.bind(this);
    this.pageBack = this.pageBack.bind(this);
  }

  pageFor() {
    var n = this.state.page + 1;
    console.log("N " + n);
    this.setState({page: n});

    this.props.setPageUp(this.state.page);
    this.props.getPage(this.props.search);
  }

  pageBack() {
    var n = this.state.page - 1;
    this.setState({page: n});

    this.props.setPageDown(this.state.page);
    this.props.getPage(this.props.search);
  }
  
  // click event handler rather than an a tag
  render() {
    var pages = [];
    var num = this.props.hits / 10;
    console.log("num" + num);
    console.log("below " + pages);
    return (
      <div>
        <Button onClick={this.pageBack}>Back</Button>
        <Button onClick={this.pageFor}>Next</Button>
        
        
        </div>
    );
  }
}


export default App;

// pages ??



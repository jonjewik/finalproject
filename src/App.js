import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {Navbar, FormControl, FormGroup, Button, Panel} from 'react-bootstrap';
import DataController from './DataController';
// no error thrown if incorrect date format or search word inputted, simply returns error
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: [],
      date: '',
      form: ''
    };
    this.fetchContent = this.fetchContent.bind(this);
    this.setDate = this.setDate.bind(this);
  }
  fetchContent(search) {
    var firstThis = this; // necessary??
    if (this.state.date !== "") {
      DataController.dateSearch(search, this.state.date)
        .then(function (data) {
          firstThis.setState({
            subject: data.response.docs
          })
        })
    } else {
      DataController.searchNYT(search)
        .then(function (data) {
          firstThis.setState({
            subject: data.response.docs
          })
        })
    }

    console.log(this.state.subject);
    console.log(this.state.date);
  }    // ?????????
  // fetchFilteredContent(search) {
  //   var firstThis = this; // necessary??
  //     DataController.searchNYT(search)
  //     .then(function(data) {
  //       firstThis.setState({
  //         subject: data.response.docs
  //       }
  //     )
  //   })
  //   console.log(this.state.subject);
  // }
  setDate(newDate) {
    console.log('first' + newDate);
    // var firstThis = this;
    // firstThis.setState({
    //  date: date
    // })
    this.setState({ date: newDate })
    //this.fetchContent = this.fetchContent.bind(this);
    console.log("setDate");
    console.log("NOW " + this.state.date);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <span><i className="fa fa-newspaper-o fa-5x App-logo" aria-hidden="true"></i></span>
          <h2>[untitled social justice resource center]</h2>
        </div>
        <p className="App-intro">
          "Stay up to date on current events"
        </p>
        <Navigation getSearch={this.fetchContent} getDate={this.setDate}/>
        <Content getSearch={this.fetchContent} subject={this.state.subject}/>
      </div>
    );
  }
}
class Navigation extends React.Component {
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
    // this.props.getDate(this.state.date);
    // this.props.getSearch(this.state.searchValue);
    //console.log(this.state.searchValue);
    //console.log(this.state.subject);
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
            <a href="#">Search</a>
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
            <Button type="submit" onClick={this.searchClick}>Search</Button>
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
//src={this.props.art.multimedia[0].url}
export default App;
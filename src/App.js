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
          <h1>[untitled social justice resource center]</h1>
        </div>
        <p className="App-intro">
          Stay up to date on current events.
        </p>
        <Navigation getSearch={this.fetchContent} getDate={this.setDate}/>
        <Pages setPageUp={this.setPageUp} setPageDown={this.setPageDown} getPage={this.fetchContent} hits={this.state.hits} search={this.state.search}/>
        <Content getSearch={this.fetchContent} subject={this.state.subject} />
        <Resources />
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
          <Button href="#resources">Resources</Button>
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
        <Panel className="artPanel" header={this.props.art.headline.main}>
          <h4 content={this.props.art.byline.original}>{this.props.art.byline.original}</h4>
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

class Resources extends React.Component {
  render() {
    return (
      <div id="resources">
        <h2 role="banner"> Resources </h2>
        <h3> LGBTQ </h3>
        <p><em>Know you are not alone:</em> LGBTQ+ people around the world have been through the same struggle. Check out the stories of hope and recovery at the bottom of the page to see how they cope.</p>
        <p><em>Build your support network:</em> Find allies in your life who will help keep you safe and who you can lean on if you feel depressed or suicidal.</p>
        <p><em>Talk to someone:</em> Silence isn’t strength. Don’t keep suicidal feelings to yourself. Lean on your support network, find a therapist or a support group.</p>
        <p><em>Make a safety plan:</em> Have a step-by-step plan ready for if/when you feel depressed, suicidal, or in crisis, so you can start at step one and continue through the steps until you feel safe.</p>
    
        <p>
          <ul>
            <li><a href="http://www.hrusa.org/default.shtm">Human Rights Resource Center</a></li>
            <li><a href="http://www.equalityfederation.org/">Equality Federation</a></li>
            <li><a href="http://hrc.org/">Human Rights Campaign (HRC)</a></li>
            <li><a href="http://www.biresource.net/">Bisexual Resource Center</a></li>
            <li><a href="http://www.aclu.org/lgbt-rights">American Civil Liberties Union (ACLU)</a></li>
          </ul>
        </p>

        <h3 role="banner"> Equality </h3>
        <p>
          <ul>
            <li><a href="http://www.glbthotline.org/hotline.html">GLBT Hotline: <a href="tel:18888434564">1-888-843-4564</a></a></li>
            <li><a href="http://www.aclu.org">American Civil Liberties Union (ACLU)</a></li>
            <li><a href="http://www.racialequityresourceguide.org">Racial Equity Resource Guide</a></li>
            <li><a href="https://www.racialequitytools.org/home">Racial Equity Tools</a></li>
            <li><a href="https://www2.ed.gov/policy/rights/guid/ocr/sex.html">Sex Discrimination Resources</a></li>
          </ul>
        </p>
        <h3 role="banner"> Youth </h3>
        <p><em>Ask for help:</em> Don’t be afraid to let your friends, family, or teachers know what you need when they ask; they want to help. You can also call the National Suicide Prevention Lifeline any time — calls are confidential.</p>
        <p><em>Remember that this feeling can be overcome:</em> Suicide is a permanent solution to a temporary problem. Family conflict, relationships, grades, sexual identity, and the loss of important people can seem impossible to deal with. But with support from others, you can.</p>
        <p><em>Evaluate the relationships in your life:</em> Love and friendship are all about respect. Toxic or unhealthy relationships can negatively affect you. Whether you’re dating or building new friendships, remember your rights.</p>
        <p>
          <ul>
            <li><a href="http://www.pbs.org/wnet/cryforhelp/episodes/resources/hotlines-and-web-sites-for-teens/?p=11">National Suicide Hotline: <a href="tel:+18007842433">1-800-SUICIDE (784-2433)</a></a></li>
            <li><a href="http://nationalsafeplace.org">Safe Place</a></li>
            <li><a href="http://www.pbs.org/wnet/cryforhelp/episodes/resources/hotlines-and-web-sites-for-teens/?p=11">PBS Teenage Mental Illness and Suicide Help</a></li>
            <li><a href="https://www.jedfoundation.org">The Jed Foundation</a></li>
          </ul>
        </p>

        <h3 role="banner"> Rape and Sexual Assault </h3>
        <p>
          <ul>
            <li><a href="http://www.rainn.org/get-help/national-sexual-assault-hotline">National Sexual Assault Hotline: <a href="tel:+18006564673">1-800-656-HOPE</a></a></li>
            <li><a href="http://www.nsvrc.org/">National Sexual Violence Resource Center</a></li>
            <li><a href="http://nsopw.gov/Core/Conditions.aspx">National Sex Offender Registry</a></li>
          </ul>
        </p>

        <h3 role="banner"> Abuse Victims </h3>
        <p><em>Find A Therapist/Support Group:</em> Speaking to someone, whether by going to a therapist or by attending a support group, can help you feel better and improve your mental health. These resources can help you find a psychologist, psychiatrist, or support group near you.</p>
        <p><em>Build A Support Network:</em> You don't have to deal with crisis on your own. Those you choose to confide in can provide encouragement and help you through a crisis.</p>
        <p><em>Use Your Support Network:</em> Leaning on your support network can help you cope during difficult moments and is an important step in getting help and moving forward.</p>
        <p><em>Contact family members or friends who may help to resolve a crisis:</em> Make a list of people who are supportive and who you feel you can talk to when under stress.</p>
        
        <p>
          <ul>
            <li><a href="http://www.thehotline.org/resources/">National Domestic Violence Hotline: <a href="tel:+18007997233">1-800-799-7233</a></a></li>
            <li><a href="http://www.stopstreetharassment.org/our-work/nationalshhotline/">National Street Harassment Hotline: <a href="tel:+8558975910">855-897-5910</a></a></li>
            <li><a href="http://www.childhelp.org/">National Child Abuse Hotline: <a href="tel:8004222253">800-422-2253</a></a></li>
            <li><a href="http://www.ncadv.org/">National Coalition against Domestic Violence</a></li>
            <li><a href="http://www.notalone.gov/">NotAlone.gov</a></li>
          </ul>
        </p>

        <h3 role="banner"> Muslims </h3>
        <p>
          <ul>
            <li><a href="http://www.mrcssi.com">Muslim Resource Center</a></li>
            <li><a href="http://www.api-gbv.org/organizing/manadv.php">Muslim Advocacy Network</a></li>
            <li><a href="http://www.mwrcnfp.org">Muslim Women Resource Center</a></li>
          </ul>
        </p>

        <h3 role="banner"> Women </h3>
        <p>
          <ul>
            <li><a href="http://www.aclu.org">American Civil Liberties Union (ACLU)</a></li>
            <li><a href="http://www.learningpartnership.org/womens-human-rights-resources">Women's Learning Partnership</a></li>
            <li><a href="https://www.awid.org/priority-areas/resourcing-womens-rights">Resourcing Womens Rights</a></li>
          </ul>
        </p>
        <p class="copyright"> Advice taken from: <a href="https://suicidepreventionlifeline.org">https://suicidepreventionlifeline.org</a></p>
      </div>

    );
  }
}


export default App;

// pages ??



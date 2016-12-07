import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Resources from './Resources';


import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import DataController from './DataController';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={App} />
      <Route path="resources" component={Resources} />
    </Route>
  </Router>,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import {App, Navigation} from './App';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Resources from './Resources';


import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import DataController from './DataController';

/*ReactDOM.render(
  <App />,
  document.getElementById('root')
);*/


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      
    </Route>
  </Router>,
  
  document.getElementById('root')
);
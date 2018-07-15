import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Edit from './components/Edit'
import Show from './components/Show'
import Create from './components/Create'

ReactDOM.render(
  <Router>
    <div>
    <Route exact path='/' component={App}></Route>
    <Route path='/edit/:id' component={Edit}></Route>
    <Route path='/create' component={Create}></Route>
    <Route path='/show/:id' component={Show}></Route>
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();

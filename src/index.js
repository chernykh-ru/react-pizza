import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      {/* <Route exact path='/' component={App}></Route>
      <Route path='/Header' component={Header}></Route> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

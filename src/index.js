import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
// import Header from './components/Header';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
        {/* <Route exact path='/' component={App}></Route>
        <Route path='/Header' component={Header}></Route> */}
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

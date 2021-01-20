import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import store from './store'
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Hachi Maru Pop:400', 'Open Sans:400,600,700', 'sans-serif']
  }
});

import WebFont from 'webfontloader';

import { BrowserRouter as Router } from "react-router-dom";

WebFont.load({
  google: {
    families: ['Hachi Maru Pop:400', 'Open Sans:400,600,700', 'sans-serif']
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

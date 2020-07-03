import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './Components/App/App';
import store from './Store/index';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './Static/sass/main.scss';

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

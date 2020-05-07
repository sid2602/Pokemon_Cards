import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { Provider } from 'react-redux'
import configureStore from './data/store'
import GlobalStyles from './GlobalStyles/GlobalStyles'

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <GlobalStyles/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


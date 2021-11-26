/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './index.css';

store()
  .then((s) => {
    ReactDOM.render(
      <Provider store={s}>
        <App />
      </Provider>,
      document.getElementById('root'),
    );
  })
  .catch((err) => {
    console.error(err.message);
  });

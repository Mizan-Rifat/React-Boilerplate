import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';
import { reducers } from './redux/reducers';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
  )
  axios.defaults.baseURL = 'http://127.0.0.1:8000';
  axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  axios.defaults.withCredentials = true;

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

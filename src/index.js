import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import App from './components/app';
import reducers from './reducers';

const middleware = applyMiddleware(createLogger());
const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, document.querySelector('#app'));

import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import App from "./javascripts/Components/App";
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux'
import reducers from './javascripts/reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = applyMiddleware(thunk);

const store = createStore(reducers, composeEnhancers(middlewares));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("video-listings")
);
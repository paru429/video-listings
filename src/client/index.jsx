import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import App from "./javascripts/Components/App";
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducers from './javascripts/reducers';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("video-listings")
);
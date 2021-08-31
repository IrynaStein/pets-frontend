import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider} from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import petsReducer from "./store/petSlice";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const composedEhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(petsReducer, composedEhancer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

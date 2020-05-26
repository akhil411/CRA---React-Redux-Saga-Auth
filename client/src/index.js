import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './redux/reducers';
import rootSaga from './redux/sagas';
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
      </Provider>,
    document.getElementById("root")
  );

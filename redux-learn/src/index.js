import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
//import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import registerServiceWorker from "./registerServiceWorker";
import { watchIncrementCounter } from "./saga/saga";

//store
const logger = store => {
  return next => {
    return action => {
      console.log("middleware: dispath action", action);
      const result = next(action);
      console.log("middleware: state", store.getState());
      return result;
    };
  };
};
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(watchIncrementCounter);
//const store = createStore(reducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

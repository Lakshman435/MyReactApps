import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import itemsReducer from './reducers/AddItem-reducer'
import {Provider} from 'react-redux'
import {BrowserRouter}   from "react-router-dom";

const store = createStore(itemsReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store.getState())


ReactDOM.render(<div><Provider store ={store}><BrowserRouter><App /></BrowserRouter></Provider></div>, document.getElementById('root'));
registerServiceWorker();

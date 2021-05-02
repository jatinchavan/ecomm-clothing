import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import userReducer from './redux/user/user.reducer';
import { combineReducers } from 'redux';
import logger from "redux-logger";

const rootReducer = combineReducers({
    user: userReducer
});

const middleWares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <React.StrictMode>
        <App/>
    </React.StrictMode>
</BrowserRouter> </Provider>, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import userReducer from './redux/user/user.reducer';
import {combineReducers} from 'redux';
import logger from "redux-logger";
import cartReducer from './redux/cart/cart.reducer';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {PersistGate} from 'redux-persist/integration/react';
import homepageReducer from './redux/homepage/homepage.reducer';
import shopReducer from './redux/shop/shop.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};
const rootReducer = combineReducers({user: userReducer, cart: cartReducer, homepage: homepageReducer, shop: shopReducer});
// persistedReducer - Root reducer with persistance capabilities
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [logger];

const store = createStore(persistedReducer, applyMiddleware(...middleWares));
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <PersistGate persistor={persistor}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </PersistGate>
    </BrowserRouter>
</Provider>, document.getElementById('root'));

import './App.css';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';

import HomePage from './pages/homepage/HomePage';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path='/shop' component={ShopPage}/>
            </Switch>

        </div>
    );
}

export default App;

import './App.css';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/Shop';

import HomePage from './pages/homepage/HomePage';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path='/shop' component={ShopPage}/>
            </Switch>

        </div>
    );
}

export default App;

import './App.css';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/signIn-signUp/SignIn-SignUp';

import HomePage from './pages/homepage/HomePage';

import {auth} from './firebase/firebase.utils';
import { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser : null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({
                currentUser: user
            });
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }


    render() {
        return (
            <div>
                <Header currentUser= {this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path='/shop' component={ShopPage}/>
                    <Route exact path='/signin' component={SignInAndSignUp}/>
                </Switch>
    
            </div>
        );
    }
}

export default App;

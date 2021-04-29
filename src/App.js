import './App.css';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/signIn-signUp/SignIn-SignUp';

import HomePage from './pages/homepage/HomePage';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() { //register to the subscription that firebase provides
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

            if (userAuth) { //when user logs in, create document if doesn't exist in createUserProfileDocument and listen to any changes on userRef using onSnapShot
                const userRef = await createUserProfileDocument(userAuth);

                // used onSnapshot just so that we get all the data related to that user and
                // store in state
                userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    })
                });                
            } 
            else { //if user logs out, userAuth is null
                this.setState({currentUser: userAuth})
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        console.log(this.state);

        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
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

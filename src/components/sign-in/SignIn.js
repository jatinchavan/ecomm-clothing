import React, {Component} from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

import './SignIn.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            loading: false
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({loading: true});

        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            // clear the fields once user logs in
            this.setState({email: '', password: '',loading: false})
        } catch (error) {
            console.log(error);
            this.setState({email: '', password: '',loading: false})
            alert('Invalid email/password. Please try again.')
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div> {this.state.loading ? <div class="signin-loader" /> : 
                <div className='sign-in'>
                    <h2>I already have an account</h2>
                    <span>
                        Sign in with your email and password
                    </span>

                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            name="email"
                            value={this.state.email}
                            type="email"
                            required
                            handler={this.handleChange}
                            label='email'/>
                        <FormInput
                            name="password"
                            value={this.state.password}
                            type="password"
                            required
                            handler={this.handleChange}
                            label='password'/>

                        <div className='button'>
                            <CustomButton type='submit'> Sign In </CustomButton>
                            <CustomButton type='submit' onClick={signInWithGoogle} isGoogleSignIn={true}> Sign In with Google</CustomButton>
                        </div>
                    </form>
                </div>}
            </div>
        )
    }
}

export default SignIn;
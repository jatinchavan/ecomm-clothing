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
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            // clear the fields once user logs in
            this.setState({email: '', password: ''})
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
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
            </div>
        )
    }
}

export default SignIn;
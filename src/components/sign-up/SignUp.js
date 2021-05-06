import React, {Component} from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

//to create and authenticate new users
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './SignUp.styles.scss';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            loading: false
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({loading: true});

        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            // save that user's data in the firestore db
            await createUserProfileDocument(user, {displayName});
            // clear the form once user fills and submit the information.
            this.setState({displayName: '', email: '', password: '', confirmPassword: '', loading: false})

        } catch (error) {
            alert(error.message);
            this.setState({loading: false});
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div> {this.state.loading ? <div class="signup-loader" /> :
                <div className='sign-up'>
                    <h2 className='title'>I do not have a account</h2>
                    <span>Sign up with your email and password</span>

                    <form className='sign-up-form' onSubmit={this.handleSubmit}>
                        <FormInput
                            type='text'
                            name='displayName'
                            value={this.state.displayName}
                            onChange={this.handleChange}
                            label='Display Name'
                            required/>
                        <FormInput
                            type='email'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                            label='Email'
                            required/>
                        <FormInput
                            type='password'
                            name='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                            label='Password'
                            required/>
                        <FormInput
                            type='password'
                            name='confirmPassword'
                            value={this.state.confirmPassword}
                            onChange={this.handleChange}
                            label='Password'
                            required/>
                        <CustomButton type='submit'>Sign Up</CustomButton>
                    </form>
                </div>}
            </div>
        )
    }
}

export default SignUp;
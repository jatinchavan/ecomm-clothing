import React from 'react';

import {ReactComponent as FacebookLogo} from '../../assets/social-platforms/facebook.svg';
import {ReactComponent as LinkedinLogo} from '../../assets/social-platforms/linkedin.svg';
import {ReactComponent as GithubLogo} from '../../assets/social-platforms/github.svg';
import {ReactComponent as GmailLogo} from '../../assets/social-platforms/gmail.svg';
import {ReactComponent as CallLogo} from '../../assets/social-platforms/telephone.svg';

import './Contact.styles.scss';

const ContactPage = () => (
    <div className='contactPage'>
        <img
            src="https://i.ibb.co/hFPvBqB/1620298420923.jpg"
            border="0"
            alt='About me'
            className='profile-picture'/>
        <div className='about-me'>
            <h1>about me</h1>
            <p className='info'>Thanks for stopping by. My name is Jatin Chavan.
                <br/>
                I'm a Frontend Developer based in India.</p>
            <p className='info-2'>
                I describe myself as a passionate developer who loves coding,
                <br/>
                open source, and the web platform. I prefer to keep the solution as much simple
                and efficient as possible.</p>
            <p className='info-2'>
                The main areas of my expertise are HTML(5), CSS(3) and JavaScript (native and
                jQuery), ReactJS, Angular 7+.</p>
            <p className='info-2'>
                When I'm not coding or pushing pixels, you'll find me
                <br/>
                working out 🏋️‍♂️, at the beach 🏖 or hiking somewhere in the mountains 🏔.</p>
            <p className='info-2'>You can get my resume <a href="https://drive.google.com/drive/folders/1_bG7OtW4ybXAYwr4Bj3QD8qHp35WhoDC"
                    className='resume-link'>
                    here.</a>
            </p>
            <hr/>
            <p className='info-3'>Please feel free to contact me anytime.</p>
            <div className='contact-platforms'>
                <a href="tel:+919272111491" className='icon'>
                    <CallLogo/>
                </a>
                <a href='mailto:jatinchavan3010@gmail.com' className='icon' target="_blank" rel="noreferrer"> 
                    <GmailLogo/>
                </a>
                <a href='//www.facebook.com/jthrilled/' className='icon' target="_blank" rel="noreferrer">
                    <FacebookLogo/>
                </a>
                <a href='//www.linkedin.com/in/jatin-chavan-84391b120/' className='icon' target="_blank" rel="noreferrer">
                    <LinkedinLogo/>
                </a>
                <a href='//www.github.com/jatinchavan/' className='icon' target="_blank" rel="noreferrer">
                    <GithubLogo/>
                </a>
            </div>
        </div>
    </div>
);

export default ContactPage;
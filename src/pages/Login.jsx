import '../assets/css/login.css';
import React from 'react'
import {Link} from 'react-router-dom'

import FacebookIcon from '../assets/images/facebook.png'
import GoogleIcon from '../assets/images/google.png'

export default function Login() {
    return (
        <div className='login-wrapper'>
            <div className='login'>
                <h3>Login</h3>
                <div className='login-form-group'>
                    <i className='fas fa-user'></i>
                    <input type='text' placeholder='Username' />
                </div>
                <div className='login-form-group'>
                    <i className='fas fa-lock'></i>
                    <input type='password' placeholder='Password' />
                </div>
                <div className='login-form-group check'>
                    <input type='checkbox' id='remember-me' className="check-remember"/>
                    <label for='remember-me'>Remember me</label>
                </div>
                <button>Login</button>
                <div className='social-group'>
                    <Link>
                        <img src={FacebookIcon} alt="" className="facebook-icon"/>
                    </Link>
                    <Link>
                        <img src={GoogleIcon} alt="" className="google-icon"/>
                    </Link>
                </div>
                <span>Can't sign in?</span>
                <Link to="/register">Create an account</Link>
            </div>
        </div>
    );
}

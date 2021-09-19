import "../assets/css/register.css";
import React from "react";
import {Link} from 'react-router-dom';

export default function Register() {
    return (
        <div className='register-wrapper'>
            <div className='register'>
                <h3>Register</h3>
                <div className='register-form-group'>
                    <i className='fas fa-user'></i>
                    <input type='text' placeholder='Username' />
                </div>
                <div className='register-form-group'>
                    <i className='fas fa-lock'></i>
                    <input type='password' placeholder='Password' />
                </div>
                <div className='register-form-group'>
                    <i className='fas fa-lock'></i>
                    <input type='password' placeholder='Confirm password' />
                </div>
                <div className='register-form-group'>
                    <i className='fad fa-mail-bulk'></i>
                    <input type='email' placeholder='Email' />
                </div>

                <button>Register</button>
                <span>Already have an account?</span>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
}

import React, { useState } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import FacebookIcon from '../assets/images/facebook.png';
import GoogleIcon from '../assets/images/google.png';
import { GetUser } from '../api/authApi';
import useVerifyToken from '../hooks/useVerifyToken';

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const isLogin = useVerifyToken();

    const handleLogin = async () => {
        const token = await GetUser(username, password);
        console.log(token)
        if (token) {
            localStorage.setItem('access_token', token);

            history.push('/home');
        }
    };

    if (isLogin) return <Redirect to="/home" />;

    return (
        <div className="login-wrapper">
            <div className="login">
                <h3>Login</h3>
                <div className="login-form-group">
                    <i className="fas fa-user"></i>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="login-form-group">
                    <i className="fas fa-lock"></i>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="login-form-group check">
                    <input type="checkbox" id="remember-me" className="check-remember" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button onClick={handleLogin}>Login</button>
                <div className="social-group">
                    <Link to="/login">
                        <img src={FacebookIcon} alt="" className="facebook-icon" />
                    </Link>
                    <Link to="/login">
                        <img src={GoogleIcon} alt="" className="google-icon" />
                    </Link>
                </div>
                <span>Can't sign in?</span>
                <Link to="/register">Create an account</Link>
            </div>
        </div>
    );
}

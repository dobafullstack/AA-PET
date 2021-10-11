import React, { useState } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import FacebookIcon from '../assets/images/facebook.png';
import GoogleIcon from '../assets/images/google.png';
import { GetUser, LoginApi } from '../api/authApi';
import useVerifyToken from '../hooks/useVerifyToken';
import { ResponseType } from '../api/axiosClient';
import { toast } from 'react-toastify';

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const isLogin = useVerifyToken();

    const handleLogin = async () => {
        const { code, result, error }: ResponseType = await LoginApi(username, password);

        if (error !== null){
            toast.error(error?.message);
            return;
        }

        if (code !== 200){
            toast.error(result);
            return;
        }

        localStorage.setItem('access_token', result.token);

        history.push('/home')
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

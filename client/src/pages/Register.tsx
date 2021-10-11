import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form } from 'reactstrap';
import { RegisterApi } from '../api/authApi';
import { ResponseType } from '../api/axiosClient';

export function Register() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');

    const handleRegister = async () => {
        const { code, result, error }: ResponseType = await RegisterApi(
            username,
            name,
            password,
            phone,
            email
        );

        if (password !== confirmPassword) {
            toast.error('Confirm password is incorrect!');
            return;
        }

        if (error !== null) {
            toast.error(error?.message);
            return;
        }

        if (code !== 201) {
            toast.error(result);
            return;
        }

        toast.success(result);
        setUsername('');
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setPhone('');
    };

    return (
        <div className="register-wrapper">
            <div className="register">
                <h3>Register</h3>
                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleRegister();
                    }}
                >
                    <div className="register-form-group">
                        <i className="fas fa-user"></i>
                        <input
                            required
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            type="text"
                            placeholder="Username"
                        />
                    </div>
                    <div className="register-form-group">
                        <i className="fas fa-user-tie"></i>
                        <input
                            required
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type="text"
                            placeholder="Name"
                        />
                    </div>
                    <div className="register-form-group">
                        <i className="fad fa-mail-bulk"></i>
                        <input
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="register-form-group">
                        <i className="fas fa-lock"></i>
                        <input
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="register-form-group">
                        <i className="fas fa-lock"></i>
                        <input
                            required
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            type="password"
                            placeholder="Confirm password"
                        />
                    </div>
                    <div className="register-form-group">
                        <i className="fas fa-mobile-alt"></i>
                        <input
                            required
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                            type="text"
                            placeholder="Phone number"
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                        />
                    </div>

                    <div className="d-flex justify-content-center">
                        <button>Register</button>
                    </div>
                </Form>
                <span>Already have an account?</span>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
}

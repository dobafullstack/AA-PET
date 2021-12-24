import React, { ReactElement, useContext, useState } from "react";
import { toast } from "react-toastify";
import { Input } from "reactstrap";
import authApi from "../api/authApi";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

interface Props {}

export default function Login({}: Props): ReactElement {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { setIsLogin, isLogin } = useContext(AuthContext);

    const handleLogin = async () => {
        if (username === "" || password === "") {
            toast.warn("Fill username or password first");
            return;
        }

        try {
            const { code, result } = await authApi.login(username, password);
            console.log({ code, result });

            if (code !== 200) toast.error(result);
            else {
                localStorage.setItem("access_token", result.token);
                const { result: user } = await authApi.getUser(result.token);
                if (typeof user !== "string") {
                    setIsLogin(true);
                    navigate("/", { replace: true });
                }
            }
        } catch (error: any) {
            toast.error(error.message);
        }
    };

    if (isLogin) return <Navigate to='/' />;

    return (
        <div className='container-fluid page-body-wrapper full-page-wrapper'>
            <div className='content-wrapper d-flex align-items-stretch auth auth-img-bg'>
                <div className='row flex-grow'>
                    <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                        <div className='auth-form-transparent text-left p-3'>
                            <div className='brand-logo'>
                                <img
                                    src='../../assets/images/logo.svg'
                                    alt='logo'
                                />
                            </div>
                            <h4>Welcome back!</h4>
                            <h6 className='font-weight-light'>
                                Happy to see you again!
                            </h6>
                            <form
                                className='pt-3'
                                onSubmit={(e) => e.preventDefault()}>
                                <div className='form-group'>
                                    <label htmlFor='exampleInputEmail'>
                                        Username
                                    </label>
                                    <div className='input-group'>
                                        <div className='input-group-prepend bg-transparent'>
                                            <span className='input-group-text bg-transparent border-right-0'>
                                                <i className='mdi mdi-account-outline text-primary'></i>
                                            </span>
                                        </div>
                                        <input
                                            type='text'
                                            className='form-control form-control-lg border-left-0'
                                            id='exampleInputEmail'
                                            placeholder='Username'
                                            value={username}
                                            onChange={(e) =>
                                                setUsername(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='exampleInputPassword'>
                                        Password
                                    </label>
                                    <div className='input-group'>
                                        <div className='input-group-prepend bg-transparent'>
                                            <span className='input-group-text bg-transparent border-right-0'>
                                                <i className='mdi mdi-lock-outline text-primary'></i>
                                            </span>
                                        </div>
                                        <input
                                            type='password'
                                            className='form-control form-control-lg border-left-0'
                                            id='exampleInputPassword'
                                            placeholder='Password'
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className='my-2 d-flex justify-content-between align-items-center'>
                                    <div className='form-check'>
                                        <label className='form-check-label text-muted'>
                                            <Input type='checkbox' />
                                            Keep me signed in
                                        </label>
                                    </div>
                                </div>
                                <div className='my-3'>
                                    <button
                                        className='btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn'
                                        onClick={() => handleLogin()}>
                                        LOGIN
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-lg-6 login-half-bg d-flex flex-row'></div>
                </div>
            </div>
        </div>
    );
}

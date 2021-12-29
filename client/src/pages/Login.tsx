import React, { ReactElement, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import authApi from '../api/authApi';
import Breadcrumb from '../components/Layout/Breadcrumb';
import { toast } from 'react-toastify';
import useCheckAuth from '../hooks/useCheckAuth';
import { useNavigate, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import useLocalStorage from '../hooks/useLocalStorage';
import { writeStorage } from '@rehooks/local-storage';

interface Props {}

export default function Login({}: Props): ReactElement {
  const [account, setAccount] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { isLogin, setIsLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  if (isLogin) return <Navigate to='/' />;

  const handleLogin = async () => {
    try {
      if (account === '' || password === '') return;

      const { code, result } = await authApi.login({ username: account, password });
      if (code !== 200) {
        toast.error(result);
        return;
      }

      window.localStorage.setItem('access_token', result.token);
      setIsLogin(true);
      navigate('/', {
        replace: true,
      });
    } catch (error: any) {
      if (error.response) {
        toast.error(error.response.message);
      }
    }
  };

  return (
    <>
      <Breadcrumb title='Login'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>Login</li>
      </Breadcrumb>
      <div className='section section-margin'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7 col-md-8 m-auto'>
              <div className='login-wrapper'>
                <div className='section-content text-center mb-6'>
                  <h2 className='title mb-2'>Login</h2>
                </div>

                <form onSubmit={(e) => e.preventDefault()}>
                  <div className='single-input-item mb-2'>
                    <input required={true} type='text' placeholder='Email or Username' value={account} onChange={(e) => setAccount(e.target.value)} />
                  </div>

                  <div className='single-input-item mb-2'>
                    <input required={true} type='password' placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>

                  <div className='single-input-item mb-3'>
                    <div className='login-reg-form-meta mb-n3'>
                      <button className='btn btn btn-gray-deep btn-hover-primary mb-3' onClick={handleLogin}>
                        Sign In
                      </button>
                      <Link to='/forget-password' className='forget-pwd mb-3'>
                        Forget Password?
                      </Link>
                    </div>
                  </div>

                  <div className='lost-password'>
                    <Link to='/register'>Create Account</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

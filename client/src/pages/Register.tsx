import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Layout/Breadcrumb';
import RegisterInput from '../types/RegisterInput';
import {toast} from 'react-toastify'
import authApi from '../api/authApi';

interface Props {}

const initialRegister = {
  name: '',
  username: '',
  email: '',
  password: '',
  address: '',
  phone: '',
  confirmPassword: '',
};

export default function Register({}: Props): ReactElement {
  const [register, setRegister] = useState<RegisterInput>(initialRegister);

    const handleRegister = async () => {
        if (
          register.name === '' ||
          register.username === '' ||
          register.email === '' ||
          register.password === '' ||
          register.address === '' ||
          register.phone === '' ||
          register.confirmPassword === ''
        )
          return;

        if (register.password !== register.confirmPassword) {
            toast.error("Invalid confirm password")
            return;
        }

        try {
            const {code, error, result} = await authApi.register(register);

            if (code !== 201 || error !== null){
                toast.error(result)
                toast.error(error)
                return;
            }

            setRegister(initialRegister)
            toast.success(result);
        } catch (error: any) {
            toast.error(error.message);
        }
    }

  return (
    <>
      <Breadcrumb title='Register'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>Register</li>
      </Breadcrumb>

      <div className='section section-margin'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7 col-md-8 m-auto'>
              <div className='login-wrapper'>
                <div className='section-content text-center mb-6'>
                  <h2 className='title mb-2'>Create Account</h2>
                </div>

                <form onSubmit={(e) => e.preventDefault()}>
                  <div className='single-input-item mb-2'>
                    <input required={true} type='text' placeholder='Your name' value={register.name} onChange={(e) => setRegister({ ...register, name: e.target.value })} />
                  </div>

                  <div className='single-input-item mb-2'>
                    <input required={true} type='text' placeholder='Username' value={register.username} onChange={(e) => setRegister({ ...register, username: e.target.value })}/>
                  </div>

                  <div className='single-input-item mb-2'>
                    <input required={true} type='email' placeholder='Email' value={register.email} onChange={(e) => setRegister({ ...register, email: e.target.value })}/>
                  </div>

                  <div className='single-input-item mb-2'>
                    <input required={true} type='password' placeholder='Password' value={register.password} onChange={(e) => setRegister({ ...register, password: e.target.value })}/>
                  </div>
                  <div className='single-input-item mb-2'>
                    <input required={true} type='password' placeholder='Confirm Password' value={register.confirmPassword} onChange={(e) => setRegister({ ...register, confirmPassword: e.target.value })}/>
                  </div>
                  <div className='single-input-item mb-2'>
                    <input required={true} type='tel' placeholder='Phone' value={register.phone} onChange={(e) => setRegister({ ...register, phone: e.target.value })}/>
                  </div>
                  <div className='single-input-item mb-2'>
                    <input required={true} type='text' placeholder='Address' value={register.address} onChange={(e) => setRegister({ ...register, address: e.target.value })}/>
                  </div>

                  <div className='single-input-item'>
                    <div className='login-reg-form-meta mb-n3'>
                      <button className='btn btn btn-gray-deep btn-hover-primary mb-3' onClick={() => handleRegister()}>Create</button>

                      <Link to='/login' className='forget-pwd mb-3'>
                        Already have an account?
                      </Link>
                    </div>
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

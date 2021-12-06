import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Layout/Breadcrumb';

interface Props {}

export default function ForgetPassword({}: Props): ReactElement {
  return (
    <>
      <Breadcrumb title='Login'>
        
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>Forgot Password</li>
      </Breadcrumb>
      <div className='section section-margin'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7 col-md-8 m-auto'>
              <div className='login-wrapper'>
                <div className='section-content text-center mb-6'>
                  <h2 className='title mb-2'>Forgot Password</h2>
                </div>

                <form action='#' method='post'>
                  <div className='single-input-item mb-2'>
                    <input type='email' placeholder='Enter your email' />
                  </div>

                  <div className='single-input-item mb-3'>
                    <div className='login-reg-form-meta mb-n3'>
                      <button className='btn btn btn-gray-deep btn-hover-primary mb-3'>Send</button>
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

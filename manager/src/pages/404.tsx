import React from 'react'

export default function NotFound() {

    return (
        <div className='container-fluid page-body-wrapper full-page-wrapper'>
            <div className='content-wrapper d-flex align-items-stretch auth auth-img-bg'>
                <div className='row flex-grow'>
                    <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                        <div className='auth-form-transparent text-left p-3'>
                            <img
                                src='https://www.rooseveltlibrary.org/wp-content/uploads/2016/10/PageNotFound.png'
                                alt=''
                            />
                        </div>
                    </div>
                    <div className='col-lg-6 login-half-bg d-flex flex-row'></div>
                </div>
            </div>
        </div>
    );
}

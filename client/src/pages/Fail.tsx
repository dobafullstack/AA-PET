import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface Props {}

export default function Fail({}: Props): ReactElement {
    return (
        <div
            className='d-flex justify-content-center align-items-center flex-column w-100'
            style={{ height: 'calc(100vh - 120px - 332px)' }}
        >
            <i className='fas fa-times-circle mb-5' style={{ fontSize: 200, color: '#a82e2e' }}></i>
            <h1 style={{ color: 'gray' }} className='mb-5'>
                Cảm ơn đã mua hàng
            </h1>
            <Link
                to="/cart"
                className='btn'
                style={{
                    borderWidth: 1,
                    backgroundColor: '#a82e2e',
                    color: 'white',
                }}
            >
                <i className='fas fa-spinner'></i>&nbsp;&nbsp;&nbsp;Thử lại
            </Link>
        </div>
    );
}

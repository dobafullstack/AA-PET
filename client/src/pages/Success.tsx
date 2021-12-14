import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom';

interface Props {
    
}

export default function Success({}: Props): ReactElement {
    return (
        <div
            className='d-flex justify-content-center align-items-center flex-column w-100'
            style={{ height: 'calc(100vh - 120px - 332px)' }}
        >
            <i className='fas fa-check-circle mb-5' style={{ fontSize: 200, color: '#f6ab49' }}></i>
            <h1 style={{ color: 'gray' }} className='mb-5'>
                Cảm ơn đã mua hàng
            </h1>
            <Link
                to='/'
                className='btn'
                style={{
                    borderWidth: 1,
                    backgroundColor: '#f6ab49',
                    color: 'white',
                }}
            >
                <i className='fal fa-chevron-left'></i>&nbsp;&nbsp;&nbsp;Tiếp tục mua hàng
            </Link>
        </div>
    );
}

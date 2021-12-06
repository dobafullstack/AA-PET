import React, { ReactElement } from 'react'

interface Props {
    
}

export default function HeaderCartIem({}: Props): ReactElement {
    return (
        <div className='cart-product-inner mb-4 pb-4 border-bottom'>
            <div className='single-cart-product'>
                <div className='cart-product-thumb'>
                    <a href='single-product.html'>
                        <img
                            src='assets/images/header/header-cart/1.png'
                            alt='Cart Product'
                        />
                    </a>
                </div>
                <div className='cart-product-content'>
                    <h3 className='title'>
                        <a href='single-product.html'>Basic Dog Trainning</a>
                    </h3>
                    <div className='product-quty-price'>
                        <span className='cart-quantity'>
                            Qty: <strong className='text-primary'> 1 </strong>
                        </span>
                        <span className='price'>
                            <span className='new'>$70.00</span>
                        </span>
                    </div>
                </div>
            </div>

            <div className='cart-product-remove'>
                <a href='#/'>
                    <i className='icon-close'></i>
                </a>
            </div>
        </div>
    );
}

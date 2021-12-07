import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import VND from '../../configs/VND';
import CartModel from '../../models/CartModel';
import HeaderCartIem from './HeaderCartIem';

interface Props {
    cart: CartModel;
}

export default function HeaderCart({ cart }: Props): ReactElement {
    return (
        <div className='header-cart-content'>
            {cart.products.length > 0 ? (
                <>
                    <div className='cart-product-wrapper'>
                        {cart.products.map((product) => (
                            <HeaderCartIem product={product} />
                        ))}
                    </div>

                    <div className='cart-product-total mb-4 pb-4 border-bottom mt-4'>
                        <span className='value'>Total</span>
                        <span className='price'>{VND(cart.total)}</span>
                    </div>

                    <div className='cart-product-btn mt-4'>
                        <Link to='/cart' className='btn btn-outline-light btn-hover-primary w-100'>
                            View cart
                        </Link>
                        <Link to='/checkout' className='btn btn-outline-light btn-hover-primary w-100 mt-4'>
                            Checkout
                        </Link>
                    </div>
                </>
            ) : (
                <p className="text-center">Cart is null</p>
            )}
        </div>
    );
}

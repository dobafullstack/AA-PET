import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import HeaderCartIem from "./HeaderCartIem";

interface Props {}

export default function HeaderCart({}: Props): ReactElement {
    return (
        <div className='header-cart-content'>
            <div className='cart-product-wrapper'>
                <HeaderCartIem />
                <HeaderCartIem />
            </div>

            <div className='cart-product-total mb-4 pb-4 border-bottom'>
                <span className='value'>Total</span>
                <span className='price'>200$</span>
            </div>

            <div className='cart-product-btn mt-4'>
                <Link
                    to='/cart'
                    className='btn btn-outline-light btn-hover-primary w-100'>
                    View cart
                </Link>
                <Link
                    to='/checkout'
                    className='btn btn-outline-light btn-hover-primary w-100 mt-4'>
                    Checkout
                </Link>
            </div>
        </div>
    );
}

import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

interface Props {
    newProduct?: boolean;
    saleProduct?: boolean;
}

export default function ProductItem({
    newProduct,
    saleProduct,
}: Props): ReactElement {
    return (
        
            <div className='product'>
                <div className='thumb'>
                    <Link to="/product">
                        <img
                            className='fit-image'
                            src='../../assets/images/products/medium-product/5.png'
                            alt='Product'
                        />
                    </Link>
                    {saleProduct && (
                        <span className='badges'>
                            <span className='sale'>-18%</span>
                        </span>
                    )}

                    {newProduct && (
                        <span className='badges'>
                            <span className='new'>New</span>
                        </span>
                    )}

                    <div className='action-wrapper'>
                        <a
                            href='#/'
                            className='action quickview'
                            data-bs-toggle='modal'
                            data-bs-target='#quick-view'>
                            <i className='ti-plus'></i>
                        </a>
                        <a
                            href='wishlist.html'
                            className='action wishlist'
                            title='Wishlist'>
                            <i className='ti-heart'></i>
                        </a>
                        <a
                            href='cart.html'
                            className='action cart'
                            title='Cart'>
                            <i className='ti-shopping-cart'></i>
                        </a>
                    </div>

                    <div className='countdown-area'>
                        <div
                            className='countdown-wrapper'
                            data-countdown='2028/12/28'></div>
                    </div>
                </div>

                <div className='content'>
                    <h5 className='title'>
                        <Link to="/product">Pet Leaving House</Link>
                    </h5>
                    <span className='rating'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star-half-o'></i>
                        <i className='fa fa-star-o'></i>
                    </span>
                    <span className='price'>
                        <span className='new'>$47.50</span>
                        <span className='old'>$50.00</span>
                    </span>
                </div>
            </div>
        
    );
}

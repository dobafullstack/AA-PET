import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import VND from '../../configs/VND';
import paymentImg from '../../assets/images/payment/payment_large.png';
import { addToCart } from '../../app/reducers/cart.reducer';

export default function Modal() {
    const product = useAppSelector((state) => state.product.product);
    const dispatch = useAppDispatch();
    const [count, setCount] = useState(1);

    return (
        <div className='modalquickview modal fade' id='quick-view' tabIndex={-1} aria-labelledby='quick-view' role='dialog' aria-hidden='true'>
            <div className='modal-dialog modal-dialog-centered'>
                <div className='modal-content'>
                    <button className='btn close' data-bs-dismiss='modal'>
                        ×
                    </button>
                    <div className='row'>
                        <div className='col-md-6 col-12'>
                            <div className='modal-product-carousel'>
                                <div className='swiper-container'>
                                    <div className='swiper-wrapper'>
                                        {product.images.map((image) => (
                                            <a className='swiper-slide' href='#'>
                                                <img className='w-100' src={image} alt='Product' width={470} height={470} />
                                            </a>
                                        ))}
                                    </div>

                                    <div className='swiper-product-button-next swiper-button-next'>
                                        <i className='ti-arrow-right'></i>
                                    </div>
                                    <div className='swiper-product-button-prev swiper-button-prev'>
                                        <i className='ti-arrow-left'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-12 overflow-hidden position-relative'>
                            <div className='product-summery position-relative'>
                                <div className='product-head mb-3'>
                                    <h2 className='product-title'>{product.name}</h2>
                                </div>

                                <span className='rating justify-content-start mb-2'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star-half-o'></i>
                                    <i className='fa fa-star-o'></i>
                                </span>

                                <div className='price-box mb-2'>
                                    <span className='regular-price'>{VND(product.price)}</span>
                                    <span className='old-price'>
                                        <del>{VND(product.price)}</del>
                                    </span>
                                </div>

                                {/* <div className='sku mb-3'>
                                    <span>SKU: 12345</span>
                                </div> */}

                                <div className='product-inventroy mb-3'>
                                    <span className='inventroy-title'>
                                        {' '}
                                        <strong>Availability:</strong>
                                    </span>
                                    <span className='inventory-varient'> {product.quantity} Left in Stock</span>
                                </div>

                                <p className='desc-content mb-5'>{product.description}</p>

                                <div className='quantity d-flex align-items-center justify-content-start mb-5'>
                                    <span className='me-2'>
                                        <strong>Qty: </strong>
                                    </span>
                                    <div className='cart-plus-minus'>
                                        <input className='cart-plus-minus-box' value={count} type='text' />
                                        <div
                                            className='dec qtybutton'
                                            onClick={() => {
                                                if (count === 1) return;

                                                setCount(count - 1);
                                            }}
                                        >
                                            -
                                        </div>
                                        <div className='inc qtybutton' onClick={() => setCount(count + 1)}>
                                            +
                                        </div>
                                    </div>
                                </div>

                                <div className='cart-btn action-btn mb-6'>
                                    <div className='action-cart-btn-wrapper d-flex justify-content-start'>
                                        <div className='add-to_cart'>
                                            <a
                                                className='btn btn-primary btn-hover-dark rounded-0'
                                                href='javascript:void;'
                                                onClick={() => {
                                                    dispatch(addToCart({ product, count }));
                                                    setCount(1);
                                                }}
                                            >
                                                Add to cart
                                            </a>
                                        </div>
                                        <a href='wishlist.html' title='Wishlist' className='action'>
                                            <i className='ti-heart'></i>
                                        </a>
                                    </div>
                                </div>

                                <div className='social-share'>
                                    <div className='widget-social justify-content-center mb-6'>
                                        <a title='Twitter' href='#/'>
                                            <i className='icon-social-twitter'></i>
                                        </a>
                                        <a title='Instagram' href='#/'>
                                            <i className='icon-social-instagram'></i>
                                        </a>
                                        <a title='Linkedin' href='#/'>
                                            <i className='icon-social-linkedin'></i>
                                        </a>
                                        <a title='Skype' href='#/'>
                                            <i className='icon-social-skype'></i>
                                        </a>
                                        <a title='Dribble' href='#/'>
                                            <i className='icon-social-dribbble'></i>
                                        </a>
                                    </div>
                                </div>

                                <div className='payment-option mt-4 d-flex justify-content-start'>
                                    <span>
                                        <strong>Payment: </strong>
                                    </span>
                                    <a href='#'>
                                        <img className='fit-image ms-1' src={paymentImg} alt='Payment Option Image' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

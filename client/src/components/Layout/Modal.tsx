import React from 'react'

export default function Modal() {
    return (
        <div
            className='modalquickview modal fade'
            id='quick-view'
            tabIndex={-1}
            aria-labelledby='quick-view'
            role='dialog'
            aria-hidden='true'>
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
                                        <a className='swiper-slide' href='#'>
                                            <img
                                                className='w-100'
                                                src='assets/images/products/large-product/1.png'
                                                alt='Product'
                                            />
                                        </a>
                                        <a className='swiper-slide' href='#'>
                                            <img
                                                className='w-100'
                                                src='assets/images/products/large-product/2.png'
                                                alt='Product'
                                            />
                                        </a>
                                        <a className='swiper-slide' href='#'>
                                            <img
                                                className='w-100'
                                                src='assets/images/products/large-product/3.png'
                                                alt='Product'
                                            />
                                        </a>
                                        <a className='swiper-slide' href='#'>
                                            <img
                                                className='w-100'
                                                src='assets/images/products/large-product/4.png'
                                                alt='Product'
                                            />
                                        </a>
                                        <a className='swiper-slide' href='#'>
                                            <img
                                                className='w-100'
                                                src='assets/images/products/large-product/5.png'
                                                alt='Product'
                                            />
                                        </a>
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
                                    <h2 className='product-title'>
                                        Single Product Slider
                                    </h2>
                                </div>

                                <span className='rating justify-content-start mb-2'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star-half-o'></i>
                                    <i className='fa fa-star-o'></i>
                                </span>

                                <div className='price-box mb-2'>
                                    <span className='regular-price'>
                                        $70.00
                                    </span>
                                    <span className='old-price'>
                                        <del>$85.00</del>
                                    </span>
                                </div>

                                <div className='sku mb-3'>
                                    <span>SKU: 12345</span>
                                </div>

                                <div className='product-inventroy mb-3'>
                                    <span className='inventroy-title'>
                                        {" "}
                                        <strong>Availability:</strong>
                                    </span>
                                    <span className='inventory-varient'>
                                        12 Left in Stock
                                    </span>
                                </div>

                                <p className='desc-content mb-5'>
                                    There are many variations of passages of
                                    Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by
                                    injected humour, or randomised words which
                                    don't look even slightly believable.
                                </p>

                                <div className='quantity d-flex align-items-center justify-content-start mb-5'>
                                    <span className='me-2'>
                                        <strong>Qty: </strong>
                                    </span>
                                    <div className='cart-plus-minus'>
                                        <input
                                            className='cart-plus-minus-box'
                                            value='1'
                                            type='text'
                                        />
                                        <div className='dec qtybutton'></div>
                                        <div className='inc qtybutton'></div>
                                    </div>
                                </div>

                                <div className='cart-btn action-btn mb-6'>
                                    <div className='action-cart-btn-wrapper d-flex justify-content-start'>
                                        <div className='add-to_cart'>
                                            <a
                                                className='btn btn-primary btn-hover-dark rounded-0'
                                                href='cart.html'>
                                                Add to cart
                                            </a>
                                        </div>
                                        <a
                                            href='wishlist.html'
                                            title='Wishlist'
                                            className='action'>
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
                                        <img
                                            className='fit-image ms-1'
                                            src='assets/images/payment/payment_large.png'
                                            alt='Payment Option Image'
                                        />
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

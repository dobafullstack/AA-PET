import React, { ReactElement } from 'react'

interface Props {
    
}

export default function CategoryItem({}: Props): ReactElement {
    return (
        <div className='col-lg-4 col-md-4 col-sm-6 product'>
            <div className='product-inner'>
                <div className='thumb'>
                    <a href='single-product.html' className='image'>
                        <img
                            className='fit-image'
                            src='assets/images/products/medium-product/1.png'
                            alt='Product'
                        />
                    </a>
                    <span className='badges'>
                        <span className='sale'>-18%</span>
                    </span>
                    <div className='action-wrapper'>
                        <a
                            href='#/'
                            className='action quickview'
                            data-bs-toggle='modal'
                            data-bs-target='#quick-view'
                            title='Quickview'>
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
                </div>
                <div className='content'>
                    <h5 className='title'>
                        <a href='single-product.html'>An Animal Album</a>
                    </h5>
                    <span className='rating'>
                        <i className='fa fa-star-o'></i>
                        <i className='fa fa-star-o'></i>
                        <i className='fa fa-star-o'></i>
                        <i className='fa fa-star-o'></i>
                        <i className='fa fa-star-o'></i>
                    </span>
                    <span className='price'>
                        <span className='new'>$80.50</span>
                        <span className='old'>$85.80</span>
                    </span>
                    <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters.
                    </p>

                    <div className='cart-btn action-btn'>
                        <div className='action-cart-btn-wrapper d-flex'>
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
                            <a
                                href='#/'
                                className='action quickview'
                                data-bs-toggle='modal'
                                data-bs-target='#quick-view'
                                title='Quickview'>
                                <i className='ti-plus'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

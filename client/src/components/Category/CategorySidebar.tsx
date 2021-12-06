import React, { ReactElement } from "react";

interface Props {}

export default function CategorySidebar({}: Props): ReactElement {
    return (
        <div className='col-lg-3 col-12'>
            <aside className='sidebar_widget mt-10 mt-lg-0'>
                <div className='widget_inner'>
                    <div className='widget-list mb-10'>
                        <h3 className='widget-title mb-6'>Search</h3>
                        <div className='search-box'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Search Our Store'
                                aria-label='Search Our Store'
                            />
                            <button className='search-icon' type='button'>
                                <i className='icon-magnifier'></i>
                            </button>
                        </div>
                    </div>
                    <div className='widget-list mb-10'>
                        <h3 className='widget-title mb-6'>Categories</h3>
                        <div className='sidebar-body'>
                            <ul className='sidebar-list'>
                                <li>
                                    <a href='#/'>All Product</a>
                                </li>
                                <li>
                                    <a href='#/'>Best Seller (5)</a>
                                </li>
                                <li>
                                    <a href='#/'>Featured (4)</a>
                                </li>
                                <li>
                                    <a href='#/'>New Products (6)</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='widget-list mb-10'>
                        <h3 className='widget-title mb-6'>Color</h3>
                        <div className='sidebar-body'>
                            <ul className='checkbox-container categories-list'>
                                <li>
                                    <div className='custom-control custom-checkbox'>
                                        <input
                                            type='checkbox'
                                            className='custom-control-input'
                                            id='customCheck12'
                                        />
                                        <label
                                            className='custom-control-label'
                                            htmlFor='customCheck12'>
                                            black (20)
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className='custom-control custom-checkbox'>
                                        <input
                                            type='checkbox'
                                            className='custom-control-input'
                                            id='customCheck13'
                                        />
                                        <label
                                            className='custom-control-label'
                                            htmlFor='customCheck13'>
                                            red (6)
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className='custom-control custom-checkbox'>
                                        <input
                                            type='checkbox'
                                            className='custom-control-input'
                                            id='customCheck14'
                                        />
                                        <label
                                            className='custom-control-label'
                                            htmlFor='customCheck14'>
                                            blue (8)
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className='custom-control custom-checkbox'>
                                        <input
                                            type='checkbox'
                                            className='custom-control-input'
                                            id='customCheck11'
                                        />
                                        <label
                                            className='custom-control-label'
                                            htmlFor='customCheck11'>
                                            green (5)
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className='custom-control custom-checkbox'>
                                        <input
                                            type='checkbox'
                                            className='custom-control-input'
                                            id='customCheck15'
                                        />
                                        <label
                                            className='custom-control-label'
                                            htmlFor='customCheck15'>
                                            pink (4)
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='widget-list mb-10'>
                        <h3 className='widget-title mb-6'>Tags</h3>
                        <div className='sidebar-body'>
                            <ul className='tags mb-n2'>
                                <li>
                                    <a href='#/'>Pet Food</a>
                                </li>
                                <li>
                                    <a href='#/'>Animals</a>
                                </li>
                                <li>
                                    <a href='#/'>Domestic</a>
                                </li>
                                <li>
                                    <a href='#/'>Wild</a>
                                </li>
                                <li>
                                    <a href='#/'>Dogs</a>
                                </li>
                                <li>
                                    <a href='#/'>Cats</a>
                                </li>
                                <li>
                                    <a href='#/'>Hubby</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='widget-list'>
                        <h3 className='widget-title mb-6'>Recent Products</h3>
                        <div className='sidebar-body product-list-wrapper mb-n6'>
                            <div className='single-product-list mb-6'>
                                <div className='product'>
                                    <div className='thumb'>
                                        <a
                                            href='single-product.html'
                                            className='image'>
                                            <img
                                                className='fit-image first-image'
                                                src='assets/images/products/small-product/1.png'
                                                alt='Product Image'
                                            />
                                        </a>
                                    </div>
                                </div>

                                <div className='product-list-content'>
                                    <h6 className='product-name'>
                                        <a href='single-product.html'>
                                            Pet Leaving House
                                        </a>
                                    </h6>
                                    <span className='price'>
                                        <span className='new'>$12.50</span>
                                        <span className='old'>$15.85</span>
                                    </span>
                                </div>
                            </div>

                            <div className='single-product-list mb-6'>
                                <div className='product'>
                                    <div className='thumb'>
                                        <a
                                            href='single-product.html'
                                            className='image'>
                                            <img
                                                className='fit-image first-image'
                                                src='assets/images/products/small-product/2.png'
                                                alt='Product Image'
                                            />
                                        </a>
                                    </div>
                                </div>

                                <div className='product-list-content'>
                                    <h6 className='product-name'>
                                        <a href='single-product.html'>
                                            This is the testing
                                        </a>
                                    </h6>
                                    <span className='price'>
                                        <span className='new'>$10.50</span>
                                        <span className='old'>$12.85</span>
                                    </span>
                                </div>
                            </div>

                            <div className='single-product-list mb-6'>
                                <div className='product'>
                                    <div className='thumb'>
                                        <a
                                            href='single-product.html'
                                            className='image'>
                                            <img
                                                className='fit-image first-image'
                                                src='assets/images/products/small-product/3.png'
                                                alt='Product Image'
                                            />
                                        </a>
                                    </div>
                                </div>

                                <div className='product-list-content'>
                                    <h6 className='product-name'>
                                        <a href='single-product.html'>
                                            Animals for life
                                        </a>
                                    </h6>
                                    <span className='price'>
                                        <span className='new'>$22.50</span>
                                        <span className='old'>$25.85</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}

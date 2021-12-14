import moment from 'moment';
import React, { ReactElement, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../assets/css/payment.css';
import { ItemWrapper, Logged, Payment, UnLogged } from '../components/Checkout';
import Breadcrumb from '../components/Layout/Breadcrumb';
import { AuthContext } from '../context/authContext';
import { CheckoutContext } from '../context/checkoutContext';

interface Props {}

export default function Checkout({}: Props): ReactElement {
    const { isLogin } = useContext(AuthContext);
    const { name, email, phone, address, selectedDistrict, selectedCity, cart } =
        useContext(CheckoutContext);

    if (cart.products.length === 0) return <Navigate to='/' />;

    return (
        <>
            <Breadcrumb title='Checkout'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>Cart</li>
                <li>Checkout</li>
            </Breadcrumb>

            <div className='section section-margin'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='coupon-accordion'>
                                <h3 className='title'>
                                    Have a coupon?{' '}
                                    <span id='showcoupon'>Click here to enter your code</span>
                                </h3>

                                <div id='checkout_coupon' className='coupon-checkout-content'>
                                    <div className='coupon-info'>
                                        <form action='#'>
                                            <p className='checkout-coupon d-flex'>
                                                <input placeholder='Coupon code' type='text' />
                                                <input
                                                    className='btn btn-primary btn-hover-dark rounded-0'
                                                    value='Apply Coupon'
                                                    type='submit'
                                                />
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-n4'>
                        {!isLogin ? <Logged /> : <UnLogged />}
                        <div className='col-lg-6 col-12 mb-4'>
                            <div className='your-order-area border'>
                                <h3 className='title'>Your order</h3>

                                <ItemWrapper />

                                <div className='payment-accordion-order-button'>
                                    <div className='payment-accordion'>
                                        <div className='single-payment'>
                                            <h5 className='panel-title mb-3'>
                                                <a
                                                    className='collapse-off'
                                                    data-bs-toggle='collapse'
                                                    href='#collapseExample'
                                                    aria-expanded='false'
                                                    aria-controls='collapseExample'
                                                >
                                                    Thông tin giao hàng.
                                                </a>
                                            </h5>
                                            <div className='collapse show' id='collapseExample'>
                                                <div className='card card-body rounded-0'>
                                                    <ul>
                                                        <li>
                                                            Họ tên: <strong>{name}</strong>
                                                        </li>
                                                        <li>
                                                            Email: <strong>{email}</strong>
                                                        </li>
                                                        <li>
                                                            Số điện thoại: <strong>{phone}</strong>
                                                        </li>
                                                        <li>
                                                            Địa chỉ:{' '}
                                                            <strong>{`${address} ${selectedDistrict} ${selectedCity}`}</strong>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='single-payment'>
                                            <h5 className='panel-title mb-3'>
                                                <a
                                                    className='collapse-off'
                                                    data-bs-toggle='collapse'
                                                    href='#collapseExample-2'
                                                    aria-expanded='false'
                                                    aria-controls='collapseExample-2'
                                                >
                                                    Thời gian giao hàng dự kiến
                                                </a>
                                            </h5>
                                            <div className='collapse' id='collapseExample-2'>
                                                <div
                                                    className='card card-body rounded-0'
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        gap: '10px',
                                                    }}
                                                >
                                                    <i className='fal fa-calendar-alt'></i>
                                                    <span>
                                                        {moment().add(8, 'days').calendar()}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <Payment />
                                    </div>
                                    <div className='order-button-payment'>
                                        <button className='btn btn-primary btn-hover-secondary rounded-0 w-100'>
                                            Place Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

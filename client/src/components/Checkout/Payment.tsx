import React, { ReactElement, useContext } from 'react';
import { Paypal } from '.';
import { CheckoutContext } from '../../context/checkoutContext';

interface Props {}


export default function Payment({}: Props): ReactElement {
    const { payment, setPayment, isPaid } = useContext(CheckoutContext);

    

    return (
        <div className='single-payment'>
            <h5 className='panel-title mb-3'>
                <a
                    className='collapse-off'
                    data-bs-toggle='collapse'
                    href='#collapseExample-3'
                    aria-expanded='false'
                    aria-controls='collapseExample-3'
                >
                    Phương thức thanh toán
                </a>
            </h5>
            <div className='collapse' id='collapseExample-3'>
                <div className='card card-body rounded-0'>
                    {isPaid ? (
                        <div className='paid'>
                            <i className='fas fa-check-circle'></i>
                            <p>Đã thanh toán</p>
                        </div>
                    ) : (
                        <>
                            <div className='payment-items mb-5'>
                                <div
                                    className={`payment-item ${payment === 'cash' && 'active'}`}
                                    onClick={() => setPayment('cash')}
                                >
                                    <img
                                        src={
                                            require('../../assets/images/payment/cash.png').default
                                        }
                                        className='img-fluid'
                                        alt=''
                                    />
                                    <div className='selected'>
                                        <i className='fas fa-check-circle'></i>
                                    </div>
                                </div>
                                <div
                                    className={`payment-item ${payment === 'momo' && 'active'}`}
                                    onClick={() => setPayment('momo')}
                                >
                                    <img
                                        src={
                                            require('../../assets/images/payment/momo.png').default
                                        }
                                        className='img-fluid'
                                        alt=''
                                    />
                                    <div className='selected'>
                                        <i className='fas fa-check-circle'></i>
                                    </div>
                                </div>
                                <div
                                    className={`payment-item ${payment === 'paypal' && 'active'}`}
                                    onClick={() => setPayment('paypal')}
                                >
                                    <img
                                        src={
                                            require('../../assets/images/payment/paypal.png')
                                                .default
                                        }
                                        className='img-fluid'
                                        alt=''
                                    />
                                    <div className='selected'>
                                        <i className='fas fa-check-circle'></i>
                                    </div>
                                </div>
                            </div>
                            {payment === 'paypal' && !isPaid && <Paypal />}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

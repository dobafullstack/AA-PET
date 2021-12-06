import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Layout/Breadcrumb";

interface Props {}

export default function Checkout({}: Props): ReactElement {
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
                                    Have a coupon?{" "}
                                    <span id='showcoupon'>
                                        Click here to enter your code
                                    </span>
                                </h3>

                                <div
                                    id='checkout_coupon'
                                    className='coupon-checkout-content'>
                                    <div className='coupon-info'>
                                        <form action='#'>
                                            <p className='checkout-coupon d-flex'>
                                                <input
                                                    placeholder='Coupon code'
                                                    type='text'
                                                />
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
                        <div className='col-lg-6 col-12 mb-4'>
                            <form action='#'>
                                <div className='checkbox-form'>
                                    <h3 className='title'>Billing Details</h3>

                                    <div className='row'>
                                        <div className='col-md-12 mb-6'>
                                            <div className='country-select'>
                                                <label>
                                                    Country{" "}
                                                    <span className='required'>
                                                        *
                                                    </span>
                                                </label>
                                                <select className='myniceselect nice-select wide rounded-0'>
                                                    <option data-display='Bangladesh'>
                                                        Bangladesh
                                                    </option>
                                                    <option value='uk'>
                                                        London
                                                    </option>
                                                    <option value='rou'>
                                                        Romania
                                                    </option>
                                                    <option value='fr'>
                                                        French
                                                    </option>
                                                    <option value='de'>
                                                        Germany
                                                    </option>
                                                    <option value='aus'>
                                                        Australia
                                                    </option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className='col-md-6'>
                                            <div className='checkout-form-list'>
                                                <label>
                                                    First Name{" "}
                                                    <span className='required'>
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                />
                                            </div>
                                        </div>

                                        <div className='col-md-6'>
                                            <div className='checkout-form-list'>
                                                <label>
                                                    Last Name{" "}
                                                    <span className='required'>
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                />
                                            </div>
                                        </div>

                                        <div className='col-md-12'>
                                            <div className='checkout-form-list'>
                                                <label>Company Name</label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                />
                                            </div>
                                        </div>

                                        <div className='col-md-12'>
                                            <div className='checkout-form-list'>
                                                <label>
                                                    Address{" "}
                                                    <span className='required'>
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    placeholder='Street address'
                                                    type='text'
                                                />
                                            </div>
                                        </div>

                                        <div className='col-md-12'>
                                            <div className='checkout-form-list'>
                                                <input
                                                    placeholder='Apartment, suite, unit etc. (optional)'
                                                    type='text'
                                                />
                                            </div>
                                        </div>

                                        <div className='col-md-12'>
                                            <div className='checkout-form-list'>
                                                <label>
                                                    Town / City{" "}
                                                    <span className='required'>
                                                        *
                                                    </span>
                                                </label>
                                                <input type='text' />
                                            </div>
                                        </div>

                                        <div className='col-md-6'>
                                            <div className='checkout-form-list'>
                                                <label>
                                                    State / County{" "}
                                                    <span className='required'>
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                />
                                            </div>
                                        </div>

                                        <div className='col-md-6'>
                                            <div className='checkout-form-list'>
                                                <label>
                                                    Postcode / Zip{" "}
                                                    <span className='required'>
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                />
                                            </div>
                                        </div>

                                        <div className='col-md-6'>
                                            <div className='checkout-form-list'>
                                                <label>
                                                    Email Address{" "}
                                                    <span className='required'>
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    placeholder=''
                                                    type='email'
                                                />
                                            </div>
                                        </div>

                                        <div className='col-md-6'>
                                            <div className='checkout-form-list'>
                                                <label>
                                                    Phone{" "}
                                                    <span className='required'>
                                                        *
                                                    </span>
                                                </label>
                                                <input type='text' />
                                            </div>
                                        </div>

                                        <div className='col-md-12'>
                                            <div className='checkout-form-list create-acc'>
                                                <input
                                                    id='cbox'
                                                    type='checkbox'
                                                />
                                                <label
                                                    htmlFor='cbox'
                                                    className='checkbox-label'>
                                                    Create an account?
                                                </label>
                                            </div>
                                            <div
                                                id='cbox-info'
                                                className='checkout-form-list create-account'>
                                                <p className='mb-2'>
                                                    Create an account by
                                                    entering the information
                                                    below. If you are a
                                                    returning customer please
                                                    login at the top of the
                                                    page.
                                                </p>
                                                <label>
                                                    Account password{" "}
                                                    <span className='required'>
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    placeholder='Password'
                                                    type='password'
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='different-address'>
                                        <div className='ship-different-title'>
                                            <div>
                                                <input
                                                    id='ship-box'
                                                    type='checkbox'
                                                />
                                                <label
                                                    htmlFor='ship-box'
                                                    className='checkbox-label'>
                                                    Ship to a different address?
                                                </label>
                                            </div>
                                        </div>

                                        <div
                                            id='ship-box-info'
                                            className='row mt-2'>
                                            <div className='col-md-12'>
                                                <div className='myniceselect country-select clearfix'>
                                                    <label>
                                                        Country{" "}
                                                        <span className='required'>
                                                            *
                                                        </span>
                                                    </label>
                                                    <select className='myniceselect nice-select wide rounded-0'>
                                                        <option data-display='Bangladesh'>
                                                            Bangladesh
                                                        </option>
                                                        <option value='uk'>
                                                            London
                                                        </option>
                                                        <option value='rou'>
                                                            Romania
                                                        </option>
                                                        <option value='fr'>
                                                            French
                                                        </option>
                                                        <option value='de'>
                                                            Germany
                                                        </option>
                                                        <option value='aus'>
                                                            Australia
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className='col-md-12'>
                                                <div className='checkout-form-list'>
                                                    <label>
                                                        First Name{" "}
                                                        <span className='required'>
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        placeholder=''
                                                        type='text'
                                                    />
                                                </div>
                                            </div>

                                            <div className='col-md-12'>
                                                <div className='checkout-form-list'>
                                                    <label>
                                                        Last Name{" "}
                                                        <span className='required'>
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        placeholder=''
                                                        type='text'
                                                    />
                                                </div>
                                            </div>

                                            <div className='col-md-12'>
                                                <div className='checkout-form-list'>
                                                    <label>Company Name</label>
                                                    <input
                                                        placeholder=''
                                                        type='text'
                                                    />
                                                </div>
                                            </div>

                                            <div className='col-md-12'>
                                                <div className='checkout-form-list'>
                                                    <label>
                                                        Address{" "}
                                                        <span className='required'>
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        placeholder='Street address'
                                                        type='text'
                                                    />
                                                </div>
                                            </div>

                                            <div className='col-md-12'>
                                                <div className='checkout-form-list'>
                                                    <input
                                                        placeholder='Apartment, suite, unit etc. (optional)'
                                                        type='text'
                                                    />
                                                </div>
                                            </div>

                                            <div className='col-md-12'>
                                                <div className='checkout-form-list'>
                                                    <label>
                                                        Town / City{" "}
                                                        <span className='required'>
                                                            *
                                                        </span>
                                                    </label>
                                                    <input type='text' />
                                                </div>
                                            </div>

                                            <div className='col-md-12'>
                                                <div className='checkout-form-list'>
                                                    <label>
                                                        State / County{" "}
                                                        <span className='required'>
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        placeholder=''
                                                        type='text'
                                                    />
                                                </div>
                                            </div>

                                            <div className='col-md-12'>
                                                <div className='checkout-form-list'>
                                                    <label>
                                                        Postcode / Zip{" "}
                                                        <span className='required'>
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        placeholder=''
                                                        type='text'
                                                    />
                                                </div>
                                            </div>

                                            <div className='col-md-12'>
                                                <div className='checkout-form-list'>
                                                    <label>
                                                        Email Address{" "}
                                                        <span className='required'>
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        placeholder=''
                                                        type='email'
                                                    />
                                                </div>
                                            </div>

                                            <div className='col-md-12'>
                                                <div className='checkout-form-list'>
                                                    <label>
                                                        Phone{" "}
                                                        <span className='required'>
                                                            *
                                                        </span>
                                                    </label>
                                                    <input type='text' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='order-notes mt-3 mb-n2'>
                                            <div className='checkout-form-list checkout-form-list-2'>
                                                <label>Order Notes</label>
                                                <textarea
                                                    id='checkout-mess'
                                                    cols={30}
                                                    rows={10}
                                                    placeholder='Notes about your order, e.g. special notes for delivery.'></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className='col-lg-6 col-12 mb-4'>
                            <div className='your-order-area border'>
                                <h3 className='title'>Your order</h3>

                                <div className='your-order-table table-responsive'>
                                    <table className='table'>
                                        <thead>
                                            <tr className='cart-product-head'>
                                                <th className='cart-product-name text-start'>
                                                    Product
                                                </th>
                                                <th className='cart-product-total text-end'>
                                                    Total
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr className='cart_item'>
                                                <td className='cart-product-name text-start ps-0'>
                                                    {" "}
                                                    Some Winter Collections
                                                    <strong className='product-quantity'>
                                                        {" "}
                                                        × 2
                                                    </strong>
                                                </td>
                                                <td className='cart-product-total text-end pe-0'>
                                                    <span className='amount'>
                                                        £145.00
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr className='cart_item'>
                                                <td className='cart-product-name text-start ps-0'>
                                                    {" "}
                                                    Small Scale Style
                                                    <strong className='product-quantity'>
                                                        {" "}
                                                        × 4
                                                    </strong>
                                                </td>
                                                <td className='cart-product-total text-end pe-0'>
                                                    <span className='amount'>
                                                        £204.00
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>

                                        <tfoot>
                                            <tr className='cart-subtotal'>
                                                <th className='text-start ps-0'>
                                                    Cart Subtotal
                                                </th>
                                                <td className='text-end pe-0'>
                                                    <span className='amount'>
                                                        £349.00
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr className='order-total'>
                                                <th className='text-start ps-0'>
                                                    Order Total
                                                </th>
                                                <td className='text-end pe-0'>
                                                    <strong>
                                                        <span className='amount'>
                                                            £349.00
                                                        </span>
                                                    </strong>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>

                                <div className='payment-accordion-order-button'>
                                    <div className='payment-accordion'>
                                        <div className='single-payment'>
                                            <h5 className='panel-title mb-3'>
                                                <a
                                                    className='collapse-off'
                                                    data-bs-toggle='collapse'
                                                    href='#collapseExample'
                                                    aria-expanded='false'
                                                    aria-controls='collapseExample'>
                                                    Direct Bank Transfer.
                                                </a>
                                            </h5>
                                            <div
                                                className='collapse show'
                                                id='collapseExample'>
                                                <div className='card card-body rounded-0'>
                                                    <p>
                                                        Make your payment
                                                        directly into our bank
                                                        account. Please use your
                                                        Order ID as the payment
                                                        reference. Your order
                                                        won’t be shipped until
                                                        the funds have cleared
                                                        in our account.
                                                    </p>
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
                                                    aria-controls='collapseExample-2'>
                                                    Cheque Payment.
                                                </a>
                                            </h5>
                                            <div
                                                className='collapse'
                                                id='collapseExample-2'>
                                                <div className='card card-body rounded-0'>
                                                    <p>
                                                        Make your payment
                                                        directly into our bank
                                                        account. Please use your
                                                        Order ID as the payment
                                                        reference. Your order
                                                        won’t be shipped until
                                                        the funds have cleared
                                                        in our account.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='single-payment'>
                                            <h5 className='panel-title mb-3'>
                                                <a
                                                    className='collapse-off'
                                                    data-bs-toggle='collapse'
                                                    href='#collapseExample-3'
                                                    aria-expanded='false'
                                                    aria-controls='collapseExample-3'>
                                                    Paypal.
                                                </a>
                                            </h5>
                                            <div
                                                className='collapse'
                                                id='collapseExample-3'>
                                                <div className='card card-body rounded-0'>
                                                    <p>
                                                        Make your payment
                                                        directly into our bank
                                                        account. Please use your
                                                        Order ID as the payment
                                                        reference. Your order
                                                        won’t be shipped until
                                                        the funds have cleared
                                                        in our account.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
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

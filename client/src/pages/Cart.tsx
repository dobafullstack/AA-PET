import React, { ReactElement, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/Cart/CartItem';
import Breadcrumb from '../components/Layout/Breadcrumb';
import $ from 'jquery';
import MainJQuery from '../utils/MainJQuery';

interface Props {}

export default function Cart({}: Props): ReactElement {

  return (
    <>
      <Breadcrumb title='Cart'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>Cart</li>
      </Breadcrumb>

      <div className='section section-margin'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='cart-table table-responsive'>
                <table className='table table-bordered'>
                  <thead>
                    <tr>
                      <th className='pro-thumbnail'>Image</th>
                      <th className='pro-title'>Product</th>
                      <th className='pro-price'>Price</th>
                      <th className='pro-quantity'>Quantity</th>
                      <th className='pro-subtotal'>Total</th>
                      <th className='pro-remove'>Remove</th>
                    </tr>
                  </thead>

                  <tbody>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                  </tbody>
                </table>
              </div>

              <div className='cart-button-section mb-n4'>
                <div className='cart-btn-lef-side mb-4'>
                  <a href='#' className='btn btn btn-gray-deep btn-hover-primary'>
                    Continue Shopping
                  </a>
                  <a href='#' className='btn btn btn-gray-deep btn-hover-primary'>
                    Update Shopping Cart
                  </a>
                </div>

                <div className='cart-btn-right-right mb-4'>
                  <a href='#' className='btn btn btn-gray-deep btn-hover-primary'>
                    Clear Shopping Cart
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='row mt-10'>
            <div className='col-lg-6 me-0 ms-auto'>
              <div className='cart-calculator-wrapper'>
                <div className='cart-calculate-items'>
                  <h3 className='title'>Cart Totals</h3>

                  <div className='table-responsive'>
                    <table className='table'>
                      <tr>
                        <td>Sub Total</td>
                        <td>$230</td>
                      </tr>
                      <tr>
                        <td>Shipping</td>
                        <td>$70</td>
                      </tr>
                      <tr className='total'>
                        <td>Total</td>
                        <td className='total-amount'>$300</td>
                      </tr>
                    </table>
                  </div>
                </div>

                <a href='checkout.html' className='btn btn btn-gray-deep btn-hover-primary mt-6'>
                  Proceed To Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

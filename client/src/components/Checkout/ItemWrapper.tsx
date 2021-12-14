import React, { ReactElement, useContext } from 'react'
import VND from '../../configs/VND';
import { CheckoutContext } from '../../context/checkoutContext';

interface Props {
    
}

export default function ItemWrapper({}: Props): ReactElement {
    const {cart} = useContext(CheckoutContext);

    return (
        <div className='your-order-table table-responsive'>
            <table className='table'>
                <thead>
                    <tr className='cart-product-head'>
                        <th className='cart-product-name text-start'>Product</th>
                        <th className='cart-product-total text-end'>Total</th>
                    </tr>
                </thead>

                <tbody>
                    {cart.products.map((item) => (
                        <tr className='cart_item'>
                            <td className='cart-product-name text-start ps-0'>
                                {item.product.name}
                                <strong className='product-quantity'> × {item.count}</strong>
                            </td>
                            <td className='cart-product-total text-end pe-0'>
                                <span className='amount'>
                                    {VND(item.product.price * item.count)}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>

                <tfoot>
                    <tr className='cart-subtotal'>
                        <th className='text-start ps-0'>Cart Subtotal</th>
                        <td className='text-end pe-0'>
                            <span className='amount'>{VND(cart.total)}</span>
                        </td>
                    </tr>
                    <tr className='order-total'>
                        <th className='text-start ps-0'>Order Total</th>
                        <td className='text-end pe-0'>
                            <strong>
                                <span className='amount'>{VND(cart.total)}</span>
                            </strong>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

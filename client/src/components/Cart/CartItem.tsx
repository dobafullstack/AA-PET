import React, { ReactElement } from 'react'

interface Props {
    
}

export default function CartItem({}: Props): ReactElement {
    return (
        <tr>
            <td className='pro-thumbnail'>
                <a href='#'>
                    <img
                        className='fit-image'
                        src='assets/images/products/small-product/6.png'
                        alt='Product'
                    />
                </a>
            </td>
            <td className='pro-title'>
                <a href='#'>Learn About Fish Farming</a>
            </td>
            <td className='pro-price'>
                <span>$95.00</span>
            </td>
            <td className='pro-quantity'>
                <div className='quantity'>
                    <div className='cart-plus-minus'>
                        <input
                            className='cart-plus-minus-box'
                            value='1'
                            type='text'
                        />
                        <div className='dec qtybutton'>-</div>
                        <div className='inc qtybutton'>+</div>
                    </div>
                </div>
            </td>
            <td className='pro-subtotal'>
                <span>$95.00</span>
            </td>
            <td className='pro-remove'>
                <a href='#'>
                    <i className='ti-trash'></i>
                </a>
            </td>
        </tr>
    );
}

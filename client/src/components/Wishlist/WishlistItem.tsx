import React, { ReactElement } from 'react'

interface Props {
    
}

export default function WishlistItem({}: Props): ReactElement {
    return (
      <tr>
        <td className='pro-thumbnail'>
          <a href='single-product.html'>
            <img className='fit-image' src='assets/images/products/small-product/6.png' alt='Product' />
          </a>
        </td>
        <td className='pro-title'>
          <a href='single-product.html'>Learn About Fish Farming</a>
        </td>
        <td className='pro-price'>
          <span>$95.00</span>
        </td>
        <td className='pro-stock'>
          <span>In Stock</span>
        </td>
        <td className='pro-cart'>
          <a href='cart.html' className='btn btn-primary btn-hover-dark'>
            Add to Cart
          </a>
        </td>
        <td className='pro-remove'>
          <a href='#/'>
            <i className='ti-trash'></i>
          </a>
        </td>
      </tr>
    );
}

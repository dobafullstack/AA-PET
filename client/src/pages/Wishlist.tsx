import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Layout/Breadcrumb'
import WishlistItem from '../components/Wishlist/WishlistItem';

interface Props {
    
}

export default function Wishlist({}: Props): ReactElement {
    return (
      <>
        <Breadcrumb title='Wishlist'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>Wishlist</li>
        </Breadcrumb>

        <div className='section section-margin'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='wishlist-table table-responsive'>
                  <table className='table table-bordered'>
                    <thead>
                      <tr>
                        <th className='pro-thumbnail'>Image</th>
                        <th className='pro-title'>Product</th>
                        <th className='pro-price'>Price</th>
                        <th className='pro-stock'>Stock Status</th>
                        <th className='pro-cart'>Add to Cart</th>
                        <th className='pro-remove'>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <WishlistItem />
                      <WishlistItem />
                      <WishlistItem />
                      <WishlistItem />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

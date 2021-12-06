import React, { ReactElement } from 'react';
import ProductItem from './ProductItem';

interface Props {}

export default function PopularProduct({}: Props): ReactElement {
  return (
    <div className='section section-margin'>
      <div className='container'>
        <div className='row'>
          <div className='col-12' data-aos='fade-up' data-aos-duration='1000'>
            <div className='section-title text-center'>
              <h2 className='title'>Popular Products</h2>
            </div>
          </div>
        </div>
        <div className='row mb-n8'>
          <div className='col-12 col-sm-6 col-lg-3 product-wrapper mb-8' data-aos='fade-up' data-aos-duration='1000'>
            <ProductItem />
          </div>
        </div>
      </div>
    </div>
  );
}

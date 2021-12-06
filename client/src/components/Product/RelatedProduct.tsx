import React, { ReactElement } from 'react';
import ProductItem from './ProductItem';

interface Props {}

export default function RelatedProduct({}: Props): ReactElement {
  return (
    <div className='section section-margin'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='section-title text-center'>
              <h2 className='title'>Related Products</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='product-carousel arrow-outside-container'>
              <div className='swiper-container'>
                <div className='swiper-wrapper'>
                  <div className='swiper-slide'>
                    <div className='product-wrapper'>
                      <ProductItem />
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='product-wrapper'>
                      <ProductItem />
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='product-wrapper'>
                      <ProductItem />
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='product-wrapper'>
                      <ProductItem />
                    </div>
                  </div>
                </div>

                <div className='swiper-pagination d-block d-md-none'></div>
                <div className='swiper-button-prev swiper-nav-button d-none d-md-flex'>
                  <i className='ti-angle-left'></i>
                </div>
                <div className='swiper-button-next swiper-nav-button d-none d-md-flex'>
                  <i className='ti-angle-right'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { ReactElement } from 'react';

interface Props {}

export default function DealArea({}: Props): ReactElement {
  return (
    <div className='section section-margin-top'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='section-title text-center'>
              <h2 className='title' data-aos='fade-up' data-aos-duration='1000'>
                Deal Of The Week
              </h2>
            </div>

            <div className='product-deal-carousel arrow-outside-container'>
              <div className='swiper-container'>
                <div className='swiper-wrapper'>
                  <div className='swiper-slide'>
                    <div className='single-deal-product row mb-n6'>
                      <div className='deal-thumb col-md-6 mb-6' data-aos='fade-up' data-aos-duration='1200'>
                        <a href='single-product.html'>
                          <img className='fit-image' src='../../assets/images/products/large-product/9.png' alt='Product Image' />
                        </a>
                      </div>

                      <div className='product-deal-content col-md-6 mb-6' data-aos='fade-up' data-aos-duration='1400'>
                        <h5 className='title mb-3'>
                          <a href='single-product.html'>An Animal Album</a>
                        </h5>
                        <span className='rating mb-3'>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star-o'></i>
                        </span>
                        <span className='price'>
                          <span className='new'>$80.50</span>
                          <span className='old'>$85.80</span>
                        </span>
                        <p>
                          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
                          repellendus.
                        </p>
                        <div className='countdown-area'>
                          <div className='countdown-wrapper' data-countdown='2028/12/28'></div>
                        </div>
                        <a href='shop.html' className='btn btn-primary btn-hover-dark'>
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className='swiper-slide'>
                    <div className='single-deal-product row mb-n6'>
                      <div className='deal-thumb col-md-6 mb-6'>
                        <a href='single-product.html'>
                          <img className='fit-image' src='../../assets/images/products/large-product/10.png' alt='Product Image' />
                        </a>
                      </div>

                      <div className='product-deal-content col-md-6 mb-6'>
                        <h5 className='title mb-3'>
                          <a href='single-product.html'>Animal For Life</a>
                        </h5>
                        <span className='rating mb-3'>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star-o'></i>
                        </span>
                        <span className='price'>
                          <span className='new'>$60.00</span>
                          <span className='old'>$66.00</span>
                        </span>
                        <p>
                          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
                          repellendus.
                        </p>
                        <div className='countdown-area'>
                          <div className='countdown-wrapper' data-countdown='2028/12/28'></div>
                        </div>
                        <a href='shop.html' className='btn btn-primary btn-hover-dark'>
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='swiper-pagination d-none'></div>

                <div className='swiper-deal-button-next swiper-button-next swiper-nav-button'>
                  <i className='ti-angle-right'></i>
                </div>
                <div className='swiper-deal-button-prev swiper-button-prev swiper-nav-button'>
                  <i className='ti-angle-left'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

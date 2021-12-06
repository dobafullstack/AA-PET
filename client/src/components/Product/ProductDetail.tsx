import React, { ReactElement } from 'react';
import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

interface Props {}

export default function ProductDetail({}: Props): ReactElement {
  return (
    <div className='section section-margin'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 offset-lg-0 col-md-8 offset-md-2'>
            <div className='product-details-img'>
              <div className='single-product-img swiper-container product-gallery-top'>
                {/* <div className='swiper-wrapper popup-gallery'> */}
                <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]} elementClassNames='swiper-wrapper popup-gallery'>
                  <a className='swiper-slide w-100' href='assets/images/products/large-product/1.png'>
                    <img className='w-100' src='assets/images/products/large-product/1.png' alt='Product' />
                  </a>
                  <a className='swiper-slide w-100' href='assets/images/products/large-product/2.png'>
                    <img className='w-100' src='assets/images/products/large-product/2.png' alt='Product' />
                  </a>
                  <a className='swiper-slide w-100' href='assets/images/products/large-product/3.png'>
                    <img className='w-100' src='assets/images/products/large-product/3.png' alt='Product' />
                  </a>
                  <a className='swiper-slide w-100' href='assets/images/products/large-product/4.png'>
                    <img className='w-100' src='assets/images/products/large-product/4.png' alt='Product' />
                  </a>
                  <a className='swiper-slide w-100' href='assets/images/products/large-product/5.png'>
                    <img className='w-100' src='assets/images/products/large-product/5.png' alt='Product' />
                  </a>
                  <a className='swiper-slide w-100' href='assets/images/products/large-product/6.png'>
                    <img className='w-100' src='assets/images/products/large-product/6.png' alt='Product' />
                  </a>
                  <a className='swiper-slide w-100' href='assets/images/products/large-product/7.png'>
                    <img className='w-100' src='assets/images/products/large-product/7.png' alt='Product' />
                  </a>
                  <a className='swiper-slide w-100' href='assets/images/products/large-product/8.png'>
                    <img className='w-100' src='assets/images/products/large-product/8.png' alt='Product' />
                  </a>
                </LightGallery>
                {/* </div> */}
              </div>

              <div className='single-product-thumb swiper-container product-gallery-thumbs'>
                <div className='swiper-wrapper'>
                  <div className='swiper-slide'>
                    <img src='assets/images/products/medium-plus-product/1.png' alt='Product' />
                  </div>
                  <div className='swiper-slide'>
                    <img src='assets/images/products/medium-plus-product/2.png' alt='Product' />
                  </div>
                  <div className='swiper-slide'>
                    <img src='assets/images/products/medium-plus-product/3.png' alt='Product' />
                  </div>
                  <div className='swiper-slide'>
                    <img src='assets/images/products/medium-plus-product/4.png' alt='Product' />
                  </div>
                  <div className='swiper-slide'>
                    <img src='assets/images/products/medium-plus-product/5.png' alt='Product' />
                  </div>
                  <div className='swiper-slide'>
                    <img src='assets/images/products/medium-plus-product/6.png' alt='Product' />
                  </div>
                  <div className='swiper-slide'>
                    <img src='assets/images/products/medium-plus-product/7.png' alt='Product' />
                  </div>
                  <div className='swiper-slide'>
                    <img src='assets/images/products/medium-plus-product/8.png' alt='Product' />
                  </div>
                </div>

                <div className='swiper-button-next swiper-nav-button'>
                  <i className='ti-arrow-right'></i>
                </div>
                <div className='swiper-button-prev swiper-nav-button'>
                  <i className='ti-arrow-left'></i>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-7'>
            <div className='product-summery position-relative'>
              <div className='product-head mb-3'>
                <h2 className='product-title'>Variable product title</h2>
              </div>

              <div className='price-box mb-2'>
                <span className='regular-price'>$70.00</span>
                <span className='old-price'>
                  <del>$85.00</del>
                </span>
              </div>

              <div className='sku mb-3'>
                <span>SKU: 12345</span>
              </div>

              <div className='product-inventroy mb-3'>
                <span className='inventroy-title'>
                  {' '}
                  <strong>Availability:</strong>
                </span>
                <span className='inventory-varient'>12 Left in Stock</span>
              </div>

              <p className='desc-content mb-5'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
              </p>

              <div className='product-color-variation mb-5'>
                <span>
                  {' '}
                  <strong>Color: </strong>
                </span>
                <button type='button' className='btn bg-danger'></button>
                <button type='button' className='btn bg-primary'></button>
                <button type='button' className='btn bg-dark'></button>
                <button type='button' className='btn bg-light'></button>
              </div>

              <div className='product-size mb-4'>
                <span>
                  <strong>Size :</strong>
                </span>
                <a href='#' className='size-ratio active'>
                  s
                </a>
                <a href='#' className='size-ratio'>
                  m
                </a>
                <a href='#' className='size-ratio'>
                  l
                </a>
                <a href='#' className='size-ratio'>
                  xl
                </a>
              </div>

              <div className='product-material mb-5'>
                <span>
                  <strong>Material :</strong>
                </span>
                <a href='#' className='active'>
                  Metal
                </a>
                <a href='#'>Resin</a>
                <a href='#'>Fibre</a>
                <a href='#'>Iron</a>
              </div>

              <div className='quantity d-flex align-items-center mb-5'>
                <span className='me-2'>
                  <strong>Qty: </strong>
                </span>
                <div className='cart-plus-minus'>
                  <input className='cart-plus-minus-box' value='1' type='text' />
                  <div className='dec qtybutton'></div>
                  <div className='inc qtybutton'></div>
                </div>
              </div>

              <div className='cart-btn action-btn mb-6'>
                <div className='action-cart-btn-wrapper d-flex'>
                  <div className='add-to_cart'>
                    <a className='btn btn-primary btn-hover-dark rounded-0' href='cart.html'>
                      Add to cart
                    </a>
                  </div>
                  <a href='wishlist.html' title='Wishlist' className='action'>
                    <i className='ti-heart'></i>
                  </a>
                </div>
              </div>

              <div className='single-product-buy mb-6'>
                <a href='checkout.html' className='btn btn-primary btn-hover-dark rounded-0'>
                  Buy it Now
                </a>
              </div>

              <div className='social-share mb-n7'>
                <div className='widget-social justify-content-start mb-6'>
                  <a title='Twitter' href='#/'>
                    <i className='icon-social-twitter'></i>
                  </a>
                  <a title='Instagram' href='#/'>
                    <i className='icon-social-instagram'></i>
                  </a>
                  <a title='Linkedin' href='#/'>
                    <i className='icon-social-linkedin'></i>
                  </a>
                  <a title='Skype' href='#/'>
                    <i className='icon-social-skype'></i>
                  </a>
                  <a title='Dribble' href='#/'>
                    <i className='icon-social-dribbble'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

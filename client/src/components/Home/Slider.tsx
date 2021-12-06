import React, { ReactElement } from 'react'
import heroImg from '../../assets/images/banner/home-hero.png'
import heroImg2 from '../../assets/images/banner/home-hero2.png'

interface Props {
    
}

export default function Slider({}: Props): ReactElement {
    return (
      <div className='section'>
        <div className='hero-slider swiper-container'>
          <div className='swiper-wrapper'>
            <div className='hero-slide-item swiper-slide'>
              <div className='hero-slide-bg'>
                <img src={heroImg} alt='Slider Image' />
              </div>
              <div className='container'>
                <div className='hero-slide-content text-center text-md-end'>
                  <h5 className='sub-title'>We keep pets for pleasure.</h5>
                  <h2 className='title m-0'>Vitamins For all Pets</h2>
                  <p>We know your concerns when you are looking for a chewing treat for your dog.</p>
                  <a href='shop.html' className='btn btn-dark btn-hover-primary'>
                    Shop Now
                  </a>
                </div>
              </div>
            </div>

            <div className='hero-slide-item swiper-slide'>
              <div className='hero-slide-bg'>
                <img src={heroImg2} alt='Slider Image' />
              </div>
              <div className='container'>
                <div className='hero-slide-content text-start'>
                  <h5 className='sub-title'>We keep pets for pleasure.</h5>
                  <h2 className='title m-0'>Vitamins For all Pets</h2>
                  <p className='ms-0'>We know your concerns when you are looking for a chewing treat for your dog.</p>
                  <a href='shop.html' className='btn btn-dark btn-hover-primary'>
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='swiper-pagination d-lg-none'></div>

          <div className='home-slider-prev swiper-button-prev main-slider-nav d-lg-flex d-none'>
            <i className='icon-arrow-left'></i>
          </div>
          <div className='home-slider-next swiper-button-next main-slider-nav d-lg-flex d-none'>
            <i className='icon-arrow-right'></i>
          </div>
        </div>
      </div>
    );
}

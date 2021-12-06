import React, { ReactElement } from "react";

interface Props {}

export default function Testimonial({}: Props): ReactElement {
    return (
      <div className='section bg-bright section-padding section-margin'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='testimonial-carousel'>
                <div className='swiper-container testimonial-gallery-top' data-aos='fade-up' data-aos-duration='1000'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <div className='testimonial-content text-center'>
                        <p>"Just because something doesn’t do what you planned it to do doesn’t mean it’s useless"</p>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='testimonial-content text-center'>
                        <p>"Making money is art and working is art and good business is the best art"</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='swiper-container testimonial-gallery-thumbs' data-aos='fade-up' data-aos-duration='1500'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <div className='testimonial-thumb text-center'>
                        <img
                          src='https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.6435-9/83065286_1278292579007892_3788003534067204096_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=r-tVenR8JDMAX-zw7vO&_nc_ht=scontent.fsgn5-4.fna&oh=f96860ec759bf2369f799d520a37cd0d&oe=61D49074'
                          alt='Testimonial Image'
                        />
                        <h3 className='thumb-title'>Duy Anh</h3>
                        <h6 className='thumb-subtitle'>Customer</h6>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='testimonial-thumb text-center'>
                        <img
                          src='https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.18169-9/28058814_1395412423937622_1598939235332292418_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=6W_jPcV6ifAAX_LSRR5&_nc_ht=scontent.fsgn5-5.fna&oh=9d30fcc8a8dc3bda86b9bb050970a79d&oe=61D52B41'
                          alt='Testimonial Image'
                        />
                        <h3 className='thumb-title'>An Thanh Nguyen</h3>
                        <h6 className='thumb-subtitle'>Customer</h6>
                      </div>
                    </div>
                  </div>

                  <div className='swiper-pagination'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Layout/Breadcrumb';

export default function About() {
  return (
    <>
      <Breadcrumb title='About us'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>About Us</li>
      </Breadcrumb>

      <div className='section section-margin'>
        <div className='container'>
          <div className='row mb-n6'>
            <div className='col-md-6 pe-lg-9 pe-3 mb-6' data-aos='fade-up' data-aos-duration='1000'>
              <div className='about-thumb'>
                <img className='fit-image' src='../assets/images/about/1.png' alt='About Image' />
              </div>
            </div>
            <div className='col-md-6 align-self-center mb-6' data-aos='fade-up' data-aos-duration='1500'>
              <div className='about-content'>
                <h2 className='title'>About Amber</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitat ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
                <ul className='about-content-list'>
                  <li>
                    <span>
                      <i className='ti-angle-double-right'></i>
                    </span>{' '}
                    There are many variation passages
                  </li>
                  <li>
                    <span>
                      <i className='ti-angle-double-right'></i>
                    </span>{' '}
                    Contrary to popular belief not simply
                  </li>
                  <li>
                    <span>
                      <i className='ti-angle-double-right'></i>
                    </span>{' '}
                    But I must explain to you how all this
                  </li>
                </ul>
                <a href='contact.html' className='btn btn-primary btn-hover-dark'>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section bg-bright section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='testimonial-carousel'>
                <div className='swiper-container testimonial-gallery-top' data-aos='fade-up' data-aos-duration='1000'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <div className='testimonial-content text-center'>
                        <p>
                          Lorem ipsum dolor sit amet, co adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita ullamco
                          laboris nisi ut aliquip ex ea commodo
                        </p>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='testimonial-content text-center'>
                        <p>
                          Vivamus a lobortis ipsum, vel condimentum magna. Etiam id turpis tortor. Nunc scelerisque, nisi a blandit varius, nunc purus venenatis ligula, sed venenatis orci augue nec
                          sapien. Cum sociis natoque
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='swiper-container testimonial-gallery-thumbs' data-aos='fade-up' data-aos-duration='1500'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <div className='testimonial-thumb text-center'>
                        <img src='../assets/images/testimonial/1.png' alt='Testimonial Image' />
                        <h3 className='thumb-title'>Jonathon Jhon</h3>
                        <h6 className='thumb-subtitle'>Customer</h6>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='testimonial-thumb text-center'>
                        <img src='../assets/images/testimonial/2.png' alt='Testimonial Image' />
                        <h3 className='thumb-title'>Cristal Jerry</h3>
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

      <div className='section section-margin'>
        <div className='container'>
          <div className='row row-cols-md-3 row-cols-sm-2 row-cols-1 mb-n6'>
            <div className='col mb-6' data-aos='fade-up' data-aos-duration='1000'>
              <div className='single-team-wrapper'>
                <div className='thumb'>
                  <a href='contact.html'>
                    <img className='fit-image' src='../assets/images/team/1.jpg' alt='Team Image' />
                  </a>

                  <div className='social-share'>
                    <a title='Twitter' href='#/'>
                      <i className='ti-facebook'></i>
                    </a>
                    <a title='Instagram' href='#/'>
                      <i className='ti-pinterest'></i>
                    </a>
                    <a title='Linkedin' href='#/'>
                      <i className='ti-twitter-alt'></i>
                    </a>
                    <a title='Skype' href='#/'>
                      <i className='ti-instagram'></i>
                    </a>
                  </div>
                </div>
                <div className='content'>
                  <h4 className='title'>Cristal Mile</h4>
                  <h4 className='subtitle'>Customer</h4>
                </div>
              </div>
            </div>

            <div className='col mb-6' data-aos='fade-up' data-aos-duration='1500'>
              <div className='single-team-wrapper'>
                <div className='thumb'>
                  <a href='contact.html'>
                    <img className='fit-image' src='../assets/images/team/2.jpg' alt='Team Image' />
                  </a>

                  <div className='social-share'>
                    <a title='Twitter' href='#/'>
                      <i className='ti-facebook'></i>
                    </a>
                    <a title='Instagram' href='#/'>
                      <i className='ti-pinterest'></i>
                    </a>
                    <a title='Linkedin' href='#/'>
                      <i className='ti-twitter-alt'></i>
                    </a>
                    <a title='Skype' href='#/'>
                      <i className='ti-instagram'></i>
                    </a>
                  </div>
                </div>
                <div className='content'>
                  <h4 className='title'>Jems Prince</h4>
                  <h4 className='subtitle'>CEO</h4>
                </div>
              </div>
            </div>

            <div className='col mb-6' data-aos='fade-up' data-aos-duration='2000'>
              <div className='single-team-wrapper'>
                <div className='thumb'>
                  <a href='contact.html'>
                    <img className='fit-image' src='../assets/images/team/3.jpg' alt='Team Image' />
                  </a>

                  <div className='social-share'>
                    <a title='Twitter' href='#/'>
                      <i className='ti-facebook'></i>
                    </a>
                    <a title='Instagram' href='#/'>
                      <i className='ti-pinterest'></i>
                    </a>
                    <a title='Linkedin' href='#/'>
                      <i className='ti-twitter-alt'></i>
                    </a>
                    <a title='Skype' href='#/'>
                      <i className='ti-instagram'></i>
                    </a>
                  </div>
                </div>
                <div className='content'>
                  <h4 className='title'>Prety Pairy</h4>
                  <h4 className='subtitle'>Customer</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

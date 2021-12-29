import React from 'react';
import { Link } from 'react-router-dom';
import { Testimonial } from '../components/Home';
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
                      <div
                          className='col-md-6 pe-lg-9 pe-3 mb-6'
                          data-aos='fade-up'
                          data-aos-duration='1000'
                      >
                          <div className='about-thumb'>
                              <img
                                  className='fit-image'
                                  src='https://toplead.vn/wp-content/uploads/2021/06/pet-shop-tai-tphcm.jpg'
                                  alt='About Image'
                                  width={570}
                                  height={380}
                              />
                          </div>
                      </div>
                      <div
                          className='col-md-6 align-self-center mb-6'
                          data-aos='fade-up'
                          data-aos-duration='1500'
                      >
                          <div className='about-content'>
                              <h2 className='title'>About AAPet</h2>
                              <p>
                                  AAPet is a locally owned and operated pet food and supply store.
                                  Our mission is to provide dog and cat parents with everything that
                                  they need to ensure their pet lives a long and happy life.
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
                              <Link to='/contact' className='btn btn-primary btn-hover-dark'>
                                  Contact Us
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <Testimonial />

          <div className='section section-margin'>
              <div className='container'>
                  <div className='row row-cols-md-3 row-cols-sm-2 row-cols-1 mb-n6 justify-content-center'>
                      <div className='col mb-6' data-aos='fade-up' data-aos-duration='1000'>
                          <div className='single-team-wrapper'>
                              <div className='thumb'>
                                  <a href='contact.html'>
                                      <img
                                          className='fit-image'
                                          src='https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.6435-9/83065286_1278292579007892_3788003534067204096_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=r-tVenR8JDMAX-zw7vO&_nc_ht=scontent.fsgn5-4.fna&oh=f96860ec759bf2369f799d520a37cd0d&oe=61D49074'
                                          alt='Team Image'
                                          width={370}
                                          height={420}
                                      />
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
                                  <h4 className='title'>Duy Anh Nguyen</h4>
                                  <h4 className='subtitle'>CEO</h4>
                              </div>
                          </div>
                      </div>

                      <div className='col mb-6' data-aos='fade-up' data-aos-duration='1500'>
                          <div className='single-team-wrapper'>
                              <div className='thumb'>
                                  <a href='contact.html'>
                                      <img
                                          className='fit-image'
                                          src='https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.18169-9/28058814_1395412423937622_1598939235332292418_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=6W_jPcV6ifAAX_LSRR5&_nc_ht=scontent.fsgn5-5.fna&oh=9d30fcc8a8dc3bda86b9bb050970a79d&oe=61D52B41'
                                          alt='Team Image'
                                          width={370}
                                          height={420}
                                      />
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
                                  <h4 className='title'>Thanh An</h4>
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

import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface Props {}

export default function Footer({}: Props): ReactElement {
  return (
    <footer className='section footer-section'>
      <div className='footer-top bg-bright section-padding'>
        <div className='container'>
          <div className='row mb-n8'>
            <div className='col-12 col-sm-6 col-lg-3 mb-8' data-aos='fade-up' data-aos-duration='1000'>
              <div className='single-footer-widget'>
                <h1 className='widget-title'>About Us</h1>
                <p className='desc-content'>As a young business, we promise to bring great experiences to our customers.</p>

                <div className='widget-social justify-content-start mb-n2'>
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
            <div className='col-12 col-sm-6 col-lg-3 mb-8' data-aos='fade-up' data-aos-duration='1200'>
              <div className='single-footer-widget'>
                <h2 className='widget-title'>Useful Links</h2>
                <ul className='widget-list'>
                  <li>
                    <a href='wishlist.html'>Help & Contact Us</a>
                  </li>
                  <li>
                    <a href='contact.html'>Returns & Refunds</a>
                  </li>
                  <li>
                    <a href='contact.html'>Online Stores</a>
                  </li>
                  <li>
                    <a href='contact.html'>Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-lg-3 mb-8' data-aos='fade-up' data-aos-duration='1400'>
              <div className='single-footer-widget aos-init aos-animate'>
                <h2 className='widget-title'>Help</h2>
                <ul className='widget-list'>
                  <li>
                    <Link to='/wishlist'>Wishlist</Link>
                  </li>
                  <li>
                    <a href='contact.html'>Pricing Plans</a>
                  </li>
                  <li>
                    <a href='contact.html'>Order Traking</a>
                  </li>
                  <li>
                    <a href='contact.html'>Returns</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-lg-3 mb-8' data-aos='fade-up' data-aos-duration='1600'>
              <div className='single-footer-widget'>
                <h2 className='widget-title'>Send newsletter</h2>
                <div className='widget-body'>
                  <p className='desc-content mb-4'>Subscribe to our newsletter and get 10% off your first purchase..</p>

                  <div className='newsletter-form-wrap pt-1'>
                    <form id='mc-form' className='mc-form'>
                      <input type='email' id='mc-email' className='form-control email-box' placeholder='demo@example.com' name='EMAIL' />
                      <button id='mc-submit' className='newsletter-btn' type='submit'>
                        Send
                      </button>
                    </form>

                    <div className='mailchimp-alerts text-centre'>
                      <div className='mailchimp-submitting'></div>
                      <div className='mailchimp-success text-success'></div>
                      <div className='mailchimp-error text-danger'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

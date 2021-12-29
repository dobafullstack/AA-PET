import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Layout/Breadcrumb';

export default function Contact() {
  return (
    <>
      <Breadcrumb title='Contact'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>Contact</li>
      </Breadcrumb>

      <div className='section section-margin'>
        <div className='container'>
          <div className='row mb-n10'>
            <div className='col-12 col-lg-6 mb-10 order-2 order-lg-1' data-aos='fade-up' data-aos-duration='1000'>
              <div className='contact-title pb-3'>
                <h2 className='title'>Get in Touch</h2>
              </div>

              <div className='contact-form-wrapper contact-form'>
                <form action='assets/php/amber.php' id='contact-form' method='post'>
                  <div className='row'>
                    <div className='col-12'>
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className='input-area mb-4'>
                            <input className='input-item' type='text' placeholder='Your Name *' name='name' />
                          </div>
                        </div>

                        <div className='col-md-6'>
                          <div className='input-area mb-4'>
                            <input className='input-item' type='email' placeholder='Email *' name='email' />
                          </div>
                        </div>

                        <div className='col-12'>
                          <div className='input-area mb-4'>
                            <input className='input-item' type='text' placeholder='Subject *' name='subject' />
                          </div>
                        </div>

                        <div className='col-12'>
                          <div className='input-area mb-8'>
                            <textarea cols={30} rows={5} className='textarea-item' name='message' placeholder='Message'></textarea>
                          </div>
                        </div>

                        <div className='col-12'>
                          <button type='submit' id='submit' name='submit' className='btn btn-primary btn-hover-dark'>
                            Send Message
                          </button>
                        </div>
                        <p className='col-8 form-message mb-0'></p>
                      </div>
                    </div>
                  </div>
                </form>
                <p className='form-messege'></p>
              </div>
            </div>
            <div className='col-12 col-lg-6 mb-10 order-1 order-lg-2' data-aos='fade-up' data-aos-duration='1500'>
              <div className='contact-title pb-3'>
                <h2 className='title'>Contact Us</h2>
              </div>

              <div className='contact-content'>
                <p>
                  Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum
                  formas human.
                </p>
                <address className='contact-block'>
                  <ul>
                    <li>
                      <i className='fa fa-fax'></i> 11G, 22St, Binh Hung Hoa A, Binh Tan district
                    </li>
                    <li>
                      <i className='fa fa-phone'></i> <a href='tel:123-123-456-789'>0944609933</a>
                    </li>
                    <li>
                      <i className='fas fa-envelope'></i> <a href='mailto:demo@example.com'>dobadov3@gmail.com </a>
                    </li>
                  </ul>
                </address>

                <div className='working-time'>
                  <h6 className='title'>Working Hours</h6>
                  <p>Monday – Saturday:08AM – 22PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section'>
        <div className='google-map-area w-100' data-aos='fade-up' data-aos-duration='1000'>
          <iframe
            className='contact-map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2136.986005919501!2d-73.9685579655238!3d40.75862446708152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e4a1c884e5%3A0x24fe1071086b36d5!2sThe%20Atrium!5e0!3m2!1sen!2sbd!4v1585132512970!5m2!1sen!2sbd'
          ></iframe>
        </div>
      </div>
    </>
  );
}

import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Layout/Breadcrumb';

interface Props {}

export default function BlogDetail({}: Props): ReactElement {
  return (
    <>
      <Breadcrumb title='Blog name'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
        <li>Blog Details</li>
      </Breadcrumb>

      <div className='section section-margin'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9 m-auto overflow-hidden'>
              <div className='blog-details-wrapper'>
                <div className='blog-details-content'>
                  <div className='blog-image'>
                    <img src='../assets/images/blog/large-size/1.jpg' alt='Blog Image' className='fit-image' />
                  </div>

                  <div className='blog-details-title-meta'>
                    <h2 className='title'>Temporibus Autem Quibusdam</h2>
                    <ul className='blog-meta'>
                      <li>
                        By: <a href='#/'>Admin</a> <span>27 June 2021</span>
                      </li>
                      <li>03 Comments</li>
                    </ul>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>

                  <blockquote>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.</blockquote>

                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                    aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                    iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                  </p>

                  <div className='blog-details-tag-social mb-n4'>
                    <div className='blog-details-tag mb-4'>
                      <ul>
                        <li>
                          <a href='#/'>Cat</a>
                        </li>
                        <li>
                          <a href='#/'>Dog</a>
                        </li>
                        <li>
                          <a href='#/'>Fish</a>
                        </li>
                      </ul>
                    </div>

                    <div className='social-share mb-4'>
                      <div className='widget-social'>
                        <span>Share: </span>
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

                <div className='blog-details-comment-area mb-n6'>
                  <h2 className='blog-desc-title mb-6 mt-8'>Comments</h2>
                  <div className='blog-details-comment-wrapper mb-6'>
                    <div className='thumb'>
                      <img className='fit-image' src='../assets/images/blog/small-size/95x95.jpg' alt='Blog Review' />
                    </div>
                    <div className='content'>
                      <h4 className='title'>Catherin Betty</h4>
                      <ul className='meta'>
                        <li>27 Oct 2021</li>
                      </ul>
                      <p>Praesent bibendum risus pellentesque faucibus rhoncus. Etiam a mollis odio. Integer urna nisl, fermentum eu mollis et, gravida eu elit. Excepteur sint occaecat cupidatat.</p>
                    </div>
                  </div>

                  <div className='blog-details-comment-wrapper mb-6'>
                    <div className='thumb'>
                      <img className='fit-image' src='../assets/images/blog/small-size/95x95-2.jpg' alt='Blog Review' />
                    </div>
                    <div className='content'>
                      <h4 className='title'>Alex Due</h4>
                      <ul className='meta'>
                        <li>27 Oct 2021</li>
                      </ul>
                      <p>Praesent bibendum risus pellentesque faucibus rhoncus. Etiam a mollis odio. Integer urna nisl, fermentum eu mollis et, gravida eu elit. Excepteur sint occaecat cupidatat.</p>
                    </div>
                  </div>
                </div>

                <div className='comment-post-area'>
                  <h2 className='blog-desc-title mb-6 pt-8'>Post a Comment</h2>
                  <form action='#'>
                    <div className='row'>
                      <div className='col-md-6 col-custom'>
                        <div className='input-item mb-4'>
                          <input className='rounded-0 w-100 input-area name' type='text' placeholder='Name' />
                        </div>
                      </div>

                      <div className='col-md-6 col-custom'>
                        <div className='input-item mb-4'>
                          <input className='rounded-0 w-100 input-area email' type='text' placeholder='Email' />
                        </div>
                      </div>

                      <div className='col-12 col-custom'>
                        <div className='input-item mb-4'>
                          <textarea cols={30} rows={10} name='comment' className='rounded-0 w-100 custom-textarea input-area' placeholder='Message' spellCheck='false' data-gramm='false'></textarea>
                        </div>
                      </div>

                      <div className='col-12 col-custom mt-4'>
                        <button type='submit' className='btn btn-primary btn-hover-dark'>
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

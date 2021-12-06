import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom';

interface Props {
    
}

export default function BlogItem({}: Props): ReactElement {
    return (
      <div className='col mb-8' data-aos='fade-up' data-aos-duration='1000'>
        <div className='single-blog-wrapper'>
          <div className='blog-thumb thumb-effect'>
            <Link className='image' to='/blog/1'>
              <img className='fit-image' src='assets/images/blog/medium-size/1.jpg' alt='Blog Image' />
            </Link>
          </div>

          <div className='blog-content'>
            <div className='blog-meta'>
              <ul>
                <li>
                  <span>By</span>
                  <a href='#/'>Admin</a>
                </li>
                <li>
                  <span>27, Jan, 2021</span>
                </li>
              </ul>
            </div>
            <h2 className='blog-title'>
              <Link to='/blog/1'>How to take care of your fish</Link>
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut...</p>
            <Link className='more-link' to='/blog/1'>
              Read More
            </Link>
          </div>
        </div>
      </div>
    );
}

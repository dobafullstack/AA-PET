import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { BlogItem } from '../components/Blog';
import Breadcrumb from '../components/Layout/Breadcrumb';

interface Props {}

export default function Blog({}: Props): ReactElement {
  return (
    <>
      <Breadcrumb title='Blog'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>Blog</li>
      </Breadcrumb>

      <div className='section section-margin'>
        <div className='container'>
          <div className='row row-cols-lg-3 row-cols-sm-2 row-cols-1 mb-n8'>
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />

            
          </div>
          <div className='row'>
            <div className='col-12 mt-10'>
              <nav className='d-flex justify-content-center'>
                <ul className='pagination'>
                  <li className='page-item'>
                    <a className='page-link active' href='#/'>
                      1
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#/'>
                      2
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#/'>
                      3
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link rounded-0' href='#/' aria-label='Next'>
                      <span aria-hidden='true'>&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

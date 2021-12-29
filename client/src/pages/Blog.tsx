import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { BlogItem } from '../components/Blog';
import Breadcrumb from '../components/Layout/Breadcrumb';
import BlogModel from '../models/Blog'
import BlogPrototype from '../models/BlogPrototype';

interface Props {}

export default function Blog({}: Props): ReactElement {
  const blog = new BlogModel(
      '5 REASONS TO ADOPT, NOT SHOP',
      'Every year, approximately 6.5 million pets enter animal shelters nationwide, and 1.5 million become euthanized. And with the current shelter crisis, numbers are on the rise. But you can help!',
      'Doba',
      'https://billingsseniorconcierge.com/wp-content/uploads/2018/10/pet-sitting-e1623426634657-370x237.jpeg'
  );

  const prototypeBlog = new BlogPrototype(blog);

  const blog1 = prototypeBlog.clone();

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
            <BlogItem blog={blog1} />
            <BlogItem blog={blog1} />
            <BlogItem blog={blog1} />
            <BlogItem blog={blog1} />
            <BlogItem blog={blog1} />
            <BlogItem blog={blog1} />
            <BlogItem blog={blog1} />
            <BlogItem blog={blog1} />
            <BlogItem blog={blog1} />

            
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

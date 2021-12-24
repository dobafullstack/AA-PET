import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Blog from '../../models/Blog';
import formatDate from '../../utils/formatDate';

interface Props {
    blog: Blog;
}

export default function BlogItem({ blog }: Props): ReactElement {
    return (
        <div className='col mb-8' data-aos='fade-up' data-aos-duration='1000'>
            <div className='single-blog-wrapper'>
                <div className='blog-thumb thumb-effect'>
                    <Link className='image' to='/blog/1'>
                        <img className='fit-image' src={blog.image} alt='Blog Image' />
                    </Link>
                </div>

                <div className='blog-content'>
                    <div className='blog-meta'>
                        <ul>
                            <li>
                                <span>By</span>
                                <a href='#/'>{blog.author}</a>
                            </li>
                            <li>
                                <span>{formatDate(blog.createAt)}</span>
                            </li>
                        </ul>
                    </div>
                    <h2 className='blog-title'>
                        <Link to='/blog/1'>{blog.title}</Link>
                    </h2>
                    <p>
                        {blog.content}
                    </p>
                    <Link className='more-link' to='/blog/1'>
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
}

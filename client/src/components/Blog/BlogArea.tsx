import React, { ReactElement } from 'react';
import { BlogItem } from '.';
import Blog from '../../models/Blog';
import BlogPrototype from '../../models/BlogPrototype';

interface Props {}

export default function BlogArea({}: Props): ReactElement {
    const blog = new Blog(
        '5 REASONS TO ADOPT, NOT SHOP',
        'Every year, approximately 6.5 million pets enter animal shelters nationwide, and 1.5 million become euthanized. And with the current shelter crisis, numbers are on the rise. But you can help!',
        'Doba',
        'https://billingsseniorconcierge.com/wp-content/uploads/2018/10/pet-sitting-e1623426634657-370x237.jpeg'
    );

    const prototypeBlog = new BlogPrototype(blog);

    const blog1 = prototypeBlog.clone();
    const blog2 = prototypeBlog.clone();
    blog2.image =
        'https://billingsseniorconcierge.com/wp-content/uploads/2018/10/pet-care-370x237.jpeg';
    const blog3 = prototypeBlog.clone();
    blog3.image =
        'https://midwestvetlab.com/wp-content/uploads/2018/10/adorable-animal-blur-406014-370x237.jpg';

    return (
        <div className='section' style={{ marginTop: '5rem' }}>
            <div className='container'>
                <div className='row' data-aos='fade-up' data-aos-duration='1000'>
                    <div className='col-12'>
                        <div className='section-title text-center'>
                            <h2 className='title'>From Our Blog</h2>
                        </div>
                    </div>
                </div>

                <div className='row row-cols-lg-3 row-cols-sm-2 row-cols-1 mb-n8'>
                    <BlogItem blog={blog1} />
                    <BlogItem blog={blog2} />
                    <BlogItem blog={blog3} />
                </div>
            </div>
        </div>
    );
}

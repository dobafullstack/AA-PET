import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom';
import { CategorySidebar, CategoryWrapper } from '../components/Category'
import Breadcrumb from '../components/Layout/Breadcrumb'

interface Props {
    
}

export default function Category({}: Props): ReactElement {
    return (
        <>
            <Breadcrumb title='Category'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>Category name</li>
            </Breadcrumb>
            <div className='section section-margin'>
                <div className='container'>
                    <div className='row flex-row-reverse'>
                        <CategoryWrapper />
                        <CategorySidebar />
                    </div>
                </div>
            </div>
        </>
    );
}

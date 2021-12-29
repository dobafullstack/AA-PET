import React, { ReactElement, useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import { CategorySidebar, CategoryWrapper } from '../components/Category'
import Breadcrumb from '../components/Layout/Breadcrumb'
import MainJQuery from '../utils/MainJQuery';
import $ from 'jquery';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getProductByCategoryIdAction } from '../app/actions/product.action';

interface Props {
    
}

export default function Category({}: Props): ReactElement {
    const {categoryId} = useParams()
    const dispatch = useAppDispatch();
    const products = useAppSelector(state => state.product.products)
    const location = useLocation();
    
    useEffect(() => {
        MainJQuery($);
    }, [categoryId]);

    useEffect(() => {
        dispatch(getProductByCategoryIdAction(categoryId as string))
    }, [categoryId])

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
                        <CategoryWrapper products={products} isClothes={location.state.clothes}/>
                        <CategorySidebar />
                    </div>
                </div>
            </div>
        </>
    );
}

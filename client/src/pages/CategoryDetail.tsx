import React, { ReactElement, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CategorySidebar, CategoryWrapper } from '../components/Category';
import Breadcrumb from '../components/Layout/Breadcrumb';
import MainJQuery from '../utils/MainJQuery';
import $ from 'jquery';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getProductByCategoryDetailIdAction, getProductByCategoryIdAction } from '../app/actions/product.action';

interface Props {}

export default function CategoryDetail({}: Props): ReactElement {
    const { categoryDetailId } = useParams();
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.product.products);

    useEffect(() => {
        MainJQuery($);
    }, []);

    useEffect(() => {
        dispatch(getProductByCategoryDetailIdAction(categoryDetailId as string));
    }, [categoryDetailId]);

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
                        <CategoryWrapper products={products} />
                        <CategorySidebar />
                    </div>
                </div>
            </div>
        </>
    );
}

import $ from 'jquery';
import React, { ReactElement, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import {
    getProductByCategoryDetailIdAction
} from '../app/actions/product.action';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { CategorySidebar, CategoryWrapper } from '../components/Category';
import Breadcrumb from '../components/Layout/Breadcrumb';
import MainJQuery from '../utils/MainJQuery';

interface Props {}

export default function CategoryDetail({}: Props): ReactElement {
    const { categoryDetailId } = useParams();
    const dispatch = useAppDispatch();
    const { products, newArrival } = useAppSelector((state) => state.product);
    const location = useLocation();

    const onSearch = (e: any) => {
    };

    useEffect(() => {
        MainJQuery($);
    }, [categoryDetailId]);

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
                        <CategoryWrapper
                            products={products}
                            isClothes={location.state ? location.state.clothes : false}
                        />
                        <CategorySidebar
                            recentProducts={newArrival.slice(0, 3)}
                            onSearch={onSearch}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

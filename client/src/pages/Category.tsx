import $ from 'jquery';
import React, { ReactElement, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getProductByCategoryIdAction } from '../app/actions/product.action';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { searchProducts } from '../app/reducers/product.reducer';
import { CategorySidebar, CategoryWrapper } from '../components/Category';
import Breadcrumb from '../components/Layout/Breadcrumb';
import MainJQuery from '../utils/MainJQuery';

interface Props {}

export default function Category({}: Props): ReactElement {
    const { categoryId } = useParams();
    const dispatch = useAppDispatch();
    const { products, newArrival } = useAppSelector((state) => state.product);
    const location = useLocation();

    const onSearch = (value: any) => {
        if (value === '') {
            dispatch(getProductByCategoryIdAction(categoryId as string));
        }else{
            dispatch(searchProducts(value))
        }
    };

    useEffect(() => {
        MainJQuery($);
    }, [categoryId]);

    useEffect(() => {
        dispatch(getProductByCategoryIdAction(categoryId as string));
    }, [categoryId]);

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

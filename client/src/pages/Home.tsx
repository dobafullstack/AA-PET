import React, { ReactElement, useEffect } from 'react';
import { BlogArea } from '../components/Blog';
import { Banner, Service, Slider, Testimonial } from '../components/Home';
import { DealArea, PopularProduct, ProductArea } from '../components/Product';
import MainJQuery from '../utils/MainJQuery';
import $ from 'jquery';
import { useAppDispatch } from '../app/hooks';
import { getProductsByProductTypeAction } from '../app/actions/product.action';

interface Props {}

export default function Home({}: Props): ReactElement {
    const dispatch = useAppDispatch();

    useEffect(() => {
        MainJQuery($);
        dispatch(getProductsByProductTypeAction('bestSeller'));
        dispatch(getProductsByProductTypeAction('sale'));
        dispatch(getProductsByProductTypeAction('newArrival'));
    }, []);

    return (
        <>
            <Slider />
            <PopularProduct />
            <Banner />
            <ProductArea />
            {/* <DealArea /> */}
            <Testimonial />
            <BlogArea />
            <Service />
        </>
    );
}

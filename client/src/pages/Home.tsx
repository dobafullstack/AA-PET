import React, { ReactElement, useEffect } from 'react';
import { BlogArea } from '../components/Blog';
import { Banner, Service, Slider, Testimonial } from '../components/Home';
import { DealArea, PopularProduct, ProductArea } from '../components/Product';
import MainJQuery from '../utils/MainJQuery';
import $ from 'jquery';

interface Props {}

export default function Home({}: Props): ReactElement {
    useEffect(() => {
        MainJQuery($);
    }, []);

    return (
        <>
            <Slider />
            <PopularProduct />
            <Banner />
            <ProductArea />
            <DealArea />
            <Testimonial />
            <BlogArea />
            <Service />
        </>
    );
}

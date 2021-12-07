import $ from 'jquery';
import React, { ReactElement, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../app/reducers/product.reducer';
import Breadcrumb from '../components/Layout/Breadcrumb';
import Loading from '../components/Layout/Loading';
import { ProductDetail, ProductReview, RelatedProduct } from '../components/Product';
import ProductModel from '../models/ProductModel';
import MainJQuery from '../utils/MainJQuery';

interface Props {}

export default function Product({}: Props): ReactElement {
    const { productId } = useParams();
    const { data, isFetching } = useGetProductByIdQuery(productId as string);

    useEffect(() => {
        MainJQuery($);
    }, []);

    if (isFetching) return <Loading />;
    

    return (
        <>
            <Breadcrumb title='Product'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>{data?.result.name}</li>
            </Breadcrumb>

            <ProductDetail product={data?.result as ProductModel}/>
            <ProductReview />
            <RelatedProduct />
        </>
    );
}

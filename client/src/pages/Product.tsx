import $ from 'jquery';
import React, { ReactElement, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getProductByIdAction } from '../app/actions/product.action';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useGetProductByIdQuery } from '../app/reducers/product.reducer';
import Breadcrumb from '../components/Layout/Breadcrumb';
import Loading from '../components/Layout/Loading';
import { ProductDetail, ProductReview, RelatedProduct } from '../components/Product';
import ProductModel from '../models/ProductModel';
import MainJQuery from '../utils/MainJQuery';

interface Props {}

export default function Product({}: Props): ReactElement {
    const product = useAppSelector((state) => state.product.product);
    const dispatch = useAppDispatch();
    const { productId } = useParams();
    const location = useLocation();

    useEffect(() => {
        MainJQuery($);
    }, []);

    useEffect(() => {
        dispatch(getProductByIdAction(productId as string));
    }, [productId]);

    return (
        <>
            <Breadcrumb title='Product'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>{product.name}</li>
            </Breadcrumb>

            <ProductDetail
                product={product}
                isClothes={location.state.isClothes}
                productId={productId as string}
            />
            <ProductReview />
            <RelatedProduct productId={productId as string} />
        </>
    );
}

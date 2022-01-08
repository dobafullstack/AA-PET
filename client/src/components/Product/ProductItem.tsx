import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { addToCart } from '../../app/reducers/cart.reducer';
import demoImg from '../../assets/images/products/medium-product/5.png';
import VND from '../../configs/VND';
import ProductModel from '../../models/ProductModel';
import getDiscountPrice from '../../utils/getDiscountPrice';

interface Props {
    newProduct?: boolean;
    saleProduct?: boolean;
    product: ProductModel;
}

export default function ProductItem({ newProduct, saleProduct, product }: Props): ReactElement {
    const dispatch = useAppDispatch();

    return (
        <div className='product'>
            <div className='thumb'>
                <Link to={`/product/${product._id}`} state={{ clothes: false }}>
                    <img className='fit-image' src={product.images[0] || demoImg} alt='Product' />
                </Link>
                {saleProduct && (
                    <span className='badges'>
                        <span className='sale'>-{product.discount_value}%</span>
                    </span>
                )}

                {newProduct && (
                    <span className='badges'>
                        <span className='new'>New</span>
                    </span>
                )}

                <div className='action-wrapper'>
                    <a
                        href='javascript:void(0)'
                        className='action quickview'
                        data-bs-toggle='modal'
                        data-bs-target='#quick-view'
                    >
                        <i className='ti-plus'></i>
                    </a>
                    <a href='javascript:void(0)' className='action wishlist' title='Wishlist'>
                        <i className='ti-heart'></i>
                    </a>
                    <a
                        href='javascript:void(0)'
                        className='action cart'
                        title='Cart'
                        onClick={() => dispatch(addToCart({ product, count: 1 }))}
                    >
                        <i className='ti-shopping-cart'></i>
                    </a>
                </div>

                <div className='countdown-area'>
                    <div className='countdown-wrapper' data-countdown='2028/12/28'></div>
                </div>
            </div>

            <div className='content'>
                <h5 className='title'>
                    <Link to={`/product/${product._id}`} state={{ clothes: false }}>
                        Pet Leaving House
                    </Link>
                </h5>
                <span className='rating'>
                    {Array(5).fill('').map((_, i) =>
                        product.rating_point > i ? (
                            <i className='fa fa-star'></i>
                        ) : (
                            <i className='fal fa-star'></i>
                        )
                    )}
                </span>
                {getDiscountPrice(product.price, product.discount_value) !== null ? (
                    <span className='price'>
                        <span className='new'>
                            {VND(getDiscountPrice(product.price, product.discount_value) as number)}
                        </span>
                        <span className='old'>{VND(product.price)}</span>
                    </span>
                ) : (
                    <span className='price'>
                        <span className='new'>{VND(product.price)}</span>
                    </span>
                )}
            </div>
        </div>
    );
}

import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { getProductByIdAction } from '../../app/actions/product.action';
import { useAppDispatch } from '../../app/hooks';
import { addToCart } from '../../app/reducers/cart.reducer';
import isNewProduct from '../../configs/MilisecondToDay';
import VND from '../../configs/VND';
import ProductModel from '../../models/ProductModel';

interface Props {
    product: ProductModel;
    isClothes: boolean
}

export default function CategoryItem({ product, isClothes }: Props): ReactElement {
    const dispatch = useAppDispatch();

    const dispatchProduct = () => dispatch(getProductByIdAction(product._id));

    return (
        <div className='col-lg-4 col-md-4 col-sm-6 product'>
            <div className='product-inner'>
                <div className='thumb'>
                    <Link state={{isClothes}} to={`/product/${product._id}`} className='image'>
                        <img
                            className='fit-image'
                            src={product.images[0]}
                            alt='Product'
                            width={270}
                            height={270}
                        />
                    </Link>
                    {isNewProduct(product.created_at) && (
                        <span className='badges'>
                            <span className='new'>New</span>
                        </span>
                    )}

                    {product.discount_percent > 0 && (
                        <span className='badges'>
                            <span className='sale'>-{product.discount_percent}%</span>
                        </span>
                    )}

                    <div className='action-wrapper'>
                        <a
                            href='javascript:void;'
                            className='action quickview'
                            data-bs-toggle='modal'
                            data-bs-target='#quick-view'
                            title='Quickview'
                            onClick={dispatchProduct}
                        >
                            <i className='ti-plus'></i>
                        </a>
                        <a href='javascript:void' className='action wishlist' title='Wishlist'>
                            <i className='ti-heart'></i>
                        </a>
                        <a
                            href='javascript:void'
                            className='action cart'
                            title='Cart'
                            onClick={() => dispatch(addToCart({ product, count: 1 }))}
                        >
                            <i className='ti-shopping-cart'></i>
                        </a>
                    </div>
                </div>
                <div className='content'>
                    <h5 className='title'>
                        <Link state={{isClothes}} to={`/product/${product._id}`}>{product.name}</Link>
                    </h5>
                    <span className='rating'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fal fa-star'></i>
                        <i className='fal fa-star'></i>
                    </span>
                    <span className='price'>
                        <span className='new'>{VND(product.price)}</span>
                        <span className='old'>{VND(product.price)}</span>
                    </span>
                    <p>{product.description}</p>

                    <div className='cart-btn action-btn'>
                        <div className='action-cart-btn-wrapper d-flex'>
                            <div className='add-to_cart'>
                                <a
                                    className='btn btn-primary btn-hover-dark rounded-0'
                                    href='javascript:void'
                                    onClick={() => dispatch(addToCart({ product, count: 1 }))}
                                >
                                    Add to cart
                                </a>
                            </div>
                            <a href='javascript:void' title='Wishlist' className='action'>
                                <i className='ti-heart'></i>
                            </a>
                            <a
                                href='javascript:void'
                                className='action quickview'
                                data-bs-toggle='modal'
                                data-bs-target='#quick-view'
                                title='Quickview'
                                onClick={dispatchProduct}
                            >
                                <i className='ti-plus'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

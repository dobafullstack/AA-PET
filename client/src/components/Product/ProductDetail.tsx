import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lightgallery.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery from 'lightgallery/react';
import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { changePriceProduct, useGetProductByIdQuery } from '../../app/reducers/product.reducer';
import MainJQuery from '../../utils/MainJQuery';
import $ from 'jquery';
import Loading from '../Layout/Loading';
import ProductModel from '../../models/ProductModel';
import VND from '../../configs/VND';
import { addToCart } from '../../app/reducers/cart.reducer';
import { useAppDispatch } from '../../app/hooks';
import { Link } from 'react-router-dom';
import DecorateProduct from '../../models/DecorateProduct';

interface Props {
    product: ProductModel;
    isClothes: boolean;
    productId: string;
}

export default function ProductDetail({ product, isClothes, productId }: Props): ReactElement {
    const [count, setCount] = useState(1);
    const [size, setSize] = useState<'S' | 'M' | 'L' | 'XL'>('S');
    const [color, setColor] = useState<'red' | 'orange' | 'black' | 'grey'>('red');
    const dispatch = useAppDispatch();
    const { data, isLoading } = useGetProductByIdQuery(productId);

    useEffect(() => {
        MainJQuery($);
    }, []);

    useEffect(() => {
        if (!isLoading) {
            const decorateProduct = new DecorateProduct(data?.result as ProductModel, size, color);
            decorateProduct.setPrice();
            dispatch(changePriceProduct({newPrice: decorateProduct.newPrice, newName: decorateProduct.newName}));
        }
    }, [size, color]);

    return (
        <div className='section section-margin'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-5 offset-lg-0 col-md-8 offset-md-2'>
                        <div className='product-details-img'>
                            <div className='single-product-img swiper-container product-gallery-top'>
                                {/* <div className='swiper-wrapper popup-gallery'> */}
                                <LightGallery
                                    speed={500}
                                    plugins={[lgThumbnail, lgZoom]}
                                    elementClassNames='swiper-wrapper popup-gallery'
                                >
                                    {product.images.map((image) => (
                                        <a className='swiper-slide w-100' href={image}>
                                            <img
                                                className='w-100'
                                                src={image}
                                                alt='Product'
                                                width={470}
                                                height={470}
                                            />
                                        </a>
                                    ))}
                                </LightGallery>
                                {/* </div> */}
                            </div>

                            <div className='single-product-thumb swiper-container product-gallery-thumbs'>
                                <div className='swiper-wrapper '>
                                    {product.images.map((image) => (
                                        <div className='swiper-slide w-auto' style={{ width: 150 }}>
                                            <img
                                                src={image}
                                                alt='Product'
                                                style={{ width: 150, height: 150 }}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className='swiper-button-next swiper-nav-button'>
                                    <i className='ti-arrow-right'></i>
                                </div>
                                <div className='swiper-button-prev swiper-nav-button'>
                                    <i className='ti-arrow-left'></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-7'>
                        <div className='product-summery position-relative'>
                            <div className='product-head mb-3'>
                                <h2 className='product-title'>{product.name}</h2>
                            </div>

                            <div className='price-box mb-2'>
                                <span className='regular-price'>{VND(product.price)}</span>
                                <span className='old-price'>
                                    <del>{VND(product.price)}</del>
                                </span>
                            </div>

                            {/* <div className='sku mb-3'>
                                <span>SKU: 12345</span>
                            </div> */}

                            <div className='product-inventroy mb-3'>
                                <span className='inventroy-title'>
                                    {' '}
                                    <strong>Availability:</strong>
                                </span>
                                <span className='inventory-varient'>
                                    {' '}
                                    {product.quantity} Left in Stock
                                </span>
                            </div>

                            <p className='desc-content mb-5'>
                                There are many variations of passages of Lorem Ipsum available, but
                                the majority have suffered alteration in some form, by injected
                                humour, or randomised words which don't look even slightly
                                believable. If you are going to use a passage of Lorem Ipsum, you
                                need to be sure there isn't anything embarrassing hidden in the
                                middle of text.
                            </p>

                            {isClothes && (
                                <>
                                    <div className='product-color-variation mb-5'>
                                        <span>
                                            {' '}
                                            <strong>Color: </strong>
                                        </span>
                                        <button
                                            type='button'
                                            className={`btn bg-danger ${
                                                color === 'red' && 'active'
                                            }`}
                                            onClick={() => setColor('red')}
                                        ></button>
                                        <button
                                            type='button'
                                            className={`btn bg-primary ${
                                                color === 'orange' && 'active'
                                            }`}
                                            onClick={() => setColor('orange')}
                                        ></button>
                                        <button
                                            type='button'
                                            className={`btn bg-dark ${
                                                color === 'black' && 'active'
                                            }`}
                                            onClick={() => setColor('black')}
                                        ></button>
                                        <button
                                            type='button'
                                            className={`btn bg-light ${
                                                color === 'grey' && 'active'
                                            }`}
                                            onClick={() => setColor('grey')}
                                        ></button>
                                    </div>

                                    <div className='product-size mb-4'>
                                        <span>
                                            <strong>Size :</strong>
                                        </span>
                                        <a
                                            href='javascript::void'
                                            className={`size-ratio ${size === 'S' && 'active'}`}
                                            onClick={() => setSize('S')}
                                        >
                                            s
                                        </a>
                                        <a
                                            href='javascript::void'
                                            className={`size-ratio ${size === 'M' && 'active'}`}
                                            onClick={() => setSize('M')}
                                        >
                                            m
                                        </a>
                                        <a
                                            href='javascript::void'
                                            className={`size-ratio ${size === 'L' && 'active'}`}
                                            onClick={() => setSize('L')}
                                        >
                                            l
                                        </a>
                                        <a
                                            href='javascript::void'
                                            className={`size-ratio ${size === 'XL' && 'active'}`}
                                            onClick={() => setSize('XL')}
                                        >
                                            xl
                                        </a>
                                    </div>
                                </>
                            )}

                            <div className='quantity d-flex align-items-center mb-5'>
                                <span className='me-2'>
                                    <strong>Qty: </strong>
                                </span>
                                <div className='cart-plus-minus'>
                                    <input
                                        className='cart-plus-minus-box'
                                        value={count}
                                        type='text'
                                    />
                                    <div
                                        className='dec qtybutton'
                                        onClick={() => {
                                            if (count === 1) return;

                                            setCount(count - 1);
                                        }}
                                    >
                                        -
                                    </div>
                                    <div
                                        className='inc qtybutton'
                                        onClick={() => {
                                            if (count === product.quantity) return;
                                            setCount(count + 1);
                                        }}
                                    >
                                        +
                                    </div>
                                </div>
                            </div>

                            <div className='cart-btn action-btn mb-6'>
                                <div className='action-cart-btn-wrapper d-flex'>
                                    <div className='add-to_cart'>
                                        <a
                                            className='btn btn-primary btn-hover-dark rounded-0'
                                            href='javascript:void;'
                                            onClick={() => {
                                                dispatch(addToCart({ product, count }));
                                                setCount(1);
                                            }}
                                        >
                                            Add to cart
                                        </a>
                                    </div>
                                    <a href='wishlist.html' title='Wishlist' className='action'>
                                        <i className='ti-heart'></i>
                                    </a>
                                </div>
                            </div>

                            <div className='single-product-buy mb-6'>
                                <Link
                                    to='/checkout'
                                    className='btn btn-primary btn-hover-dark rounded-0'
                                    onClick={() => {
                                        dispatch(addToCart({ product, count }));
                                        setCount(1);
                                    }}
                                >
                                    Buy it Now
                                </Link>
                            </div>

                            <div className='social-share mb-n7'>
                                <div className='widget-social justify-content-start mb-6'>
                                    <a title='Twitter' href='#/'>
                                        <i className='icon-social-twitter'></i>
                                    </a>
                                    <a title='Instagram' href='#/'>
                                        <i className='icon-social-instagram'></i>
                                    </a>
                                    <a title='Linkedin' href='#/'>
                                        <i className='icon-social-linkedin'></i>
                                    </a>
                                    <a title='Skype' href='#/'>
                                        <i className='icon-social-skype'></i>
                                    </a>
                                    <a title='Dribble' href='#/'>
                                        <i className='icon-social-dribbble'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

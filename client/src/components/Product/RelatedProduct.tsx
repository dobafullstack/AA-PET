import React, { ReactElement } from 'react';
import { useAppSelector } from '../../app/hooks';
import ProductItem from './ProductItem';

interface Props {
    productId: string;
}

export default function RelatedProduct({ productId }: Props): ReactElement {
    const products = useAppSelector((state) => state.product.products);

    return (
        <div className='section section-margin'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='section-title text-center'>
                            <h2 className='title'>Related Products</h2>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className='product-carousel arrow-outside-container'>
                            <div className='swiper-container'>
                                <div className='swiper-wrapper'>
                                    {products
                                        .filter((p) => p._id !== productId)
                                        .slice(0, 8)
                                        .map((product) => (
                                            <div className='swiper-slide'>
                                                <div className='product-wrapper'>
                                                    <ProductItem product={product} />
                                                </div>
                                            </div>
                                        ))}
                                </div>

                                <div className='swiper-pagination d-block d-md-none'></div>
                                <div className='swiper-button-prev swiper-nav-button d-none d-md-flex'>
                                    <i className='ti-angle-left'></i>
                                </div>
                                <div className='swiper-button-next swiper-nav-button d-none d-md-flex'>
                                    <i className='ti-angle-right'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

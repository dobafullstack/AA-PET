import React, { ReactElement } from 'react';
import ProductModel from '../../models/ProductModel';
import MyRating from '../MyRating';

interface Props {
    product: ProductModel;
}

export default function ProductReview({ product }: Props): ReactElement {
    return (
        <div className='section section-padding bg-bright'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 single-product-tab'>
                        <ul className='nav nav-tabs mb-n3' id='myTab' role='tablist'>
                            <li className='nav-item mb-3'>
                                <a
                                    className='nav-link active'
                                    id='home-tab'
                                    data-bs-toggle='tab'
                                    href='#connect-1'
                                    role='tab'
                                    aria-selected='true'
                                >
                                    Description
                                </a>
                            </li>
                            <li className='nav-item mb-3'>
                                <a
                                    className='nav-link'
                                    id='profile-tab'
                                    data-bs-toggle='tab'
                                    href='#connect-2'
                                    role='tab'
                                    aria-selected='false'
                                >
                                    Reviews
                                </a>
                            </li>
                        </ul>

                        <div className='tab-content mb-text' id='myTabContent'>
                            <div
                                className='tab-pane fade show active'
                                id='connect-1'
                                role='tabpanel'
                                aria-labelledby='home-tab'
                            >
                                <div className='desc-content'>
                                    <p className='mb-3'>{product.description}</p>
                                </div>
                            </div>
                            <div
                                className='tab-pane fade'
                                id='connect-2'
                                role='tabpanel'
                                aria-labelledby='profile-tab'
                            >
                                <div className='product_tab_content mt-8 p-3 border'>
                                    {product.reviews.length > 0 ? product.reviews.map((x) => (
                                        <div className='single-review d-flex mb-4'>
                                            <div className='review_details'>
                                                <div className='review_info mb-2'>
                                                    <span className='rating justify-content-start mb-3'>
                                                        <MyRating
                                                            onChange={() => null}
                                                            value={x.point}
                                                            readonly
                                                        />
                                                    </span>

                                                    <div className='review-title-date d-flex'>
                                                        <h5 className='title'>{x.user}</h5>
                                                    </div>
                                                </div>
                                                <p>{x.comment}</p>
                                            </div>
                                        </div>
                                    )) : <h2 className="text-center">Chưa có đánh giá</h2>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

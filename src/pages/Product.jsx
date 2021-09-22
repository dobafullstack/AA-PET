import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import BreadcrumbBar from '../components/BreadcrumbBar';
import MyRating from '../components/MyRating';
import VND from '../configs/VNDCurrency';
import StaticProducts from '../utils/StaticProduct';
import RatingItem from '../components/RatingItem';
import ProductCarousel from '../components/ProductCarousel';

export function Product() {
    const breadcrumbs = useBreadcrumbs(breadCrumbConfig);
    const params = useParams();
    const product = StaticProducts.filter((item) => item._id === parseInt(params.productId))[0];

    return (
        <div className="product-page">
            <BreadcrumbBar breadcrumbs={breadcrumbs} />

            <div className="product-wrapper mt-3">
                <Row>
                    <Col xl={6} lg={6} md={6} sm={6}>
                        <ProductCarousel product={product} />
                    </Col>

                    <Col xl={6} lg={6} md={6} sm={6} className="right">
                        <h1>{product.name}</h1>
                        <MyRating point={product.rating_point} readonly />
                        <span className="category">Category: Accessories</span>
                        <span className="product-price">{VND(product.price)}</span>
                        <span className="product-description">{product.description}</span>
                        <div className="d-flex mb-2">
                            <button>Add to cart</button>
                            <div className="favorite ms-2">
                                <i class="fal fa-heart"></i>
                                <i class="fas fa-heart active"></i>
                            </div>
                        </div>
                        <hr />
                        <h3 className="mt-2">Description</h3>
                        <span className="product-description mb-2">
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
                            below for those interested. Sections 1.10.32 and 1.10.33 from “de
                            Finibus Bonorum et Malorum” by Cicero are also reproduced in their exact
                            original form, accompanied by English versions from the 1914 translation
                            by H. Rackham.The standard chunk of Lorem Ipsum used since the 1500s is
                            reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
                            “de Finibus Bonorum et Malorum” by Cicero are also reproduced in their
                            exact original form, accompanied by English versions from the 1914
                            translation by H. Rackham.
                        </span>
                        <hr />
                        <h3 className="my-3">Reviews</h3>
                        <div className="d-flex justify-content-between" style={{ width: '70%' }}>
                            <div className="d-flex">
                                <MyRating readonly point={product.rating_point} />
                                <span className="ms-2">2 Reviews</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <i class="fal fa-comment-alt-lines me-2"></i>
                                <span>Write a comment</span>
                            </div>
                        </div>
                        <RatingItem />
                        <RatingItem />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

const DynamicUserBreadcrumb = ({ match }) => (
    <span>
        {StaticProducts.filter((item) => item._id === parseInt(match.params.productId))[0].name}
    </span>
);

const breadCrumbConfig = [
    {
        path: '/product',
        breadcrumb: 'Product',
    },
    {
        path: '/product/:productId',
        breadcrumb: DynamicUserBreadcrumb,
    },
];

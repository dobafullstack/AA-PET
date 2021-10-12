import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { GetProductByIdAction } from '../app/actions/product.action';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { BreadcrumbBar, MyModal, MyRating, ProductCarousel, RatingItem } from '../components/Common';
import { capitalize } from '../configs/TextFormat';
import VND from '../configs/VNDCurrency';
import CategoryType from '../types/CategoryType';
import ProductType from '../types/ProductType';

export function Product() {
    const [isOpen, setIsOpen] = useState(false);
    const product = useAppSelector(state => state.product.product);
    const breadcrumbs = useBreadcrumbs(breadCrumbConfig);
    const dispatch = useAppDispatch();
    const params = useParams();
    const { productId }: any = params;

    console.log("Product PAGE")

    useEffect(() => {
        dispatch(GetProductByIdAction(productId));
    }, [productId]);

    return (
        <div className="product-page">
            <MyModal isOpen={isOpen} setIsOpen={setIsOpen} />
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
                                <i className="fal fa-heart"></i>
                                <i className="fas fa-heart active"></i>
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
                            <div
                                className="d-flex align-items-center"
                                style={{ cursor: 'pointer' }}
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <i className="fal fa-comment-alt-lines me-2"></i>
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

const DynamicUserBreadcrumb = ({match}: any) => {
    const product = useAppSelector((state) => state.product.product);

    return <span>{product.name}</span>;
};

const DynamicCategoryBreadcrumb = ({match}: any) => {
    const categories = useAppSelector(state => state.category.categories);
    const {category_id} = match.params;
    const index = categories.findIndex((item: CategoryType) => item._id === category_id);
    return <span>{capitalize(categories[index].name)}</span>;
}

const DynamicCategoryDetailBreadcrumb = ({match}: any) => {
    const categories_detail = useAppSelector(state => state.category.detail_categories);
    const {category_detail_id} = match.params;
    const index = categories_detail.findIndex(
        (item: CategoryType) => item._id === category_detail_id
    );
    return <span>{capitalize(categories_detail[index].name)}</span>;
}

const breadCrumbConfig = [
    {
        path: '/category',
        breadcrumb: 'Category',
    },
    {
        path: '/category/:category_id',
        breadcrumb: DynamicCategoryBreadcrumb,
    },
    {
        path: '/category/:category_id/:category_detail_id',
        breadcrumb: DynamicCategoryDetailBreadcrumb,
    },
    {
        path: '/category/:category_id/:category_detail_id/:productId',
        breadcrumb: DynamicUserBreadcrumb,
    },
];

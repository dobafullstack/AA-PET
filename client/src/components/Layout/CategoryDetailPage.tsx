import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { GetProductByCategoryDetailIdAction } from '../../app/actions/product.action';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { capitalize } from '../../configs/TextFormat';
import CategoryDetailType from '../../types/CategoryDetailType';
import ProductType from '../../types/ProductType';
import { BreadcrumbBar, Filter, GridItem, ListItem, TopTitle } from '../Common';
import { DynamicCategoryBreadcrumb } from './CategoryPage';

interface CategoryDetailPageProps{
    products: ProductType[]
}

export const CategoryDetailPage = ({ products }: CategoryDetailPageProps) => {
    const breadcrumbs = useBreadcrumbs(breadCrumbCategoryDetailConfig);
    const [isGrid, setIsGrid] = useState(true);
    const params = useParams();
    const { category_detail_id }: any = params;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(GetProductByCategoryDetailIdAction(category_detail_id));
    }, [category_detail_id]);

    return (
        <div className="category-wrapper mb-5">
            <BreadcrumbBar breadcrumbs={breadcrumbs} />
            <TopTitle breadcrumbs={breadcrumbs} />
            <Filter isGrid={isGrid} setIsGrid={setIsGrid} />

            {isGrid ? (
                <Container className="grid-wrapper mt-5">
                    <Row>
                        {products.map((item) => (
                            <Col xl={3} lg={3} md={4} sm={4} className="my-2" key={item._id}>
                                <GridItem item={item} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            ) : (
                <Container className="list-wrapper mt-5">
                    {products.map((item) => (
                        <ListItem item={item} key={item._id} />
                    ))}
                </Container>
            )}
        </div>
    );
};

export const DynamicCategoryDetailBreadcrumb = ({ match }: any) => {
    const category_detail = useAppSelector((state) => state.category.detail_categories);

    return (
        <span>
            {capitalize(
                category_detail.filter((item: CategoryDetailType) => item._id === match.params.category_detail_id)[0]
                    .name
            )}
        </span>
    );
};

export const breadCrumbCategoryDetailConfig = [
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
];

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { GetProductByCategoryIdAction } from '../../app/actions/product.action';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { capitalize } from '../../configs/TextFormat';
import CategoryType from '../../types/CategoryType';
import ProductType from '../../types/ProductType';
import { BreadcrumbBar, Filter, GridItem, ListItem, TopTitle } from '../Common';

interface CategoryPageProps {
    products: ProductType[];
}

export const CategoryPage = ({ products }: CategoryPageProps) => {
    const breadcrumbs = useBreadcrumbs(breadCrumbCategoryConfig);
    const [isGrid, setIsGrid] = useState(true);
    const params = useParams();
    const { category_id }: any = params;
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log(category_id)
        // dispatch(GetProductByCategoryIdAction(category_id));
    }, [category_id]);

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

export const DynamicCategoryBreadcrumb = ({ match }: any) => {
    const categories = useAppSelector((state) => state.category.categories);
    return (
        <span>
            {capitalize(
                categories.filter((item: CategoryType) => item._id === match.params.category_id)[0]
                    .name
            )}
        </span>
    );
};

export const breadCrumbCategoryConfig = [
    {
        path: '/category',
        breadcrumb: 'Category',
    },
    {
        path: '/category/:category_id',
        breadcrumb: DynamicCategoryBreadcrumb,
    },
];

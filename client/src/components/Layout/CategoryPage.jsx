import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { capitalize } from '../../configs/TextFormat';
import { Col, Container, Row } from 'reactstrap';
import { BreadcrumbBar, TopTitle } from '../Common';
import Filter from '../Filter';
import GridItem from '../GridItem';
import ListItem from '../ListItem';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {GetProductByCategoryIdAction} from '../../app/actions/product.action'

export const CategoryPage = ({ products }) => {
    const breadcrumbs = useBreadcrumbs(breadCrumbCategoryConfig);
    const [isGrid, setIsGrid] = useState(true);
    const params = useParams();
    const {category_id} = params;
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetProductByCategoryIdAction(category_id));
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

export const DynamicCategoryBreadcrumb = ({ match }) => {
    const categories = useSelector((state) => state.category.categories);
    return (
        <span>
            {capitalize(categories.filter((item) => item._id === match.params.category_id)[0].name)}
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
import React, {useState, useEffect} from 'react';
import {DynamicCategoryBreadcrumb} from './CategoryPage'
import { useSelector } from 'react-redux';
import { capitalize } from '../../configs/TextFormat';
import { Col, Container, Row } from 'reactstrap';
import { BreadcrumbBar, TopTitle } from '../Common';
import Filter from '../Filter';
import GridItem from '../GridItem';
import ListItem from '../ListItem';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { useDispatch } from 'react-redux';
import {GetProductByCategoryDetailIdAction} from '../../app/actions/product.action'
import {useParams} from 'react-router-dom';

export const CategoryDetailPage = ({ products }) => {
    const breadcrumbs = useBreadcrumbs(breadCrumbCategoryDetailConfig);
    const [isGrid, setIsGrid] = useState(true);
    const params = useParams();
    const {category_detail_id} = params;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetProductByCategoryDetailIdAction(category_detail_id));
    }, [category_detail_id])

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

export const DynamicCategoryDetailBreadcrumb = ({ match }) => {
    const category_detail = useSelector((state) => state.category.detail_categories);

    return (
        <span>
            {capitalize(
                category_detail.filter((item) => item._id === match.params.category_detail_id)[0]
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


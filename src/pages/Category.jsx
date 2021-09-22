import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import BreadcrumbBar from '../components/BreadcrumbBar';
import Filter from '../components/Filter';
import ProductItem from '../components/ProductItem';
import StaticProducts from '../utils/StaticProduct';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

export function Category() {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route path="/">
                <CategoryItem products={StaticProducts} exact />
            </Route>
            <Route path={`${match.path}/:category`}>
                <CategoryItem products={StaticProducts} exact />
            </Route>
            <Route path={`${match.path}/:category/category_detail`}>
                <CategoryItem products={StaticProducts} exact />
            </Route>
        </Switch>
    );
}

const CategoryItem = ({products}) => {
    const match = useRouteMatch();
    const breadcrumbs = useBreadcrumbs();

    console.log(match)

    return (
        <div className="category-wrapper">
            <BreadcrumbBar breadcrumbs={breadcrumbs} />
            <div className="title-top mb-3">
                <span>{breadcrumbs[breadcrumbs.length - 1].breadcrumb}</span>
            </div>
            <Filter />

            <Container className="grid-wrapper mt-5">
                <Row>
                    {products.map((item) => (
                        <Col xl={3} lg={3} md={4} sm={4} className="my-2">
                            <ProductItem item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

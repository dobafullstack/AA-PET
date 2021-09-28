import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import CategoryWrapper from '../components/CategoryWrapper';
import { BreadcrumbBar, TopTitle } from '../components/Common';
import Filter from '../components/Filter';
import GridItem from '../components/GridItem';
import ListItem from '../components/ListItem';
import StaticProducts from '../utils/StaticProduct';

export function Category() {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route path={match.path} exact>
                <CategoryWrapper />
            </Route>
            <Route path={`${match.path}/:category`} exact>
                <CategoryItem products={StaticProducts} />
            </Route>
            <Route path={`${match.path}/:category/:category_detail`} exact>
                <CategoryItem products={StaticProducts} />
            </Route>
        </Switch>
    );
}

const CategoryItem = ({ products }) => {
    const breadcrumbs = useBreadcrumbs();
    const [isGrid, setIsGrid] = useState(true);

    return (
        <div className="category-wrapper mb-5">
            <BreadcrumbBar breadcrumbs={breadcrumbs} />
            <TopTitle />
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
                        <ListItem item={item} key={item._id}/>
                    ))}
                </Container>
            )}
        </div>
    );
};

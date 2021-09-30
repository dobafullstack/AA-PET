import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import CategoryWrapper from '../components/CategoryWrapper';
import StaticProducts from '../utils/StaticProduct';
import {CategoryPage} from '../components/Layout/CategoryPage'
import { CategoryDetailPage } from '../components/Layout/CategoryDetailPage';
import {useSelector} from 'react-redux';

export function Category() {
    const match = useRouteMatch();
    const products = useSelector((state) => state.product.products)

    return (
        <Switch>
            <Route path={match.path} exact>
                <CategoryWrapper />
            </Route>
            <Route path={`${match.path}/:category_id`} exact>
                <CategoryPage products={products} />
            </Route>
            <Route path={`${match.path}/:category_id/:category_detail_id`} exact>
                <CategoryDetailPage products={products} />
            </Route>
        </Switch>
    );
}


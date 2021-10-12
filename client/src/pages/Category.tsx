import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Product } from '.';
import { useAppSelector } from '../app/hooks';
import { CategoryWrapper } from '../components/Common';
import { CategoryDetailPage } from '../components/Layout/CategoryDetailPage';
import { CategoryPage } from '../components/Layout/CategoryPage';

export function Category() {
    const match = useRouteMatch();
    const products = useAppSelector((state) => state.product.products);

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

            <Route path={`${match.path}/:category_id/:category_detail_id/:productId`} exact>
                <Product />
            </Route>
        </Switch>
    );
}

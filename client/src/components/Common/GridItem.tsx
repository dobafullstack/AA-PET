import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import VND from '../../configs/VNDCurrency';
import { MyRating } from './index';
import ProductType from '../../types/ProductType';
import { useAppDispatch } from '../../app/hooks';
import { addToCart } from '../../app/reducers/cart.reducer';

interface GridItemProps{
    item: ProductType;
}

export function GridItem({ item }: GridItemProps) {
    const match = useRouteMatch()
    const dispatch = useAppDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(item))
    }
    const {category_id}: any = match.params
    const category_detail_id = item.category_detail_id._id

    const url = `/category/${category_id}/${category_detail_id}/${item._id}`;

    return (
        <div className="product-item-wrapper">
            <div className="img-wrapper">
                <Link className="img" to={`${url}`}>
                    <img src={item.img[0]} alt="" className="img-fluid" />
                </Link>
                <div className="sub-wrapper">
                    <button className="add-to-cart" onClick={handleAddToCart}>
                        Add to cart
                    </button>
                    <div className="favorite">
                        <i className="far fa-heart "></i>
                        <i className="fas fa-heart focus"></i>
                    </div>
                </div>
            </div>
            <Link to={`/product/${item._id}`}>
                <p className="item-name">{item.name}</p>
            </Link>
            <div className="d-flex justify-content-between">
                <span>{VND(item.price)}</span>
                <MyRating readonly point={item.rating_point} />
            </div>
        </div>
    );
}

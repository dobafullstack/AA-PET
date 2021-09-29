import React from 'react';
import { Link } from 'react-router-dom';
import VND from '../configs/VNDCurrency';
import { MyRating } from './Common';

export default function ProductItem({ item, type = 'grid' }) {
    return (
        <div className="product-item-wrapper">
            <div className="img-wrapper">
                <Link className="img" to={`/product/${item._id}`}>
                    <img src={item.images[0]} alt="" className="img-fluid" />
                </Link>
                <div className="sub-wrapper">
                    <button className="add-to-cart">Add to cart</button>
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
                {/* <ReactStars
                    activeColor="#ffd700"
                    value={item.rating_point}
                /> */}
                <MyRating readonly point={item.rating_point} />
            </div>
        </div>
    );
}

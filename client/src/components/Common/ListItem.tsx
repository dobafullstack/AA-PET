import React from 'react';
import { Row, Col } from 'reactstrap';
import VND from '../../configs/VNDCurrency';
import { MyRating } from './index';
import { Link } from 'react-router-dom';
import ProductType from '../../types/ProductType';

interface ListItemProps{
    item: ProductType
}

export function ListItem({ item }: ListItemProps) {
    return (
        <Row className="list-item-wrapper my-4">
            <Col xl={4} lg={4} className="d-flex justify-content-center align-item-center">
                <Link to={`/product/${item._id}`}>
                    <img src={item.img[0]} alt="" className="img-fluid" />
                </Link>
            </Col>
            <Col xl={8} lg={8}>
                <Link to={`/product/${item._id}`} className="product-name">
                    <h1>{item.name}</h1>
                </Link>
                <span className="me-2">{VND(item.price)}</span>
                <MyRating point={item.rating_point} readonly />
                <p className="description mt-4">{item.description}</p>
                <div className="mt-3 btn-group">
                    <button>Add to cart</button>
                    <div className="favorite ms-2">
                        <i className="fal fa-heart"></i>
                        <i className="fas fa-heart active"></i>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

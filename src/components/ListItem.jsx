import React from 'react';
import { Row, Col } from 'reactstrap';
import VND from '../configs/VNDCurrency';
import { MyRating } from './Common';
import { Link } from 'react-router-dom';

export default function ListItem({ item }) {
    return (
        <Row className="list-item-wrapper my-4">
            <Col xl={4} lg={4}>
                <Link to={`/product/${item._id}`}>
                    <img src={item.images[0]} alt="" className="img-fluid" />
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
                        <i class="fal fa-heart"></i>
                        <i class="fas fa-heart active"></i>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

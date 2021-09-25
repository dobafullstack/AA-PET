import React from 'react';
import { Col, Row, Table, Container } from 'reactstrap';
import CartItem from '../components/CartItem';
import products from '../utils/StaticProduct';

export function Cart() {
    const onUpdateCart = (index, value) => {
        console.log(index, value)
    }

    return (
        <div className="cart-wrapper">
            <div className="title-top mb-3 w-100">
                <span>Cart</span>
            </div>
            <Container>
                <Row className="mt-5">
                    <Col xl={8}>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th className="text-center">Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.slice(0, 2).map((item, index) => (
                                    <CartItem item={item} index={index} onUpdateCart={onUpdateCart} key={item._id}/>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                    <Col xl={4}>
                        <div className="order-summary">
                            <div className="header">
                                <span>Order Summary</span>
                            </div>
                            <div className="order-item" style={{ padding: '0.5rem 1.5rem' }}>
                                <span className="title">Subtotal</span>
                                <span className="price">$100</span>
                            </div>
                            <div className="order-item" style={{ padding: '0.5rem 1.5rem' }}>
                                <span className="title">Shipping</span>
                                <span className="price">Free</span>
                            </div>
                            <div className="footer">
                                <div className="order-item">
                                    <span className="title">Total</span>
                                    <span className="price">$100</span>
                                </div>
                            </div>
                        </div>
                        <button className="mt-2 btn-checkout">Checkout</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

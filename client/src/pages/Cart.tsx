import React from 'react';
import { Col, Row, Table, Container } from 'reactstrap';
import CartItem from '../components/Common/CartItem';
import { useHistory } from 'react-router-dom';
import useVerifyToken from '../hooks/useVerifyToken';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import VND from '../configs/VNDCurrency';
import { removeCart, updateCart } from '../app/reducers/cart.reducer';

export function Cart() {
    const history = useHistory();
    const isLogin = useVerifyToken();
    const cart = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch();

    const onUpdateCart = (index: number, value: -1 | 1) => {
        dispatch(updateCart({index, value}))
    };

    const onRemoveCart = (index: number) => {
        dispatch(removeCart({index}))
    }

    const handleCheckout = () => {
        if (!isLogin) {
            toast.error('Bạn chưa đăng nhập');
        } else {
            history.push('/cart/checkout');
        }
    };

    return (
        <div className="cart-wrapper">
            {cart.products.length === 0 ? <h1 className="mt-5">Bạn chưa thêm gì vào giỏ hàng</h1> : (
                <>
                    <div className="title-top mb-3 w-100">
                        <span>Cart</span>
                    </div>
                    <div style={{ paddingLeft: '20rem', paddingRight: '20rem' }}>
                        <Row className="mt-5">
                            <Col xl={8}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th className="text-center">Quantity</th>
                                            <th>Total</th>
                                            <th>#</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.products.map((item, index) => (
                                            <CartItem
                                                item={item}
                                                index={index}
                                                onUpdateCart={onUpdateCart}
                                                onRemoveCart={onRemoveCart}
                                                key={item.product._id}
                                            />
                                        ))}
                                    </tbody>
                                </Table>
                            </Col>
                            <Col xl={4}>
                                <div className="order-summary">
                                    <div className="header">
                                        <span>Order Summary</span>
                                    </div>
                                    <div
                                        className="order-item"
                                        style={{ padding: '0.5rem 1.5rem' }}
                                    >
                                        <span className="title">Subtotal</span>
                                        <span className="price">{VND(cart.totalPrice)}</span>
                                    </div>
                                    <div
                                        className="order-item"
                                        style={{ padding: '0.5rem 1.5rem' }}
                                    >
                                        <span className="title">Shipping</span>
                                        <span className="price">Free</span>
                                    </div>
                                    <div className="footer">
                                        <div className="order-item">
                                            <span className="title">Total</span>
                                            <span className="price">{VND(cart.totalPrice)}</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="mt-2 btn-checkout"
                                    onClick={() => handleCheckout()}
                                >
                                    Checkout
                                </button>
                            </Col>
                        </Row>
                    </div>
                </>
            )}
        </div>
    );
}

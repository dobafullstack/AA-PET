import React, { useState } from 'react';
import { BreadcrumbBar } from '../components/Common';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { Col, Row, Input, FormGroup, Label } from 'reactstrap';
import BankImg from '../assets/images/list-bank.png';
import MomoImg from '../assets/images/momo.png';
import ZaloPayImg from '../assets/images/zalopay.png';
import ShipCodImg from '../assets/images/shipcod.png';
import VND from '../configs/VNDCurrency';
import useGetUser from '../hooks/useGetUser';
import { useHistory } from 'react-router-dom';

export function Checkout() {
    const breadcrumbs = useBreadcrumbs();
    const user = useGetUser();
    const history = useHistory();

    return (
        <div className="checkout-wrapper">
            <BreadcrumbBar breadcrumbs={breadcrumbs} />
            <div className="checkout-body mt-5">
                <Delivery user={user}/>
                <hr />
                <Payment />
                <hr />
                <div className="checkout-footer">
                    <div className="confirm-wrapper">
                        <div className="d-flex justify-content-between confirm-item">
                            <span>Price</span>
                            <strong>59$</strong>
                        </div>
                        <div className="d-flex justify-content-between confirm-item">
                            <span>Ship fee</span>
                            <strong>1$</strong>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between confirm-item">
                            <span>Total</span>
                            <strong>60$</strong>
                        </div>
                        <button className="mt-3 w-100" onClick={() => history.push('/cart/checkout/success')}>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Delivery({user}){
    const [name, setName] = useState(user.name);
    const [address, setAddress] = useState(user.address);
    const [phone, setPhone] = useState(user.phone);

    return (
        <div className="delivery-wrapper">
            <h1 className="text-center mb-5">Delivery</h1>
            <Row>
                <Col xl={6}>
                    <FormGroup className="my-3">
                        <Label>
                            Name <strong className="text-danger">*</strong>
                        </Label>
                        <Input type="text" placeholder="Name" className="w-75" value={name} onChange={(e) => setName(e.target.value)}/>
                    </FormGroup>
                    <FormGroup className="my-3">
                        <Label>
                            Address <strong className="text-danger">*</strong>
                        </Label>
                        <Input type="address" placeholder="Address" className="w-75" value={address} onChange={(e) => setAddress(e.target.value)}/>
                    </FormGroup>
                    <FormGroup className="my-3">
                        <Label>
                            Phone number <strong className="text-danger">*</strong>
                        </Label>
                        <Input type="tel" placeholder="Phone" className="w-75" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </FormGroup>
                </Col>
                <Col xl={6}>
                    <FormGroup className="my-3">
                        <Label className="mb-1">Delivery methods</Label>
                        <Input type="select" className="w-50">
                            <option value="Viettel Post">Viettel Post</option>
                            <option value="Best Express">Best Express</option>
                            <option value="Giao hàng nhanh">Giao hàng nhanh</option>
                            <option value="Giao hàng tiết kiệm">Giao hàng tiết kiệm</option>
                        </Input>
                    </FormGroup>
                    <FormGroup className="my-3">
                        <Label className="mb-1">Delivery fee</Label>
                        <Input type="text" disabled style={{ width: '6.2%' }} value={VND(1)} />
                    </FormGroup>
                </Col>
            </Row>
        </div>
    );
}

function Payment(){
    const [paymentMethod, setPaymentMethod] = useState('ATM');

    return (
        <div className="payment-wrapper">
            <h1 className="text-center mb-5">Payment</h1>
            <Row>
                <Col
                    xl={3}
                    className="d-flex flex-column justify-content-center align-items-center"
                >
                    <input
                        type="radio"
                        name="bank"
                        onClick={() => setPaymentMethod('ATM')}
                        checked={paymentMethod === 'ATM' ? true : false}
                    />
                    <img
                        className="img-fluid my-2 method"
                        src={BankImg}
                        alt=""
                        onClick={() => setPaymentMethod('ATM')}
                    />
                    <strong style={{ fontFamily: 'Roboto', fontSize: '1.3rem' }}>
                        ATM nội địa
                    </strong>
                </Col>
                <Col
                    xl={3}
                    className="d-flex flex-column justify-content-center align-items-center"
                >
                    <input
                        type="radio"
                        name="bank"
                        onClick={() => setPaymentMethod('Momo')}
                        checked={paymentMethod === 'Momo' ? true : false}
                    />
                    <img
                        className="img-fluid my-2 method"
                        width="100px"
                        src={MomoImg}
                        alt=""
                        onClick={() => setPaymentMethod('Momo')}
                    />
                    <strong style={{ fontFamily: 'Roboto', fontSize: '1.3rem' }}>Momo</strong>
                </Col>
                <Col
                    xl={3}
                    className="d-flex flex-column justify-content-center align-items-center"
                >
                    <input
                        type="radio"
                        name="bank"
                        onClick={() => setPaymentMethod('Zalo')}
                        checked={paymentMethod === 'Zalo' ? true : false}
                    />
                    <img
                        className="img-fluid my-2 method"
                        width="100px"
                        src={ZaloPayImg}
                        alt=""
                        onClick={() => setPaymentMethod('Zalo')}
                    />
                    <strong style={{ fontFamily: 'Roboto', fontSize: '1.3rem' }}>ZaloPay</strong>
                </Col>
                <Col
                    xl={3}
                    className="d-flex flex-column justify-content-center align-items-center"
                >
                    <input
                        type="radio"
                        name="bank"
                        onClick={() => setPaymentMethod('COD')}
                        checked={paymentMethod === 'COD' ? true : false}
                    />
                    <img
                        className="img-fluid my-2 method"
                        width="100px"
                        src={ShipCodImg}
                        alt=""
                        onClick={() => setPaymentMethod('COD')}
                    />
                    <strong style={{ fontFamily: 'Roboto', fontSize: '1.3rem' }}>
                        Thanh toán khi nhận hàng
                    </strong>
                </Col>
            </Row>
        </div>
    );
}

import React, { useEffect, useState } from 'react';
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
import UserType from '../types/UserType';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { toast } from 'react-toastify';
import CreateOrderInput from '../types/CreateOrderInput';
import { ResponseType } from '../api/axiosClient';
import { createOrderApi } from '../api/orderApi';
import { removeAll } from '../app/reducers/cart.reducer';

interface CommonProps {
    user?: UserType;
    name?: string;
    address?: string;
    phone?: string;
    setName?: React.Dispatch<React.SetStateAction<string>>;
    setAddress?: React.Dispatch<React.SetStateAction<string>>;
    setPhone?: React.Dispatch<React.SetStateAction<string>>;
    paymentMethod?: string;
    setPaymentMethod?: React.Dispatch<React.SetStateAction<string>>;
    deliveryMethod?: string;
    setDeliveryMethod?: React.Dispatch<React.SetStateAction<string>>;
}

export function Checkout() {
    const user = useGetUser();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('ATM');
    const [deliveryMethod, setDeliveryMethod] = useState('Viettel Post');
    const breadcrumbs = useBreadcrumbs();
    const history = useHistory();
    const cart = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();

    const handleCheckout = async () => {
        if (name === '' || address === '' || phone === '') {
            toast.error('Mời nhập thông tin giao hàng');
            return;
        }
        const products = cart.products.map((item) => {
            return {
                product_id: item.product._id,
                count: item.count,
            };
        });

        const body: CreateOrderInput = {
            user_id: user._id,
            products,
            delivery_info: {
                name,
                address,
                phone,
            },
            delivery_method: deliveryMethod,
            payment_method: paymentMethod,
            totalPrice: cart.totalPrice,
        };

        //create order
        const { code, result, error } = await createOrderApi(body);

        if (error !== null) {
            toast.error(error?.message);
            return;
        }

        if (code !== 200) {
            toast.error(result);
            return;
        }
        dispatch(removeAll());
        history.push('/cart/checkout/success');
    };

    return (
        <div className="checkout-wrapper">
            <BreadcrumbBar breadcrumbs={breadcrumbs} />
            <div className="checkout-body mt-5">
                <Delivery
                    setName={setName}
                    setAddress={setAddress}
                    setPhone={setPhone}
                    name={name}
                    address={address}
                    phone={phone}
                    deliveryMethod={deliveryMethod}
                    setDeliveryMethod={setDeliveryMethod}
                />
                <hr />
                <Payment paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
                <hr />
                <div className="checkout-footer">
                    <div className="confirm-wrapper">
                        <div className="d-flex justify-content-between confirm-item">
                            <span>Price</span>
                            <strong>{VND(cart.totalPrice)}</strong>
                        </div>
                        <div className="d-flex justify-content-between confirm-item">
                            <span>Ship fee</span>
                            <strong>1$</strong>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between confirm-item">
                            <span>Total</span>
                            <strong>{VND(cart.totalPrice)}</strong>
                        </div>
                        <button className="mt-3 w-100" onClick={() => handleCheckout()}>
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Delivery(props: CommonProps) {
    const { name, address, phone } = props;
    const setName = props.setName as React.Dispatch<React.SetStateAction<string>>;
    const setAddress = props.setAddress as React.Dispatch<React.SetStateAction<string>>;
    const setPhone = props.setPhone as React.Dispatch<React.SetStateAction<string>>;
    const setDeliveryMethod = props.setDeliveryMethod as React.Dispatch<
        React.SetStateAction<string>
    >;

    return (
        <div className="delivery-wrapper">
            <h1 className="text-center mb-5">Delivery</h1>
            <Row>
                <Col xl={6}>
                    <FormGroup className="my-3">
                        <Label>
                            Name <strong className="text-danger">*</strong>
                        </Label>
                        <Input
                            type="text"
                            placeholder="Name"
                            className="w-75"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup className="my-3">
                        <Label>
                            Address <strong className="text-danger">*</strong>
                        </Label>
                        <Input
                            placeholder="Address"
                            className="w-75"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup className="my-3">
                        <Label>
                            Phone number <strong className="text-danger">*</strong>
                        </Label>
                        <Input
                            type="tel"
                            placeholder="Phone"
                            className="w-75"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </FormGroup>
                </Col>
                <Col xl={6}>
                    <FormGroup className="my-3">
                        <Label className="mb-1">Delivery methods</Label>
                        <Input
                            type="select"
                            className="w-50"
                            onChange={(e) => setDeliveryMethod(e.target.value)}
                        >
                            <option value="Viettel Post">Viettel Post</option>
                            <option value="Best Express">Best Express</option>
                            <option value="Giao hàng nhanh">Giao hàng nhanh</option>
                            <option value="Giao hàng tiết kiệm">Giao hàng tiết kiệm</option>
                        </Input>
                    </FormGroup>
                    <FormGroup className="my-3">
                        <Label className="mb-1">Delivery fee</Label>
                        <Input
                            type="text"
                            disabled
                            style={{ width: '6.2%' }}
                            value={VND(1) as string}
                        />
                    </FormGroup>
                </Col>
            </Row>
        </div>
    );
}

function Payment(props: CommonProps) {
    const { paymentMethod } = props;
    const setPaymentMethod = props.setPaymentMethod as React.Dispatch<React.SetStateAction<string>>;

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

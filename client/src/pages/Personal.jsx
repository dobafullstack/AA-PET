import React, { useState } from 'react';
import { Button, Col, Input, Row } from 'reactstrap';
import DollarImg from '../assets/images/$.png';
import CatImg from '../assets/images/cat.png';
import DogImg from '../assets/images/dog.png';
import Bg from '../assets/images/PersonalBg.png';
import useGetUser from '../hooks/useGetUser';
import StaticOrder from '../utils/StaticOrder';
import VND from '../configs/VNDCurrency';
import formatDate from '../configs/FormatDateTime';

export function Personal() {
    const user = useGetUser();
    const [tab, setTab] = useState('profile');

    return (
        <div className="personal-wrapper">
            <img src={Bg} alt="" width="100%" className="background" />

            <div className="body-wrapper">
                <Row>
                    <Col xl={2} className="left me-5">
                        <div className="avt"></div>
                        <span>{user.name}</span>
                        <div className="pet-count my-3">
                            <span>Your pet:</span>
                            <div className="pet-item mx-3">
                                <img src={DogImg} alt="" />
                                <span>1</span>
                            </div>
                            <div className="pet-item mx-3">
                                <img src={CatImg} alt="" />
                                <span>1</span>
                            </div>
                        </div>
                        <p className="w-100">
                            Total spent:{' '}
                            <span>
                                <img src={DollarImg} alt="" />
                                300
                            </span>
                        </p>
                    </Col>
                    <Col xl={9} className="right">
                        {tab === 'profile' && <Profile user={user} />}
                        {tab === 'history' && <History orders={StaticOrder} />}
                        {tab === 'order' && <Order orders={StaticOrder} />}
                    </Col>
                    <div className="tab-controller">
                        <div
                            className={`tab-item ${tab === 'profile' ? 'active' : ''}`}
                            onClick={() => setTab('profile')}
                        >
                            <i className="fal fa-id-card"></i>
                            <span>Profile</span>
                        </div>
                        <div
                            className={`tab-item ${tab === 'history' ? 'active' : ''}`}
                            onClick={() => setTab('history')}
                        >
                            <i className="far fa-history"></i>
                            <span>History</span>
                        </div>
                        <div
                            className={`tab-item ${tab === 'order' ? 'active' : ''}`}
                            onClick={() => setTab('order')}
                        >
                            <i className="fal fa-gift"></i>
                            <span>Order</span>
                        </div>
                    </div>
                </Row>
            </div>
        </div>
    );
}

function Profile({ user }) {
    const [isEdit, setIsEdit] = useState(false);
    const [address, setAddress] = useState(user.address);
    const [phone, setPhone] = useState(user.phone);
    const [email, setEmail] = useState(user.email);

    return (
        <div className="profile-wrapper">
            {isEdit ? (
                <div className="edit-profile">
                    <div className="edit-item">
                        <i className="fad fa-home-lg me-2"></i>
                        <span>Address</span>
                        <Input
                            className="w-50 my-2"
                            type="text"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="edit-item">
                        <i className="fal fa-phone me-2"></i>
                        <span>Phone</span>
                        <Input
                            className="w-50 my-2"
                            type="text"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="edit-item">
                        <i className="fal fa-mail-bulk me-2"></i>
                        <span>Email</span>
                        <Input
                            className="w-50 my-2"
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mt-3 d-flex justify-content-end w-50">
                        <Button color="success me-2">Update</Button>
                        <Button color="danger" onClick={() => setIsEdit(false)}>
                            Cancel
                        </Button>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="edit-controller" onClick={() => setIsEdit(!isEdit)}>
                        <i className="fal fa-edit"></i>
                        <span>Edit</span>
                    </div>
                    <div className="display-profile">
                        <div className="profile-item">
                            <i className="fad fa-home-lg"></i>
                            <span>
                                <strong>Address:</strong>&nbsp;{user.address}
                            </span>
                        </div>
                        <div className="profile-item">
                            <i className="fal fa-phone"></i>
                            <span>
                                <strong>Phone:</strong>&nbsp;{user.phone}
                            </span>
                        </div>
                        <div className="profile-item">
                            <i className="fal fa-mail-bulk"></i>
                            <span>
                                <strong>Email:</strong>&nbsp;{user.email}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function History({ orders }) {
    const getTotalPrice = (index) => {
        let totalPrice = 0;

        orders[index].products.forEach(item => {
            totalPrice += item.product.price;
        });

        return VND(totalPrice);
    }

    return (
        <div className="history-wrapper">
            {orders.map((item, index) => (
                <div className="history-item me-5" key={item._id}>
                    <h3>#{item._id}</h3>
                    <div className="header">
                        <p>{formatDate(item.createdAt)}</p>
                        <p>{item.user_id.address}</p>
                    </div>
                    <hr />
                    {item.products.map((historyItem) => (
                        <div className="product-item" key={historyItem.product._id}>
                            <div className="history-left">
                                <img
                                    src={historyItem.product.images[0]}
                                    alt=""
                                    className="img-fluid"
                                />
                                <div>
                                    <p>{historyItem.product.name}</p>
                                    <p>{VND(historyItem.product.price)}</p>
                                </div>
                            </div>
                            <span>x{historyItem.count}</span>
                        </div>
                    ))}
                    <hr />
                    <div className="footer">
                        <div className="f-left">
                            <p>
                                x{item.products.length}{' '}
                                {item.products.length === 1 ? 'item' : 'items'}
                            </p>
                            <p>{getTotalPrice(index)}</p>
                        </div>
                        <div className="f-right">
                            {item.status === 0 ? (
                                <span className="text-danger">Cancel</span>
                            ) : (
                                <span className="text-success">Delivered</span>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function Order({ orders }) {

    const getTotalPrice = (index) => {
        let totalPrice = 0;

        orders[index].products.forEach((item) => {
            totalPrice += item.product.price;
        });

        return VND(totalPrice);
    };

    return (
        <div className="history-wrapper">
            {orders.map((item, index) => (
                <div className="history-item me-5" key={item._id}>
                    <h3>#{item._id}</h3>
                    <div className="header">
                        <p>{formatDate(item.createdAt)}</p>
                        <p>{item.user_id.address}</p>
                    </div>
                    <hr />
                    {item.products.map((historyItem) => (
                        <div className="product-item" key={historyItem.product._id}>
                            <div className="history-left">
                                <img
                                    src={historyItem.product.images[0]}
                                    alt=""
                                    className="img-fluid"
                                />
                                <div>
                                    <p>{historyItem.product.name}</p>
                                    <p>{VND(historyItem.product.price)}</p>
                                </div>
                            </div>
                            <span>x{historyItem.count}</span>
                        </div>
                    ))}
                    <hr />
                    <div className="footer">
                        <div className="f-left">
                            <p>
                                x{item.products.length}{' '}
                                {item.products.length === 1 ? 'item' : 'items'}
                            </p>
                            <p>{getTotalPrice(index)}</p>
                        </div>
                        <div className="f-right">
                            <div className="confirm me-3">
                                <i className="fal fa-check"></i>
                            </div>
                            <div className="remove">
                                <i className="fal fa-times"></i>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

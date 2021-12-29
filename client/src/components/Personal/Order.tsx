import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useGetMyOrderQuery } from '../../app/reducers/order.reducer';
import VND from '../../configs/VND';
import OrderModel from '../../models/Order';
import formatDate from '../../utils/formatDate';
import Loading from '../Layout/Loading';

interface Props {}

export default function Order({}: Props): ReactElement {
    const { data, isFetching } = useGetMyOrderQuery(null);
    const [selectedOrder, setSelectedOrder] = useState('');

    if (isFetching)
        return (
            <div className='tab-pane fade' id='orders' role='tabpanel'>
                <Loading />
            </div>
        );

    return (
        <div className='tab-pane fade' id='orders' role='tabpanel'>
            <div className='myaccount-content'>
                <h3 className='title'>Orders</h3>
                {selectedOrder === '' ? (
                    <ListOrder
                        orders={data ? data.result : []}
                        setSelectedOrder={setSelectedOrder}
                    />
                ) : (
                    <OrderDetail
                        order={data ? data.result.find((o) => o._id === selectedOrder) : null}
                        setSelectedOrder={setSelectedOrder}
                    />
                )}
            </div>
        </div>
    );
}

function ListOrder({
    orders,
    setSelectedOrder,
}: {
    orders: OrderModel[];
    setSelectedOrder: Dispatch<SetStateAction<string>>;
}) {
    return (
        <>
            <div className='myaccount-table table-responsive text-center'>
                <table className='table table-bordered'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Order</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order._id}>
                                <td>{index + 1}</td>
                                <td>{formatDate(new Date(order.created_at))}</td>
                                <td style={{ textTransform: 'capitalize' }}>
                                    {order.delivery.status}
                                </td>
                                <td>{VND(order.total)}</td>
                                <td>
                                    <button
                                        onClick={() => setSelectedOrder(order._id)}
                                        className='btn btn btn-dark btn-hover-primary btn-sm rounded-0'
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

function OrderDetail({ order, setSelectedOrder }: { order: OrderModel | null | undefined, setSelectedOrder: Dispatch<SetStateAction<string>> }) {
    if (!order) return <Loading />;

    return (
        <div
            className='myaccount-table table-responsive text-center'
            style={{ overflow: 'hidden' }}
        >
            <h5>List products</h5>
            <table className='table table-bordered'>
                <thead className='thead-light'>
                    <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sub total</th>
                    </tr>
                </thead>
                <tbody>
                    {order.products.map((item) => (
                        <tr key={item.product._id}>
                            <td style={{maxWidth: '88.38px'}}>
                                <img src={item.product.images[0]} alt='' width='100%' />
                            </td>
                            <td>{item.product.name}</td>
                            <td>{VND(item.product.price)}</td>
                            <td>{item.quantity}</td>
                            <td>{VND(item.product.price * item.quantity)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='row justify-content-end'>
                <div className='col-lg-12'>
                    <div
                        className='myaccount-table table-responsive text-center'
                        style={{ overflow: 'hidden' }}
                    >
                        <h5>Thông tin giao hàng</h5>
                        <table className='table table-bordered'>
                            <thead className='thead-light'>
                                <tr>
                                    <th>Họ và tên</th>
                                    <th>Số điện thoại</th>
                                    <th>Địa chỉ</th>
                                    <th>Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{order.delivery.name}</td>
                                    <td>{order.delivery.phone}</td>
                                    <td>{order.delivery.address}</td>
                                    <td>
                                        <div className={`badge badge-${order.delivery.status === 'pending' ? 'warning' : order.delivery.status === 'canceled' ? 'danger' : 'success'}`}>
                                            {order.delivery.status}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div
                        className='myaccount-table table-responsive text-center'
                        style={{ overflow: 'hidden' }}
                    >
                        <h5>Thông tin thanh toán</h5>
                        <table className='table table-bordered'>
                            <thead className='thead-light'>
                                <tr>
                                    <th>Phương thức</th>
                                    <th>Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div className={`badge badge-${order.payment.method === 'cash' ? "success" : 'primary'}`}>{order.payment.method === 'cash' ? 'Tiền Mặt' : 'Paypal'}</div></td>
                                    <td><div className={`badge badge-${order.payment.status ? 'success' : 'danger'}`}>{order.payment.status ? 'Đã thanh toán' : 'Chưa thanh toán'}</div></td>
                                </tr>
                              
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary mt-5 me-4" onClick={() => setSelectedOrder('')}>Quay lại</button>
            <button className="btn btn-danger mt-5">Hủy đơn hàng</button>
        </div>
    );
}

import React, { ReactElement, useEffect, useState } from "react";
import orderApi from "../../../api/orderApi";
import Order from "../../../models/Order";
import formatDate from "../../../utils/formatDate";
import VND from "../../../utils/VND";

interface Props {}

export default function Recent({}: Props): ReactElement {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const fetchingOrder = async () => {
            orderApi
                .getAllOrders("pending")
                .then((res) => setOrders(res.result))
                .catch((err) => console.log(err));
        };

        fetchingOrder();
    }, []);

    return (
        <div className='row'>
            <div className='col-md-12 stretch-card'>
                <div className='card'>
                    <div className='card-body'>
                        <p className='card-title'>Recent Purchases</p>
                        <div className='table-responsive'>
                            <table
                                id='recent-purchases-listing'
                                className='table'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Products</th>
                                        <th>Total</th>
                                        <th>Payment</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order) => (
                                        <tr>
                                            <td>{order.delivery.name}</td>
                                            <td>
                                                <div className='badge badge-warning'>
                                                    {order.delivery.status}
                                                </div>
                                            </td>
                                            <td>{order.products.length}</td>
                                            <td>{VND(order.total)}</td>
                                            <td>
                                                <div className={`badge badge-${order.payment.status ? 'success' : 'danger'}`}>
                                                    {order.payment.status
                                                        ? "Đã thanh toán"
                                                        : "Chưa thanh toán"}
                                                </div>
                                            </td>
                                            <td>
                                                {formatDate(order.created_at)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

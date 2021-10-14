import React, { useState } from "react";
import { GiftColorImg } from "../assets/images";
import { TopTitle } from "../components/Common";
import "../assets/sass/pages/order.scss";
import { Col, Row } from "reactstrap";
import { OrderItem } from "../components/Common/OrderItem";
import { orders } from "../utils/";

type StatusType = "pending" | "success" | "canceled";

export const Order = () => {
    const [status, setStatus] = useState<StatusType>("pending");

    return (
        <div className='order-wrapper'>
            <TopTitle
                img={GiftColorImg}
                title='Order'
                subTitle='Manage order'
            />
            <p className='status'>{status}</p>
            <div className='status-wrapper'>
                <div
                    className={`status-item pending ${
                        status === "pending" && "active"
                    }`}
                    onClick={() => setStatus("pending")}>
                    <p>#1</p>
                    <i className='far fa-spinner'></i>
                </div>
                <div
                    className={`status-item success ${
                        status === "success" && "active"
                    }`}
                    onClick={() => setStatus("success")}>
                    <p>#2</p>
                    <i className='fal fa-check'></i>
                </div>
                <div
                    className={`status-item canceled ${
                        status === "canceled" && "active"
                    }`}
                    onClick={() => setStatus("canceled")}>
                    <p>#3</p>
                    <i className='fal fa-times'></i>
                </div>
            </div>

            <Row className='mt-5'>
                {orders.filter(item => item.status === status).map((item) => (
                    <Col xl={4} key={item._id} className="mb-5">
                        <OrderItem order={item} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

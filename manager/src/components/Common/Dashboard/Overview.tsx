import React, { ReactElement, useEffect, useState } from "react";
import billApi from "../../../api/billApi";
import orderApi from "../../../api/orderApi";
import ProductApi from "../../../api/ProductApi";
import Bill from "../../../models/Bill";
import Order from "../../../models/Order";
import Product from "../../../models/Product";
import VND from "../../../utils/VND";

interface Props {
    bills: Bill[];
    orders: Order[];
    products: Product[];
}

export default function Overview({
    bills,
    orders,
    products,
}: Props): ReactElement {
    return (
        <div className='row'>
            <div className='col-md-12 grid-margin stretch-card'>
                <div className='card'>
                    <div className='card-body dashboard-tabs p-0'>
                        <div className='tab-content py-0 px-0'>
                            <div
                                className='tab-pane fade show active'
                                id='overview'
                                role='tabpanel'
                                aria-labelledby='overview-tab'>
                                <div className='d-flex flex-wrap justify-content-xl-between'>
                                    <div className='d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item'>
                                        <i className='mdi mdi-currency-usd mr-3 icon-lg text-danger'></i>
                                        <div className='d-flex flex-column justify-content-around'>
                                            <small className='mb-1 text-muted'>
                                                Revenue
                                            </small>
                                            <h5 className='mr-2 mb-0'>
                                                {VND(
                                                    bills.reduce(
                                                        (prev, cur) =>
                                                            prev + cur.total,
                                                        0
                                                    )
                                                )}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className='d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item'>
                                        <i className='mdi mdi-tag mr-3 icon-lg text-success'></i>
                                        <div className='d-flex flex-column justify-content-around'>
                                            <small className='mb-1 text-muted'>
                                                Total orders
                                            </small>
                                            <h5 className='mr-2 mb-0'>
                                                {orders.length}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className='d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item'>
                                        <i className='mdi mdi-truck mr-3 icon-lg text-warning'></i>
                                        <div className='d-flex flex-column justify-content-around'>
                                            <small className='mb-1 text-muted'>
                                                Saled Count
                                            </small>
                                            <h5 className='mr-2 mb-0'>
                                                {products.reduce(
                                                    (prev, cur) =>
                                                        (prev +=
                                                            cur.saled_count),
                                                    0
                                                )}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className='d-flex py-3 border-md-right flex-grow-1 align-items-center justify-content-center p-3 item'>
                                        <i className='mdi mdi-percent mr-3 icon-lg text-danger'></i>
                                        <div className='d-flex flex-column justify-content-around'>
                                            <small className='mb-1 text-muted'>
                                                Sale Items
                                            </small>
                                            <h5 className='mr-2 mb-0'>
                                                {products.reduce(
                                                    (prev, cur) => {
                                                        if (
                                                            cur.discount_value >
                                                            0
                                                        )
                                                            return (prev += 1);
                                                        return prev;
                                                    },
                                                    0
                                                )}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

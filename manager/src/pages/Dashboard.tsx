import React, { ReactElement, useEffect, useState } from "react";
import billApi from "../api/billApi";
import orderApi from "../api/orderApi";
import ProductApi from "../api/ProductApi";
import { Chart, Overview, Recent } from "../components";
import Bill from "../models/Bill";
import Order from "../models/Order";
import Product from "../models/Product";

interface Props {}

export default function Dashboard({}: Props): ReactElement {
    const [bills, setBills] = useState<Bill[]>([]);
    const [orders, setOrders] = useState<Order[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        billApi
            .getAllBills()
            .then((res) => {
                setBills(res.result);
            })
            .catch((err) => console.log(err));

        orderApi
            .getAllOrders()
            .then((res) => setOrders(res.result))
            .catch((err) => console.log(err));

        ProductApi.getAllProducts()
            .then((res) => setProducts(res.result))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <div className='row'>
                <div className='col-md-12 grid-margin'>
                    <div className='d-flex justify-content-between flex-wrap'>
                        <div className='d-flex align-items-end flex-wrap'>
                            <div className='mr-md-3 mr-xl-5'>
                                <h2>Welcome back,</h2>
                                <p className='mb-md-0'>
                                    Your analytics dashboard.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Overview bills={bills} orders={orders} products={products} />
            <Chart bills={bills} orders={orders} products={products} />
            <Recent />
        </>
    );
}

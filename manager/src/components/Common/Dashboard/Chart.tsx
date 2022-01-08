import React, { ReactElement } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import Bill from "../../../models/Bill";
import { CashDeposits, RevenueData, SaleCount } from "../../../utils/chart-data";
import Order from "../../../models/Order";
import Product from "../../../models/Product";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top" as const,
        },
        title: {
            display: true,
            text: "Chart.js Bar Chart",
        },
    },
};

interface Props {
    bills: Bill[];
    orders: Order[];
    products: Product[];
}

export default function Chart({bills, orders, products}: Props): ReactElement {
    const dataBar = CashDeposits(orders, bills);
    const dataLine = SaleCount(orders);

    const totalSale = products.reduce((prev, cur) => prev + cur.saled_count, 0);

    return (
        <>
            <div className='row'>
                <div className='col-md-7 grid-margin stretch-card'>
                    <div className='card'>
                        <div className='card-body'>
                            <p className='card-title'>Cash deposits</p>
                            <p className='mb-4'>
                                To start a blog, think of a topic about and
                                first brainstorm party is ways to write details
                            </p>
                            <div
                                id='cash-deposits-chart-legend'
                                className='d-flex justify-content-center pt-3'>
                                <Bar data={dataBar} options={options} />
                            </div>
                            <canvas id='cash-deposits-chart'></canvas>
                        </div>
                    </div>
                </div>
                <div className='col-md-5 grid-margin stretch-card'>
                    <div className='card'>
                        <div className='card-body'>
                            <p className='card-title'>Total sales</p>
                            <h1>{totalSale}</h1>
                            <h4>Gross sales over the years</h4>
                            <p className='text-muted'>
                                Today, many people rely on computers to do
                                homework, work, and create or store useful
                                information. Therefore, it is important{" "}
                            </p>
                            <div id='total-sales-chart-legend'>
                                <Line data={dataLine} />
                            </div>
                        </div>
                        <canvas id='total-sales-chart'></canvas>
                    </div>
                </div>
            </div>
        </>
    );
}

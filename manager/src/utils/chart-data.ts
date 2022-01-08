import Bill from "../models/Bill";
import Order from "../models/Order";
import Product from "../models/Product";

const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

export const CashDeposits = (orders: Order[], bills: Bill[]) => ({
    labels,
    datasets: [
        {
            label: "Order",
            data: RevenueData(orders),
            fill: false,
            backgroundColor: "rgba(75,192,192,1)",
        },
        {
            label: "Revenue",
            data: RevenueData(bills),
            fill: false,
            backgroundColor: "#742774",
        },
    ],
});

export const SaleCount = (orders: Order[]) => ({
    labels,
    datasets: [
        {
            label: "Sale Count",
            data: TotalSaleCount(orders),
            fill: false,
            backgroundColor: "rgba(75,192,192,1)",
        },
    ],
});

export function RevenueData(list: any[]) {
    const data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    list.forEach((l) => {
        const date = new Date(Date.parse(l.created_at));

        let month = date.getMonth() === 0 ? 1 : date.getMonth();

        data[month - 1] += l.total;
    })

    return data;
}

function TotalSaleCount(orders: Order[]){
    const data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    orders.forEach((order) => {
        const date = new Date(Date.parse(order.created_at));

        let month = date.getMonth() === 0 ? 1 : date.getMonth();

        order.products.forEach(product => {
            data[month - 1] += product.product.saled_count + product.quantity;
        })
    });

    return data;
}

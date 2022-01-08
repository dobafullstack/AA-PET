import React, {
    Dispatch,
    ReactElement,
    SetStateAction,
    useEffect,
    useState,
} from "react";
import { toast } from "react-toastify";
import { Button, FormGroup, Input, Label } from "reactstrap";
import billApi from "../api/billApi";
import orderApi from "../api/orderApi";
import { ModalLayout } from "../components";
import Td from "../components/Common/Td";
import { CommonLayout } from "../Layout/AppLayout";
import Order from "../models/Order";
import formatDate from "../utils/formatDate";
import VND from "../utils/VND";

interface Props {}

interface ModalProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    selectedItem: string;
}

export default function Orders({}: Props): ReactElement {
    const [orders, setOrders] = useState<Order[]>([]);

    const fetchingOrder = async () =>
        orderApi
            .getAllOrders()
            .then((res) => setOrders(res.result))
            .catch((err) => console.log(err));

    useEffect(() => {
        fetchingOrder();
    }, []);

    return (
        <CommonLayout
            DetailModal={DetailModal}
            onDelete={() => null}
            onReload={() => fetchingOrder()}>
            <h4 className='card-title'>Striped Table</h4>
            <div className='table-responsive'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Delivery Status</th>
                            <th>Payment Method</th>
                            <th>Payment Status</th>
                            <th>Bill Status</th>
                            <th>Total</th>
                            <th>CreatedAt</th>
                            <th>UpdatedAt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id}>
                                <Td id={order._id}>
                                    {order.userId === null ||
                                    order.userId === undefined ? (
                                        <div className='badge badge-danger'>
                                            Khách vãng lai
                                        </div>
                                    ) : (
                                        <div className='badge badge-primary'>
                                            {order.userId?.name}
                                        </div>
                                    )}
                                </Td>
                                <Td id={order._id}>
                                    {order.delivery.status === "pending" && (
                                        <div className='badge badge-warning'>
                                            {order.delivery.status}
                                        </div>
                                    )}
                                    {order.delivery.status === "canceled" && (
                                        <div className='badge badge-danger'>
                                            {order.delivery.status}
                                        </div>
                                    )}
                                    {order.delivery.status === "success" && (
                                        <div className='badge badge-success'>
                                            {order.delivery.status}
                                        </div>
                                    )}
                                </Td>
                                <Td id={order._id}>
                                    {order.payment.method === "cash" && (
                                        <div className='badge badge-success'>
                                            {order.payment.method}
                                        </div>
                                    )}
                                    {order.payment.method === "paypal" && (
                                        <div className='badge badge-primary'>
                                            {order.payment.method}
                                        </div>
                                    )}
                                </Td>
                                <Td id={order._id}>
                                    {order.payment.status ? (
                                        <div className='badge badge-success'>
                                            Đã thanh toán
                                        </div>
                                    ) : (
                                        <div className='badge badge-danger'>
                                            Chưa thanh toán
                                        </div>
                                    )}
                                </Td>
                                <Td id={order._id}>
                                    {order.haveInBill ? (
                                        <div className='badge badge-success'>
                                            Đã lên bill
                                        </div>
                                    ) : (
                                        <div className='badge badge-warning'>
                                            Chưa lên bill
                                        </div>
                                    )}
                                </Td>
                                <Td id={order._id}>{VND(order.total)}</Td>
                                <Td id={order._id}>
                                    {formatDate(order.created_at)}
                                </Td>
                                <Td id={order._id}>
                                    {formatDate(order.updated_at)}
                                </Td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </CommonLayout>
    );
}

function DetailModal({
    isOpen,
    setIsOpen,
    selectedItem,
}: ModalProps): ReactElement {
    const [order, setOrder] = useState<Order>();

    const onSubmit = () => console.log("asgfaga");

    const createBill = () => {
        selectedItem !== "" &&
            billApi
                .createBill(selectedItem)
                .then((res) => toast.success(res.result))
                .catch((err) => console.log(err));
    };

    const cancelOrder = () => {
        selectedItem !== "" &&
            orderApi
                .cancelOrder(selectedItem)
                .then((res) => toast.success(res.result))
                .catch((err) => console.log(err));
    };

    const completeOrder = () => {
        selectedItem !== "" &&
            orderApi
                .completeOrder(selectedItem)
                .then((res) => toast.success(res.result))
                .catch((err) => console.log(err));
    };

    useEffect(() => {
        selectedItem !== "" &&
            orderApi
                .getDetailOrder(selectedItem)
                .then((res) => setOrder(res.result))
                .catch((err) => console.log(err));
    }, [selectedItem, isOpen]);

    return (
        <ModalLayout
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onSubmit={onSubmit}
            title='Detail Order'
            formik>
            <div className='table-responsive mb-5'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Sub total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order &&
                            order.products.map((item) => (
                                <tr key={item.product._id}>
                                    <td>{item.product.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        {VND(
                                            item.product.price * item.quantity
                                        )}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            <FormGroup>
                <Label>Name</Label>
                <Input value={order ? order.delivery.name : ""} disabled />
            </FormGroup>
            <FormGroup>
                <Label>Phone</Label>
                <Input value={order ? order.delivery.phone : ""} disabled />
            </FormGroup>
            <FormGroup>
                <Label>Address</Label>
                <Input value={order ? order.delivery.address : ""} disabled />
            </FormGroup>
            <div className='row'>
                <div className='col-lg-12'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Delivery Status</th>
                                <th>Payment Method</th>
                                <th>Payment status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order && (
                                <tr>
                                    <td>
                                        {order.delivery.status ===
                                            "pending" && (
                                            <div className='badge badge-warning'>
                                                {order.delivery.status}
                                            </div>
                                        )}
                                        {order.delivery.status ===
                                            "canceled" && (
                                            <div className='badge badge-danger'>
                                                {order.delivery.status}
                                            </div>
                                        )}
                                        {order.delivery.status ===
                                            "success" && (
                                            <div className='badge badge-success'>
                                                {order.delivery.status}
                                            </div>
                                        )}
                                    </td>
                                    <td>
                                        {order.payment.method === "cash" && (
                                            <div className='badge badge-success'>
                                                {order.payment.method}
                                            </div>
                                        )}
                                        {order.payment.method === "paypal" && (
                                            <div className='badge badge-primary'>
                                                {order.payment.method}
                                            </div>
                                        )}
                                    </td>
                                    <td>
                                        {order.payment.status ? (
                                            <div className='badge badge-success'>
                                                Đã thanh toán
                                            </div>
                                        ) : (
                                            <div className='badge badge-danger'>
                                                Chưa thanh toán
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <div
                className='d-flex justify-content-end mt-5'
                style={{ gap: 10 }}>
                {order && !order.haveInBill ? (
                    order.delivery.status === "pending" ? (
                        <Button color='warning' onClick={() => createBill()}>
                            Lên hóa đơn
                        </Button>
                    ) : null
                ) : null}
                {order && order.haveInBill ? (
                    order.delivery.status === "pending" ? (
                        <Button color='success' onClick={() => completeOrder()}>
                            Hoàn tất đơn hàng
                        </Button>
                    ) : null
                ) : null}
                {order && order.delivery.status === "pending" ? (
                    <Button color='danger' onClick={() => cancelOrder()}>
                        Hủy đơn hàng
                    </Button>
                ) : null}
            </div>
        </ModalLayout>
    );
}

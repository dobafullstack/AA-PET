import { Form, Formik } from 'formik';
import React, { Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
    Button,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
} from 'reactstrap';
import { string } from 'yup/lib/locale';
import { useGetMyOrderQuery } from '../../app/reducers/order.reducer';
import VND from '../../configs/VND';
import OrderModel from '../../models/Order';
import UserModel from '../../models/UserModel';
import formatDate from '../../utils/formatDate';
import Loading from '../Layout/Loading';
import MyRating from '../MyRating';
import * as yup from 'yup';
import productApi from '../../api/productApi';
import { toast } from 'react-toastify';

interface Props {
    user: UserModel;
}

export default function Order({ user }: Props): ReactElement {
    const { data, isFetching, refetch } = useGetMyOrderQuery(null);
    const [selectedOrder, setSelectedOrder] = useState('');

    useEffect(() => {
        refetch();
    }, []);

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
                        user={user}
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

function OrderDetail({
    order,
    setSelectedOrder,
    user,
}: {
    order: OrderModel | null | undefined;
    setSelectedOrder: Dispatch<SetStateAction<string>>;
    user: UserModel;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState('');

    const toggle = () => setIsOpen(!isOpen);

    const initialValues = {
        comment: '',
        point: 0,
        user: user.name,
        productId: selectedProduct,
    };

    const validate = yup.object().shape({
        comment: yup.string().required('Comment không được bỏ trống'),
        productId: yup.string().required('Mời chọn sản phẩm'),
    });

    console.log(selectedProduct);

    const onSubmit = (values: typeof initialValues) => {
        const onRating = async () => {
            try {
                const { result, code } = await productApi.reviewProduct(values);

                if (code === 200) {
                    toast.success(result);
                    toggle();
                } else {
                    toast.error(result);
                }
            } catch (error) {
                console.log(error);
            }
        };

        onRating();
    };

    if (!order) return <Loading />;

    return (
        <>
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
                            {order.delivery.status === 'success' && <th>Rating</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {order.products.map((item) => (
                            <tr key={item.product._id}>
                                <td style={{ maxWidth: '88.38px' }}>
                                    <img src={item.product.images[0]} alt='' width='100%' />
                                </td>
                                <td>{item.product.name}</td>
                                <td>{VND(item.product.price)}</td>
                                <td>{item.quantity}</td>
                                <td>{VND(item.product.price * item.quantity)}</td>
                                {order.delivery.status === 'success' && (
                                    <td>
                                        <button
                                            className='btn btn-primary'
                                            onClick={() => {
                                                setSelectedProduct(item.product._id);
                                                toggle();
                                            }}
                                        >
                                            Rating
                                        </button>
                                    </td>
                                )}
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
                                            <div
                                                className={`badge badge-${
                                                    order.delivery.status === 'pending'
                                                        ? 'warning'
                                                        : order.delivery.status === 'canceled'
                                                        ? 'danger'
                                                        : 'success'
                                                }`}
                                            >
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
                                        <td>
                                            <div
                                                className={`badge badge-${
                                                    order.payment.method === 'cash'
                                                        ? 'success'
                                                        : 'primary'
                                                }`}
                                            >
                                                {order.payment.method === 'cash'
                                                    ? 'Tiền Mặt'
                                                    : 'Paypal'}
                                            </div>
                                        </td>
                                        <td>
                                            <div
                                                className={`badge badge-${
                                                    order.payment.status ? 'success' : 'danger'
                                                }`}
                                            >
                                                {order.payment.status
                                                    ? 'Đã thanh toán'
                                                    : 'Chưa thanh toán'}
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <button className='btn btn-primary mt-5 me-4' onClick={() => setSelectedOrder('')}>
                    Quay lại
                </button>
                {order.delivery.status === 'pending' && (
                    <button className='btn btn-danger mt-5'>Hủy đơn hàng</button>
                )}
            </div>
            <Modal toggle={toggle} isOpen={isOpen}>
                <ModalHeader toggle={toggle}>New Comment</ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validate}
                        enableReinitialize
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                            setFieldValue,
                            errors,
                            touched,
                        }) => (
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label>Comment</Label>
                                    <Input
                                        type='textarea'
                                        name='comment'
                                        value={values.comment}
                                        onChange={handleChange}
                                    />
                                    {errors.comment && touched.comment ? (
                                        <p className='text-danger'>{errors.comment}</p>
                                    ) : null}
                                </FormGroup>
                                <MyRating
                                    onChange={(point: number) => setFieldValue('point', point)}
                                    value={values.point}
                                />
                                {errors.productId && touched.productId ? (
                                    <p className='text-danger'>{errors.productId}</p>
                                ) : null}
                                <div className='mt-5 d-flex justify-content-end'>
                                    <Button color='primary' className='me-3' type='submit'>
                                        Add Review
                                    </Button>{' '}
                                    <Button onClick={toggle} color='danger'>
                                        Cancel
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    );
}

import moment from 'moment';
import React, { ReactElement, useContext } from 'react';
import { Link, Navigate, useNavigate, NavigateFunction } from 'react-router-dom';
import '../assets/css/payment.css';
import { ItemWrapper, Logged, Payment, UnLogged } from '../components/Checkout';
import Breadcrumb from '../components/Layout/Breadcrumb';
import { AuthContext } from '../context/authContext';
import { CheckoutContext } from '../context/checkoutContext';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CartModel from '../models/CartModel';
import Loading from '../components/Layout/Loading';
import { useGetMyAccountQuery } from '../app/reducers/auth.reducer';
import useLocalStorage from '../hooks/useLocalStorage';
import { ResponseType } from '../api/axiosClient';
import UserModel from '../models/UserModel';
import orderApi from '../api/orderApi';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../app/hooks';
import { AppDispatch } from '../app/store';
import { clearCart } from '../app/reducers/cart.reducer';

interface Props {}

export const initialValues = {
    name: '',
    phone: '',
    address: '',
    password: '',
    username: '',
    create_new_account: '',
    street: '',
    payment: 'cash',
    selectedCity: 'Hà Nội',
    selectedDistrict: 'Quận Ba Đình',
};

export const onSubmit = (
    values: typeof initialValues,
    cart: CartModel,
    navigate: NavigateFunction,
    payment: { status: boolean; method: string },
    dispatch: AppDispatch,
    userId?: string,
) => {
    const body = {
        userId,
        products: cart.products.map((x) => ({
            product: x.product,
            quantity: x.count,
        })),
        total: cart.total,
        payment,
        delivery: {
            name: values.name,
            phone: values.phone,
            address: values.address,
        },
    };
    const createOrder = async () => {
        try {
            const { result, code } = await orderApi.createOrder(body);

            if (code === 201) {
                navigate('/success', { replace: true });
                dispatch(clearCart())
            } else {
                toast.error(result);
            }
        } catch (error) {
            console.log(error);
            navigate('/fail', { replace: true });
        }
    };

    createOrder();
};

export default function Checkout({}: Props): ReactElement {
    const { isLogin } = useContext(AuthContext);
    const { cart, isPaid } = useContext(CheckoutContext);
    const [token] = useLocalStorage('access_token', '');
    const { data, isFetching } = useGetMyAccountQuery(token);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const validate = Yup.object().shape({
        phone: Yup.number()
            .typeError('Số điện thoại không hợp lệ')
            .required('Số điện thoại không được để trống'),
        name: Yup.string().required('Tên không được để trống'),
        address: Yup.string().required('Địa chỉ không được để trống'),
    });

    if (cart.products.length === 0) return <Navigate to='/' />;

    if (isFetching)
        return (
            <div className='col-lg-6 col-12 mb-4'>
                <Loading />
            </div>
        );

    return (
        <>
            <Breadcrumb title='Checkout'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>Cart</li>
                <li>Checkout</li>
            </Breadcrumb>

            <div className='section section-margin'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='coupon-accordion'>
                                <h3 className='title'>
                                    Have a coupon?{' '}
                                    <span id='showcoupon'>Click here to enter your code</span>
                                </h3>

                                <div id='checkout_coupon' className='coupon-checkout-content'>
                                    <div className='coupon-info'>
                                        <form action='#'>
                                            <p className='checkout-coupon d-flex'>
                                                <input placeholder='Coupon code' type='text' />
                                                <input
                                                    className='btn btn-primary btn-hover-dark rounded-0'
                                                    value='Apply Coupon'
                                                    type='submit'
                                                />
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values) =>
                            onSubmit(
                                values,
                                cart,
                                navigate,
                                { status: isPaid, method: isPaid ? 'paypal' : 'cash' },
                                dispatch,
                                isLogin && data?.result._id
                            )
                        }
                        enableReinitialize
                        validationSchema={validate}
                    >
                        {({
                            handleChange,
                            handleSubmit,
                            setFieldValue,
                            values,
                            touched,
                            errors,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <div className='row mb-n4'>
                                    {!isLogin ? (
                                        <UnLogged
                                            values={values}
                                            handleChange={handleChange}
                                            setFieldValue={setFieldValue}
                                            handleSubmit={handleSubmit}
                                            errors={errors}
                                            touched={touched}
                                        />
                                    ) : (
                                        <Logged
                                            setFieldValue={setFieldValue}
                                            errors={errors}
                                            touched={touched}
                                            data={data as ResponseType<UserModel>}
                                        />
                                    )}
                                    <div className='col-lg-6 col-12 mb-4'>
                                        <div className='your-order-area border'>
                                            <h3 className='title'>Your order</h3>

                                            <ItemWrapper />

                                            <div className='payment-accordion-order-button'>
                                                <div className='payment-accordion'>
                                                    <div className='single-payment'>
                                                        <h5 className='panel-title mb-3'>
                                                            <a
                                                                className='collapse-off'
                                                                data-bs-toggle='collapse'
                                                                href='#collapseExample'
                                                                aria-expanded='false'
                                                                aria-controls='collapseExample'
                                                            >
                                                                Thông tin giao hàng.
                                                            </a>
                                                        </h5>
                                                        <div
                                                            className='collapse show'
                                                            id='collapseExample'
                                                        >
                                                            <div className='card card-body rounded-0'>
                                                                <ul>
                                                                    <li>
                                                                        Họ tên:{' '}
                                                                        <strong>
                                                                            {values.name}
                                                                        </strong>
                                                                    </li>
                                                                    <li>
                                                                        Số điện thoại:{' '}
                                                                        <strong>
                                                                            {values.phone}
                                                                        </strong>
                                                                    </li>
                                                                    <li>
                                                                        Địa chỉ:{' '}
                                                                        <strong>{`${values.address}`}</strong>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='single-payment'>
                                                        <h5 className='panel-title mb-3'>
                                                            <a
                                                                className='collapse-off'
                                                                data-bs-toggle='collapse'
                                                                href='#collapseExample-2'
                                                                aria-expanded='false'
                                                                aria-controls='collapseExample-2'
                                                            >
                                                                Thời gian giao hàng dự kiến
                                                            </a>
                                                        </h5>
                                                        <div
                                                            className='collapse'
                                                            id='collapseExample-2'
                                                        >
                                                            <div
                                                                className='card card-body rounded-0'
                                                                style={{
                                                                    display: 'flex',
                                                                    flexDirection: 'row',
                                                                    alignItems: 'center',
                                                                    gap: '10px',
                                                                }}
                                                            >
                                                                <i className='fal fa-calendar-alt'></i>
                                                                <span>
                                                                    {moment()
                                                                        .add(8, 'days')
                                                                        .calendar()}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Payment
                                                        values={values}
                                                        navigate={navigate}
                                                        cart={cart}
                                                        userId={data?.result ? data?.result._id : undefined}
                                                        errors={errors}
                                                    />
                                                </div>
                                                <div className='order-button-payment'>
                                                    <button
                                                        type='submit'
                                                        className='btn btn-primary btn-hover-secondary rounded-0 w-100'
                                                    >
                                                        Place Order
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
}

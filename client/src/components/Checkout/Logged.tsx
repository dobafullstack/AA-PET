import { useGetMyAccountQuery } from '../../app/reducers/auth.reducer';
import useLocalStorage from '../../hooks/useLocalStorage';
import Loading from '../Layout/Loading';
import styled from 'styled-components';
import UserModel, { Delivery } from '../../models/UserModel';
import { useEffect, useState } from 'react';
import { FormikProps } from 'formik';
import { initialValues } from '../../pages/Checkout';
import { ResponseType } from '../../api/axiosClient';

interface LoggedProps {
    setFieldValue: any;
    errors: any;
    touched: any;
    data: ResponseType<UserModel>;
}

const Logged = ({ setFieldValue, errors, touched, data }: LoggedProps) => {
    const [selectedAddress, setSelectedAddress] = useState('');

    const onSelectDelivery = (item: Delivery) => {
        setSelectedAddress(item._id);
        setFieldValue('name', item.name);
        setFieldValue('phone', item.phone);
        setFieldValue('address', item.address);
    };

    return (
        <div className='col-lg-6 col-12 mb-4'>
            <div
                className='delivery-address-header d-flex align-items-center'
                style={{ gap: 10, fontSize: 20 }}
            >
                <i className='fas fa-map-marker-alt'></i>
                <p style={{ fontSize: 20 }} className='m-0'>
                    Địa chỉ giao hàng
                </p>
            </div>

            {data.result.delivery.map((item) => (
                <div
                    className='delivery-address-item w-100 mt-4 p-2 d-flex align-items-center'
                    onClick={() => onSelectDelivery(item)}
                    style={{
                        borderStyle: 'dashed',
                        borderWidth: 1,
                        minHeight: 150,
                        position: 'relative',
                        cursor: 'pointer',
                    }}
                >
                    <div>
                        <div
                            className='d-flex justify-content-start align-items-center'
                            style={{ gap: 10 }}
                        >
                            <i className='fal fa-user'></i>
                            <p className='m-0'>Họ và Tên:</p>
                            <p className='m-0'>{item.name}</p>
                        </div>
                        <div
                            className='d-flex justify-content-start align-items-center'
                            style={{ gap: 10 }}
                        >
                            <i className='fal fa-phone'></i>
                            <p className='m-0'>Số điện thoại:</p>
                            <p className='m-0'>{item.phone}</p>
                        </div>
                        <div
                            className='d-flex justify-content-start align-items-center'
                            style={{ gap: 10 }}
                        >
                            <i className='fal fa-address-card'></i>
                            <p className='m-0'>Địa chỉ:</p>
                            <p className='m-0'>{item.address}</p>
                        </div>
                    </div>
                    {selectedAddress === item._id && (
                        <div
                            style={{
                                position: 'absolute',
                                top: -15,
                                right: -15,
                                backgroundColor: 'white',
                            }}
                        >
                            <i className='fas fa-check-circle'></i>
                        </div>
                    )}
                </div>
            ))}
            {errors.name && touched.name ? (
                <p className='text-danger'>Chọn địa chỉ giao hàng</p>
            ) : null}
        </div>
    );
};

export default Logged;

import React, { ReactElement } from 'react';
import UserModel from '../../models/UserModel';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Input } from 'reactstrap';
import authApi from '../../api/authApi';
import { toast } from 'react-toastify';

interface Props {
    user: UserModel;
    refetch: () => void;
}

export default function AccountDetail({ user, refetch }: Props): ReactElement {
    const initialValues = {
        name: user.name,
        phone: user.phone,
        gender: user.gender,
        email: user.email,
    };

    const validate = yup.object().shape({
        name: yup.string().required('Họ và tên không được bỏ trống'),
        phone: yup
            .number()
            .typeError('Số điện thoại chưa hợp lệ')
            .required('Họ và tên không được bỏ trống'),
        email: yup.string().required('Email không được bỏ trống').email('Email không hợp lệ'),
    });

    const onSubmit = (values: typeof initialValues) => {
        const updateUser = async () => {
            try {
                const { code, result } = await authApi.updateUser(values, user._id);

                if (code === 200) {
                    toast.success(result);
                } else {
                    toast.error(result);
                }
            } catch (error) {
                console.log(error);
            }
        };

        updateUser().then(() => refetch());
    };

    return (
        <div className='tab-pane fade' id='account-info' role='tabpanel'>
            <div className='myaccount-content'>
                <h3 className='title'>Account Details</h3>
                <div className='account-details-form'>
                    <Formik
                        validationSchema={validate}
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                    >
                        {({ values, errors, touched, handleChange, handleSubmit }) => (
                            <form action='#' onSubmit={handleSubmit}>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className='single-input-item mb-3'>
                                            <label htmlFor='first-name' className='required mb-2'>
                                                Tên tài khoản
                                            </label>
                                            <input
                                                type='text'
                                                id='first-name'
                                                placeholder='Tên tài khoản'
                                                disabled
                                                value={user.username}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='single-input-item mb-3'>
                                            <label htmlFor='last-name' className='required mb-2'>
                                                Họ và tên
                                            </label>
                                            <input
                                                type='text'
                                                id='last-name'
                                                name='name'
                                                placeholder='Họ và tên'
                                                value={values.name}
                                                onChange={handleChange}
                                            />
                                            {errors.name && touched.name ? (
                                                <p className='text-danger'>{errors.name}</p>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                                <div className='single-input-item mb-3'>
                                    <label htmlFor='email' className='required mb-1'>
                                        Email Addres
                                    </label>
                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        placeholder='Email Address'
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && touched.email ? (
                                        <p className='text-danger'>{errors.email}</p>
                                    ) : null}
                                </div>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className='single-input-item mb-3'>
                                            <label htmlFor='display-name' className='required mb-2'>
                                                Số điện thoại
                                            </label>
                                            <input
                                                type='tel'
                                                id='display-name'
                                                name='phone'
                                                placeholder='Số điện thoại'
                                                value={values.phone}
                                                onChange={handleChange}
                                            />
                                            {errors.phone && touched.phone ? (
                                                <p className='text-danger'>{errors.phone}</p>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='single-input-item mb-3'>
                                            <label htmlFor='display-name' className='required mb-2'>
                                                Giới tính
                                            </label>
                                            <Input
                                                type='select'
                                                name='gender'
                                                onChange={handleChange}
                                            >
                                                <option
                                                    value='Male'
                                                    selected={values.gender === 'Male'}
                                                >
                                                    Nam
                                                </option>
                                                <option
                                                    value='Female'
                                                    selected={values.gender === 'Female'}
                                                >
                                                    Nữ
                                                </option>
                                                <option
                                                    value='Other'
                                                    selected={values.gender === 'Other'}
                                                >
                                                    Khác
                                                </option>
                                            </Input>
                                        </div>
                                    </div>
                                </div>
                                <div className='single-input-item single-item-button mt-6'>
                                    <button className='btn btn btn-primary btn-hover-dark rounded-0'>
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

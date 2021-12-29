import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Layout/Breadcrumb';
import RegisterInput from '../types/RegisterInput';
import { toast } from 'react-toastify';
import authApi from '../api/authApi';
import { Formik } from 'formik';
import * as Yup from 'yup';

interface Props {}

export default function Register({}: Props): ReactElement {
    const initialValues = {
        name: '',
        username: '',
        email: '',
        password: '',
        address: '',
        phone: '',
        confirmPassword: '',
    };

    const validate = Yup.object().shape({
        name: Yup.string().required('Họ và tên không được để trống'),
        username: Yup.string().required('Tên tài khoản không được để trống'),
        email: Yup.string().required('Email không được để trống'),
        password: Yup.string().required('Mật khẩu không được để trống'),
        address: Yup.string().required('Địa chỉ không được để trống'),
        phone: Yup.string().required('Số điện thoại không được để trống'),
        confirmPassword: Yup.string()
            .required('Xác nhận mật khẩu không được để trống')
            .oneOf([Yup.ref('password'), null], 'Mật khẩu xác nhận không đúng'),
    });

    const handleRegister = (values: typeof initialValues, { resetForm }: any) => {
        const register = async () => {
            try {
                const { code, error, result } = await authApi.register(values);

                if (code !== 201 || error !== null) {
                    toast.error(result);
                    toast.error(error);
                    return;
                }
                resetForm();
                toast.success(result);
            } catch (error: any) {
                toast.error(error.message);
            }
        };

        register();
    };

    return (
        <>
            <Breadcrumb title='Register'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>Register</li>
            </Breadcrumb>

            <div className='section section-margin'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7 col-md-8 m-auto'>
                            <div className='login-wrapper'>
                                <div className='section-content text-center mb-6'>
                                    <h2 className='title mb-2'>Create Account</h2>
                                </div>
                                <Formik
                                    initialValues={initialValues}
                                    onSubmit={handleRegister}
                                    validationSchema={validate}
                                >
                                    {({ values, handleChange, handleSubmit, errors, touched }) => (
                                        <form onSubmit={handleSubmit}>
                                            <div className='single-input-item mb-2'>
                                                <input
                                                    required={true}
                                                    type='text'
                                                    placeholder='Your name'
                                                    name='name'
                                                    value={values.name}
                                                    onChange={handleChange}
                                                />
                                                {errors.name && touched.name ? (
                                                    <p className='text-danger'>{errors.name}</p>
                                                ) : null}
                                            </div>

                                            <div className='single-input-item mb-2'>
                                                <input
                                                    required={true}
                                                    type='text'
                                                    placeholder='Username'
                                                    name='username'
                                                    value={values.username}
                                                    onChange={handleChange}
                                                />
                                                {errors.username && touched.username ? (
                                                    <p className='text-danger'>{errors.username}</p>
                                                ) : null}
                                            </div>

                                            <div className='single-input-item mb-2'>
                                                <input
                                                    required={true}
                                                    type='email'
                                                    placeholder='Email'
                                                    name='email'
                                                    value={values.email}
                                                    onChange={handleChange}
                                                />
                                                {errors.email && touched.email ? (
                                                    <p className='text-danger'>{errors.email}</p>
                                                ) : null}
                                            </div>

                                            <div className='single-input-item mb-2'>
                                                <input
                                                    required={true}
                                                    type='tel'
                                                    placeholder='Phone'
                                                    name='phone'
                                                    value={values.phone}
                                                    onChange={handleChange}
                                                />
                                                {errors.phone && touched.phone ? (
                                                    <p className='text-danger'>{errors.phone}</p>
                                                ) : null}
                                            </div>
                                            <div className='single-input-item mb-2'>
                                                <input
                                                    required={true}
                                                    type='text'
                                                    placeholder='Address'
                                                    name='address'
                                                    value={values.address}
                                                    onChange={handleChange}
                                                />
                                                {errors.address && touched.address ? (
                                                    <p className='text-danger'>{errors.address}</p>
                                                ) : null}
                                            </div>
                                            <div className='single-input-item mb-2'>
                                                <input
                                                    required={true}
                                                    type='password'
                                                    placeholder='Password'
                                                    name='password'
                                                    value={values.password}
                                                    onChange={handleChange}
                                                />
                                                {errors.password && touched.password ? (
                                                    <p className='text-danger'>{errors.password}</p>
                                                ) : null}
                                            </div>
                                            <div className='single-input-item mb-2'>
                                                <input
                                                    required={true}
                                                    type='password'
                                                    placeholder='Confirm Password'
                                                    name='confirmPassword'
                                                    value={values.confirmPassword}
                                                    onChange={handleChange}
                                                />
                                                {errors.confirmPassword &&
                                                touched.confirmPassword ? (
                                                    <p className='text-danger'>
                                                        {errors.confirmPassword}
                                                    </p>
                                                ) : null}
                                            </div>

                                            <div className='single-input-item'>
                                                <div className='login-reg-form-meta mb-n3'>
                                                    <button
                                                        className='btn btn btn-gray-deep btn-hover-primary mb-3'
                                                        type='submit'
                                                    >
                                                        Create
                                                    </button>

                                                    <Link to='/login' className='forget-pwd mb-3'>
                                                        Already have an account?
                                                    </Link>
                                                </div>
                                            </div>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

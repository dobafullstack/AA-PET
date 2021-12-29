import React, { ReactElement } from 'react';
import { Formik } from 'formik';
import { FormGroup, Form, Button, Input, Label } from 'reactstrap';
import * as yup from 'yup';
import UserModel from '../../models/UserModel';
import authApi from '../../api/authApi';
import { toast } from 'react-toastify';

interface Props {
    user: UserModel;
}

export default function ChangePassword({ user }: Props): ReactElement {
    const initialValues = {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    };

    const validate = yup.object().shape({
        oldPassword: yup.string().required('Mời nhập mật khẩu cũ'),
        newPassword: yup.string().required('Mời nhập mật khẩu mới'),
        confirmPassword: yup
            .string()
            .required('Mời nhập mật khẩu xác nhận')
            .oneOf([yup.ref('newPassword'), null], 'Mật khẩu xác nhận không đúng'),
    });

    const onSubmit = (values: typeof initialValues) => {
        const onChangePassword = async () => {
            try {
                const { result, code, error } = await authApi.changePassword(
                    values.newPassword,
                    values.oldPassword
                );

                if (code !== 200) {
                    toast.error(error);
                } else {
                    toast.success(result);
                }
            } catch (error) {
                console.log(error);
            }
        };

        onChangePassword();
    };

    return (
        <div className='tab-pane fade' id='change-password' role='tabpanel'>
            <div className='myaccount-content'>
                <h3 className='title'>Change Password</h3>
                <div className='account-details-form'>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validate}
                    >
                        {({ values, handleChange, errors, touched, handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
                                <div className='single-input-item mb-3'>
                                    <Label>Mật khẩu cũ</Label>
                                    <input
                                        placeholder='Mật khẩu cũ'
                                        type='password'
                                        value={values.oldPassword}
                                        name='oldPassword'
                                        onChange={handleChange}
                                    />
                                    {errors.oldPassword && touched.oldPassword ? (
                                        <p className='text-danger'>{errors.oldPassword}</p>
                                    ) : null}
                                </div>
                                <div className='single-input-item mb-3'>
                                    <Label>Mật khẩu mới</Label>
                                    <input
                                        placeholder='Mật khẩu mới'
                                        type='password'
                                        value={values.newPassword}
                                        name='newPassword'
                                        onChange={handleChange}
                                    />
                                    {errors.newPassword && touched.newPassword ? (
                                        <p className='text-danger'>{errors.newPassword}</p>
                                    ) : null}
                                </div>
                                <div className='single-input-item mb-3'>
                                    <Label>Xác nhận mật khẩu</Label>
                                    <input
                                        placeholder='Xác nhận mật khẩu'
                                        type='password'
                                        value={values.confirmPassword}
                                        name='confirmPassword'
                                        onChange={handleChange}
                                    />
                                    {errors.confirmPassword && touched.confirmPassword ? (
                                        <p className='text-danger'>{errors.confirmPassword}</p>
                                    ) : null}
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <button
                                        type='submit'
                                        className='btn btn btn-primary btn-hover-dark rounded-0'
                                    >
                                        Change password
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

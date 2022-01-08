import { ErrorMessage, Formik } from "formik";
import React, { ReactElement, useContext } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { AuthContext } from "../context/AuthContext";
import * as yup from "yup";
import authApi from "../api/authApi";
import { toast } from "react-toastify";

interface Props {}

export default function Profile({}: Props): ReactElement {
    const { user } = useContext(AuthContext);

    const initialValues = {
        name: user?.name,
        email: user?.email,
        phone: user?.phone,
        gender: user?.gender,
        username: user?.username,
    };

    const validate = yup.object().shape({
        name: yup.string().required("Name is required"),
        email: yup.string().required("Email is required"),
        phone: yup.string().required("Phone is required"),
        gender: yup.string().required("Gender is required"),
        username: yup.string().required("Username is required"),
    });

    const onSubmit = async (values: typeof initialValues) => {
        authApi
            .updateUser(values, user?._id as string)
            .then((res) => {
                if (res.code === 200) toast.success(res.result);
                else toast.error(res.error);
            })
            .catch((err) => console.log(err));
    };

    const onChangePassword = async (values: any, {resetForm}: any) => {
        authApi
            .changePassword(values.newPassword, values.oldPassword)
            .then((res) => {
                if (res.code === 200) toast.success(res.result);
                else toast.error(res.error);

                resetForm();
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className='row'>
            <div className='col-lg-6 grid-margin'>
                <div className='card'>
                    <div className='card-body'>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validate}
                            onSubmit={onSubmit}>
                            {({ values, handleSubmit, handleChange }) => (
                                <Form onSubmit={handleSubmit}>
                                    <FormGroup>
                                        <Label>Username</Label>
                                        <Input
                                            name='username'
                                            placeholder='Username'
                                            value={values.username}
                                            disabled
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name='username'>
                                            {(error) => (
                                                <p className='text-danger'>
                                                    {error}
                                                </p>
                                            )}
                                        </ErrorMessage>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Email</Label>
                                        <Input
                                            name='email'
                                            placeholder='Email'
                                            value={values.email}
                                            disabled
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name='email'>
                                            {(error) => (
                                                <p className='text-danger'>
                                                    {error}
                                                </p>
                                            )}
                                        </ErrorMessage>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Name</Label>
                                        <Input
                                            name='name'
                                            placeholder='Name'
                                            value={values.name}
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name='name'>
                                            {(error) => (
                                                <p className='text-danger'>
                                                    {error}
                                                </p>
                                            )}
                                        </ErrorMessage>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Phone</Label>
                                        <Input
                                            name='phone'
                                            placeholder='Phone'
                                            value={values.phone}
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name='phone'>
                                            {(error) => (
                                                <p className='text-danger'>
                                                    {error}
                                                </p>
                                            )}
                                        </ErrorMessage>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Gender</Label>
                                        <select
                                            name='gender'
                                            className='form-control'
                                            onChange={handleChange}>
                                            <option value='Male'>Male</option>
                                            <option value='Female'>
                                                Female
                                            </option>
                                            <option value='Other'>Other</option>
                                        </select>
                                        <ErrorMessage name='gender'>
                                            {(error) => (
                                                <p className='text-danger'>
                                                    {error}
                                                </p>
                                            )}
                                        </ErrorMessage>
                                    </FormGroup>
                                    <div className='d-flex justify-content-end'>
                                        <Button color='warning'>Reset</Button>
                                        <Button
                                            color='primary'
                                            className='ml-4'
                                            type='submit'>
                                            Submit
                                        </Button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 grid-margin'>
                <div className='card'>
                    <div className='card-body'>
                        <Formik
                            initialValues={{
                                oldPassword: "",
                                newPassword: "",
                                confirmPassword: "",
                            }}
                            validationSchema={yup.object().shape({
                                oldPassword: yup
                                    .string()
                                    .required("Old Password is required"),
                                newPassword: yup
                                    .string()
                                    .required("New Password is required"),
                                confirmPassword: yup
                                    .string()
                                    .required("Confirm Password is required")
                                    .oneOf(
                                        [yup.ref("newPassword"), null],
                                        "Invalid Confirm Password"
                                    ),
                            })}
                            onSubmit={onChangePassword}>
                            {({ values, handleSubmit, handleChange }) => (
                                <Form onSubmit={handleSubmit}>
                                    <FormGroup>
                                        <Label>Old Password</Label>
                                        <Input
                                            name='oldPassword'
                                            placeholder='Old Password'
                                            value={values.oldPassword}
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name='oldPassword'>
                                            {(error) => (
                                                <p className='text-danger'>
                                                    {error}
                                                </p>
                                            )}
                                        </ErrorMessage>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>New Password</Label>
                                        <Input
                                            name='newPassword'
                                            placeholder='New Password'
                                            value={values.newPassword}
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name='newPassword'>
                                            {(error) => (
                                                <p className='text-danger'>
                                                    {error}
                                                </p>
                                            )}
                                        </ErrorMessage>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Confirm Password</Label>
                                        <Input
                                            name='confirmPassword'
                                            placeholder='Confirm Password'
                                            value={values.confirmPassword}
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name='confirmPassword'>
                                            {(error) => (
                                                <p className='text-danger'>
                                                    {error}
                                                </p>
                                            )}
                                        </ErrorMessage>
                                    </FormGroup>

                                    <div className='d-flex justify-content-end'>
                                        <Button
                                            color='primary'
                                            className='ml-4'
                                            type='submit'>
                                            Change Password
                                        </Button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
}

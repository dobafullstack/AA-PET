import React, {
    Dispatch,
    ReactElement,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react";
import {
    createStaffAction,
    getAllUsersAction,
} from "../app/actions/user.action";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { ModalLayout } from "../components";
import MyLoading from "../components/Common/MyLoading";
import Td from "../components/Common/Td";
import { AuthContext } from "../context/AuthContext";
import { CommonLayout } from "../Layout/AppLayout";
import * as yup from "yup";
import { Formik } from "formik";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import UserFactory from "../models/Factory";
import VND from "../utils/VND";

interface Props {}

interface ModalProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    selectedItem: string;
}

export default function Users({}: Props): ReactElement {
    const { users, loading } = useAppSelector((state) => state.userReducer);
    const dispatch = useAppDispatch();
    const { token } = useContext(AuthContext);

    const onFetchingData = () => dispatch(getAllUsersAction(token as string));

    useEffect(() => {
        onFetchingData();
    }, []);

    return (
        <CommonLayout
            AddModal={AddModal}
            EditModal={EditModal}
            onDelete={() => null}
            onReload={() => onFetchingData()}>
            <h4 className='card-title'>List Staff</h4>
            {!loading ? (
                <div className='table-responsive'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Role</th>
                                <th>Username</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Salary</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user._id}>
                                    <Td id={user._id} className='py-1'>
                                        <div
                                            className={`badge badge-${
                                                user.typeStaff === "fulltime"
                                                    ? "success"
                                                    : user.typeStaff ===
                                                      "part time"
                                                    ? "warning"
                                                    : "primary"
                                            }`}
                                            style={{
                                                textTransform: "capitalize",
                                            }}>
                                            {user.typeStaff}
                                        </div>
                                    </Td>
                                    <Td id={user._id}>{user.username}</Td>
                                    <Td id={user._id}>{user.name}</Td>
                                    <Td id={user._id}>{user.email}</Td>
                                    <Td id={user._id}>{user.gender}</Td>
                                    <Td id={user._id}>{VND(user.salary)}</Td>
                                    <Td id={user._id}>
                                        <div
                                            className={`badge badge-${
                                                user.active
                                                    ? "success"
                                                    : "danger"
                                            }`}>
                                            {user.active ? "Active" : "UnActive"}
                                        </div>
                                    </Td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <MyLoading />
            )}
        </CommonLayout>
    );
}

function AddModal({ isOpen, setIsOpen }: ModalProps): ReactElement {
    const dispatch = useAppDispatch();

    const initialValues = {
        name: "",
        username: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        typeStaff: "",
        salary: 0,
    };

    const validate = yup.object().shape({
        name: yup.string().required("Họ và tên không được bỏ trống"),
        username: yup.string().required("Tên tài khoản không được bỏ trống"),
        email: yup.string().required("Email không được bỏ trống"),
        password: yup.string().required("Mật khẩu không được bỏ trống"),
        phone: yup
            .number()
            .typeError("Số điện thoại chưa đúng")
            .required("Số điện thoại không được bỏ trống"),
        address: yup.string().required("Địa chỉ không được bỏ trống"),
        typeStaff: yup.string().required("Loại nhân viên không được bỏ trống"),
    });

    const onSubmit = (values: typeof initialValues) => {
        const userFactory = new UserFactory(values.typeStaff);

        const user = {
            ...values,
            role: "staff",
            salary: userFactory.getSalary(),
        };

        dispatch(createStaffAction(user));
        setIsOpen(!isOpen);
    };

    return (
        <ModalLayout
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onSubmit={onSubmit}
            formik
            title='Create Staff'>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validate}>
                {({ values, handleChange, handleSubmit, errors, touched }) => (
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input
                                value={values.name}
                                onChange={handleChange}
                                placeholder='Name'
                                name='name'
                            />
                            {errors.name && touched.name ? (
                                <p className='text-danger'>{errors.name}</p>
                            ) : null}
                        </FormGroup>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input
                                value={values.username}
                                onChange={handleChange}
                                placeholder='Username'
                                name='username'
                            />
                            {errors.username && touched.username ? (
                                <p className='text-danger'>{errors.username}</p>
                            ) : null}
                        </FormGroup>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                value={values.email}
                                onChange={handleChange}
                                placeholder='Email'
                                name='email'
                            />
                            {errors.email && touched.email ? (
                                <p className='text-danger'>{errors.email}</p>
                            ) : null}
                        </FormGroup>
                        <FormGroup>
                            <Label>Phone</Label>
                            <Input
                                value={values.phone}
                                onChange={handleChange}
                                placeholder='Phone'
                                name='phone'
                            />
                            {errors.phone && touched.phone ? (
                                <p className='text-danger'>{errors.phone}</p>
                            ) : null}
                        </FormGroup>
                        <FormGroup>
                            <Label>Address</Label>
                            <Input
                                value={values.address}
                                onChange={handleChange}
                                placeholder='Address'
                                name='address'
                            />
                            {errors.address && touched.address ? (
                                <p className='text-danger'>{errors.address}</p>
                            ) : null}
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input
                                value={values.password}
                                onChange={handleChange}
                                placeholder='Password'
                                type='password'
                                name='password'
                            />
                            {errors.password && touched.password ? (
                                <p className='text-danger'>{errors.password}</p>
                            ) : null}
                        </FormGroup>
                        <FormGroup>
                            <Label>Role</Label>
                            <select
                                className='form-control'
                                onChange={handleChange}
                                name='typeStaff'>
                                <option value='fulltime'>Full Time</option>
                                <option value='part time'>Part Time</option>
                                <option value='security'>Security</option>
                            </select>
                            {errors.typeStaff && touched.typeStaff ? (
                                <p className='text-danger'>
                                    {errors.typeStaff}
                                </p>
                            ) : null}
                        </FormGroup>
                        <div className='d-flex justify-content-end'>
                            <Button
                                color='primary'
                                className='mr-3'
                                type='submit'>
                                Submit
                            </Button>
                            <Button
                                color='danger'
                                onClick={() => setIsOpen(!isOpen)}>
                                Cancel
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </ModalLayout>
    );
}

function EditModal({
    isOpen,
    setIsOpen,
    selectedItem,
}: ModalProps): ReactElement {
    const onSubmit = () => console.log("asgfaga");

    return (
        <ModalLayout isOpen={isOpen} setIsOpen={setIsOpen} onSubmit={onSubmit}>
            {selectedItem}
        </ModalLayout>
    );
}

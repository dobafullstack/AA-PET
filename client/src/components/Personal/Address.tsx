import React, { ReactElement, useEffect, useState } from 'react';
import UserModel, { Delivery } from '../../models/UserModel';
import Loading from '../Layout/Loading';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Form,
    FormGroup,
    Input,
    Label,
} from 'reactstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import axiosClient from '../../api/axiosClient';
import { CITY_API } from '../../constants';
import mongoose from 'mongoose';
import CityModel from '../../models/CityModel';
import authApi from '../../api/authApi';
import { toast } from 'react-toastify';
interface Props {
    user: UserModel;
}

export default function Address({ user }: Props): ReactElement {
    const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
    const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);
    const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
    const [selectedDelivery, setSelectedDelivery] = useState('');
    const [cities, setCities] = useState<CityModel[]>([]);
    const [method, setMethod] = useState('create');

    useEffect(() => {
        if (isOpenModalAdd) setMethod('create');
        if (isOpenModalEdit) setMethod('edit');
    }, [method]);

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const data: any = await axiosClient.get(CITY_API);

                setCities(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCities();
    }, []);

    const initialValues = {
        name: '',
        phone: '',
        address: '',
        city: '',
        district: '',
        street: '',
    };

    const validate = yup.object().shape({
        name: yup.string().required('Họ và tên không được bỏ trống'),
        phone: yup
            .number()
            .typeError('Số điện thoại không hợp lệ')
            .required('Số điện thoại không được bỏ trống'),
        city: yup.string().required('Mời chọn tỉnh thành'),
        district: yup.string().required('Mời chọn quận huyện'),
        street: yup.string().required('Địa chỉ không được bỏ trống'),
    });

    const onSubmit = (values: typeof initialValues) => {
        const updateUser = async (delivery: Delivery[], setModal: any) => {
            try {
                const { result, code } = await authApi.updateUser(
                    { delivery },
                    user?._id as string
                );

                if (code === 200) {
                    toast.success(result);
                    setModal(false);
                } else {
                    toast.error(result);
                }
            } catch (error) {
                console.log(error);
            }
        };

        if (method === 'create') {
            const delivery = user?.delivery.concat({
                _id: `${new mongoose.Types.ObjectId()}`,
                name: values.name,
                phone: values.phone,
                address: `${values.street}, ${values.district}, ${values.city}`,
            });

            updateUser(delivery as Delivery[], setIsOpenModalAdd);
        } else if (method === 'edit') {
          const delivery = [...user.delivery]
          const index = delivery.findIndex(x => x._id === selectedDelivery);

            if (index >= 0){
              delivery[index] = {
                name: values.name,
                phone: values.phone,
                address: `${values.street}, ${values.district}, ${values.city}`,
                _id: delivery[index]._id
              };

              updateUser(delivery as Delivery[], setIsOpenModalEdit);
            }
        }
    };

    const onDelete = () => {
        const delivery = user.delivery.filter(item => item._id !== selectedDelivery);

        const updateUser = async (delivery: Delivery[], setModal: any) => {
            try {
                const { result, code } = await authApi.updateUser(
                    { delivery },
                    user?._id as string
                );

                if (code === 200) {
                    toast.success(result);
                    setModal(false);
                } else {
                    toast.error(result);
                }
            } catch (error) {
                console.log(error);
            }
        };

        updateUser(delivery, setIsOpenModalDelete)
    }

    if (!user) return <Loading />;

    return (
        <div className='tab-pane fade' id='address-edit' role='tabpanel'>
            <div className='myaccount-content'>
                <h3 className='title'>Billing Address</h3>
                <div className='row'>
                    {user.delivery.map((item) => (
                        <div className='col-lg-4' style={{ position: 'relative' }}>
                                <address
                                    style={{
                                        borderWidth: 1,
                                        borderStyle: 'dashed',
                                        padding: 10,
                                        height: '100%',
                                        margin: 0,
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => {
                                      setIsOpenModalEdit(!isOpenModalEdit);
                                      setMethod('edit');
                                      setSelectedDelivery(item._id)
                                    }}
                                >
                                    <p>
                                        <strong>{item.name}</strong>
                                    </p>
                                    <p>{item.address}</p>
                                    <p>Mobile: {item.phone}</p>
                                </address>
                            <div
                                className='text-danger'
                                style={{
                                    position: 'absolute',
                                    top: -10,
                                    right: 5,
                                    backgroundColor: 'white',
                                    cursor: 'pointer',
                                }}
                                onClick={() => {
                                    setIsOpenModalDelete(!isOpenModalDelete);
                                    setSelectedDelivery(item._id);
                                }}
                            >
                                <i className='fas fa-times-circle'></i>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className='mt-5 btn btn btn-dark btn-hover-primary rounded-0'
                    onClick={() => {
                      setIsOpenModalAdd(!isOpenModalAdd);
                      setMethod('create');
                    }}
                >
                    <i className='fa fa-edit me-2'></i>Add Address
                </button>
            </div>

            <Modal isOpen={isOpenModalEdit} toggle={() => setIsOpenModalEdit(!isOpenModalEdit)}>
                <ModalHeader toggle={() => setIsOpenModalEdit(!isOpenModalEdit)}></ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validate}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                            errors,
                            touched,
                            setFieldValue,
                        }) => (
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label>Họ và tên</Label>
                                    <Input
                                        name='name'
                                        placeholder='Họ và tên'
                                        value={values.name}
                                        onChange={handleChange}
                                    />
                                    {errors.name && touched.name ? (
                                        <p className='text-danger'>{errors.name}</p>
                                    ) : null}
                                </FormGroup>
                                <FormGroup>
                                    <Label>Số điện thoại</Label>
                                    <Input
                                        name='phone'
                                        placeholder='Số điện thoại'
                                        value={values.phone}
                                        onChange={handleChange}
                                    />
                                    {errors.phone && touched.phone ? (
                                        <p className='text-danger'>{errors.phone}</p>
                                    ) : null}
                                </FormGroup>
                                <FormGroup>
                                    <Label>Tỉnh / thành</Label>
                                    <Input
                                        name='city'
                                        type='select'
                                        onChange={(e) => {
                                            setFieldValue(
                                                'address',
                                                `${values.street}, ${values.district}, ${values.city}`
                                            );
                                            handleChange(e);
                                        }}
                                    >
                                        {cities.map((city: any) => (
                                            <option value={city.name}>{city.name}</option>
                                        ))}
                                    </Input>
                                    {errors.city && touched.city ? (
                                        <p className='text-danger'>{errors.city}</p>
                                    ) : null}
                                </FormGroup>
                                <FormGroup>
                                    <Label>Quận / huyện</Label>
                                    <Input
                                        name='district'
                                        type='select'
                                        onChange={(e) => {
                                            setFieldValue(
                                                'address',
                                                `${values.street}, ${values.district}, ${values.city}`
                                            );
                                            handleChange(e);
                                        }}
                                    >
                                        {values.city !== '' &&
                                            cities
                                                .find((city) => city.name === values.city)
                                                ?.district.map((dis) => (
                                                    <option value={dis.name}>{dis.name}</option>
                                                ))}
                                    </Input>
                                    {errors.district && touched.district ? (
                                        <p className='text-danger'>{errors.district}</p>
                                    ) : null}
                                </FormGroup>
                                <FormGroup>
                                    <Label>Địa Chỉ</Label>
                                    <Input
                                        name='street'
                                        placeholder='Địa chỉ'
                                        value={values.street}
                                        onChange={(e) => {
                                            setFieldValue(
                                                'address',
                                                `${values.street}, ${values.district}, ${values.city}`
                                            );
                                            handleChange(e);
                                        }}
                                    />
                                    {errors.street && touched.street ? (
                                        <p className='text-danger'>{errors.street}</p>
                                    ) : null}
                                </FormGroup>
                                <Button color='primary' type='submit' className='me-4'>
                                    Thêm
                                </Button>
                                <Button
                                    onClick={() => setIsOpenModalEdit(!isOpenModalEdit)}
                                    color='danger'
                                >
                                    Hủy
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </ModalBody>
            </Modal>
            <Modal isOpen={isOpenModalAdd} toggle={() => setIsOpenModalAdd(!isOpenModalAdd)}>
                <ModalHeader toggle={() => setIsOpenModalAdd(!isOpenModalAdd)}></ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validate}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                            errors,
                            touched,
                            setFieldValue,
                        }) => (
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label>Họ và tên</Label>
                                    <Input
                                        name='name'
                                        placeholder='Họ và tên'
                                        value={values.name}
                                        onChange={handleChange}
                                    />
                                    {errors.name && touched.name ? (
                                        <p className='text-danger'>{errors.name}</p>
                                    ) : null}
                                </FormGroup>
                                <FormGroup>
                                    <Label>Số điện thoại</Label>
                                    <Input
                                        name='phone'
                                        placeholder='Số điện thoại'
                                        value={values.phone}
                                        onChange={handleChange}
                                    />
                                    {errors.phone && touched.phone ? (
                                        <p className='text-danger'>{errors.phone}</p>
                                    ) : null}
                                </FormGroup>
                                <FormGroup>
                                    <Label>Tỉnh / thành</Label>
                                    <Input
                                        name='city'
                                        type='select'
                                        onChange={(e) => {
                                            setFieldValue(
                                                'address',
                                                `${values.street}, ${values.district}, ${values.city}`
                                            );
                                            handleChange(e);
                                        }}
                                    >
                                        {cities.map((city: any) => (
                                            <option value={city.name}>{city.name}</option>
                                        ))}
                                    </Input>
                                    {errors.city && touched.city ? (
                                        <p className='text-danger'>{errors.city}</p>
                                    ) : null}
                                </FormGroup>
                                <FormGroup>
                                    <Label>Quận / huyện</Label>
                                    <Input
                                        name='district'
                                        type='select'
                                        onChange={(e) => {
                                            setFieldValue(
                                                'address',
                                                `${values.street}, ${values.district}, ${values.city}`
                                            );
                                            handleChange(e);
                                        }}
                                    >
                                        {values.city !== '' &&
                                            cities
                                                .find((city) => city.name === values.city)
                                                ?.district.map((dis) => (
                                                    <option value={dis.name}>{dis.name}</option>
                                                ))}
                                    </Input>
                                    {errors.district && touched.district ? (
                                        <p className='text-danger'>{errors.district}</p>
                                    ) : null}
                                </FormGroup>
                                <FormGroup>
                                    <Label>Địa Chỉ</Label>
                                    <Input
                                        name='street'
                                        placeholder='Địa chỉ'
                                        value={values.street}
                                        onChange={(e) => {
                                            setFieldValue(
                                                'address',
                                                `${values.street}, ${values.district}, ${values.city}`
                                            );
                                            handleChange(e);
                                        }}
                                    />
                                    {errors.street && touched.street ? (
                                        <p className='text-danger'>{errors.street}</p>
                                    ) : null}
                                </FormGroup>
                                <Button color='primary' type='submit' className='me-4'>
                                    Thêm
                                </Button>
                                <Button
                                    onClick={() => setIsOpenModalAdd(!isOpenModalAdd)}
                                    color='danger'
                                >
                                    Hủy
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </ModalBody>
            </Modal>
            <Modal isOpen={isOpenModalDelete} toggle={() => setIsOpenModalDelete(!isOpenModalDelete)}>
                <ModalHeader toggle={() => setIsOpenModalDelete(!isOpenModalDelete)}>
                    Bạn có muốn xóa không?
                </ModalHeader>
                <ModalFooter>
                    <Button color='danger' onClick={() => onDelete()}>Có</Button>
                    <Button color='success' onClick={() => setIsOpenModalDelete(!isOpenModalDelete)}>Không</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

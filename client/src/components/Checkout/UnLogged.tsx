import React, { ReactElement, useContext, useEffect } from 'react';
import { CheckoutContext } from '../../context/checkoutContext';

interface Props {
    values: any;
    handleChange: any;
    setFieldValue: any;
    handleSubmit: any;
    errors: any;
    touched: any;
}

export default function UnLogged({values, handleChange, setFieldValue, touched, errors}: Props): ReactElement {
    const {cities} = useContext(CheckoutContext)

    useEffect(() => {
        setFieldValue('address', `${values.street} ${values.selectedDistrict} ${values.selectedCity}`)
    }, [values.selectedDistrict, values.selectedCity, values.street]) 

    return (
        <div className='col-lg-6 col-12 mb-4'>
            <div className='checkbox-form'>
                <h3 className='title'>Billing Details</h3>

                <div className='row'>
                    <div className='col-md-12'>
                        <div className='checkout-form-list'>
                            <label>
                                Họ và tên <span className='required text-danger'>*</span>
                            </label>
                            <input
                                value={values.name}
                                onChange={handleChange}
                                placeholder=''
                                name='name'
                                type='text'
                            />
                            {errors.name && touched.name && (
                                <div className='text-danger'>{errors.name}</div>
                            )}
                        </div>
                    </div>

                    
                    <div className='col-md-12'>
                        <div className='checkout-form-list'>
                            <label>
                                Số điện thoại <span className='required text-danger'>*</span>
                            </label>
                            <input
                                value={values.phone}
                                onChange={handleChange}
                                placeholder=''
                                name='phone'
                                type='text'
                            />
                            {errors.phone && touched.phone && (
                                <div className='text-danger'>{errors.phone}</div>
                            )}
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className='checkout-form-list'>
                            <label>Tỉnh / thành</label>
                            <select
                                className='myniceselect nice-select wide rounded-0'
                                name='selectedCity'
                                onChange={(e) => {
                                    setFieldValue('selectedCity', e.target.value);
                                    setFieldValue(
                                        'selectedDistrict',
                                        cities.find((city) => city.name === e.target.value)
                                            ?.district[0].name as string
                                    );
                                }}
                            >
                                {cities.map((city) => (
                                    <option value={city.name}>{city.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='checkout-form-list'>
                            <label>Quận / huyện</label>
                            <select
                                className='myniceselect nice-select wide rounded-0'
                                onChange={(e) => {
                                    setFieldValue('selectedDistrict', e.target.value)
                                }}
                                name='selectedDistrict'
                            >
                                {cities
                                    .find((city) => city.name === values.selectedCity)
                                    ?.district.map((dis) => (
                                        <option value={dis.name}>{dis.name}</option>
                                    ))}
                            </select>
                        </div>
                    </div>

                    <div className='col-md-12 mt-5'>
                        <div className='checkout-form-list'>
                            <label>
                                Địa chỉ <span className='required text-danger'>*</span>
                            </label>
                            <input
                                value={values.street}
                                onChange={handleChange}
                                name='street'
                                placeholder=''
                                type='text'
                            />
                            {errors.address && touched.address && (
                                <div className='text-danger'>{errors.address}</div>
                            )}
                        </div>
                    </div>

                    {/* Create new Account */}
                    <div className='col-md-12'>
                        <div className='checkout-form-list create-acc'>
                            <input
                                id='cbox'
                                type='checkbox'
                                name='create_new_account'
                                onChange={handleChange}
                            />
                            <label htmlFor='cbox' className='checkbox-label'>
                                Create an account?
                            </label>
                        </div>
                        <div id='cbox-info' className='checkout-form-list create-account'>
                            <p className='mb-2'>
                                Create an account by entering the information below. If you are a
                                returning customer please login at the top of the page.
                            </p>
                            <label>
                                Username <span className='required text-danger'>*</span>
                            </label>
                            <input
                                value={values.username}
                                onChange={handleChange}
                                placeholder='Username'
                                name='username'
                                type='password'
                            />
                            {errors.username && touched.username && (
                                <div className='text-danger'>{errors.username}</div>
                            )}
                            <label className='mt-5'>
                                Password <span className='required text-danger'>*</span>
                            </label>
                            <input
                                value={values.password}
                                onChange={handleChange}
                                placeholder='Password'
                                name='password'
                                type='password'
                            />
                            {errors.password && touched.password && (
                                <div className='text-danger'>{errors.password}</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

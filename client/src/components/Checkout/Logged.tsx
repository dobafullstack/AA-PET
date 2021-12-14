import { Dispatch, SetStateAction, useContext } from 'react';
import { CheckoutContext } from '../../context/checkoutContext';
import CityModel from '../../models/CityModel';

interface LoggedProps {}

const Logged = () => {
    const {
        name,
        setName,
        email,
        setEmail,
        address,
        setAddress,
        phone,
        setPhone,
        setSelectedCity,
        setSelectedDistrict,
        cities,
        username,
        setUsername,
        password,
        setPassword,
        selectedCity,
    } = useContext(CheckoutContext);

    return (
        <div className='col-lg-6 col-12 mb-4'>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className='checkbox-form'>
                    <h3 className='title'>Billing Details</h3>

                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='checkout-form-list'>
                                <label>
                                    Họ và tên <span className='required text-danger'>*</span>
                                </label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder=''
                                    type='text'
                                />
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='checkout-form-list'>
                                <label>
                                    Email <span className='required text-danger'>*</span>
                                </label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder=''
                                    type='text'
                                />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='checkout-form-list'>
                                <label>
                                    Số điện thoại <span className='required text-danger'>*</span>
                                </label>
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder=''
                                    type='text'
                                />
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='checkout-form-list'>
                                <label>Tỉnh / thành</label>
                                <select
                                    className='myniceselect nice-select wide rounded-0'
                                    onChange={(e) => {
                                        setSelectedCity(e.target.value);
                                        setSelectedDistrict(
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
                                    onChange={(e) => setSelectedDistrict(e.target.value)}
                                >
                                    {cities
                                        .find((city) => city.name === selectedCity)
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
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder=''
                                    type='text'
                                />
                            </div>
                        </div>

                        {/* Create new Account */}
                        <div className='col-md-12'>
                            <div className='checkout-form-list create-acc'>
                                <input id='cbox' type='checkbox' />
                                <label htmlFor='cbox' className='checkbox-label'>
                                    Create an account?
                                </label>
                            </div>
                            <div id='cbox-info' className='checkout-form-list create-account'>
                                <p className='mb-2'>
                                    Create an account by entering the information below. If you are
                                    a returning customer please login at the top of the page.
                                </p>
                                <label>
                                    Username <span className='required text-danger'>*</span>
                                </label>
                                <input
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder='Username'
                                    type='password'
                                />
                                <label className='mt-5'>
                                    Password <span className='required text-danger'>*</span>
                                </label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Password'
                                    type='password'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Logged;

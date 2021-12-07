import React, { ReactElement, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useGetMyAccountQuery } from '../app/reducers/auth.reducer';
import Breadcrumb from '../components/Layout/Breadcrumb';
import Loading from '../components/Layout/Loading';
import { AccountDetail, Address, Dashboard, Order } from '../components/Personal';
import { AuthContext } from '../context/authContext';
import UserModel from '../models/UserModel';

interface Props {}

export default function Account({}: Props): ReactElement {
    const { setIsLogin } = useContext(AuthContext);
    const { data, isFetching } = useGetMyAccountQuery(null);

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        setIsLogin(false);
        return <Navigate to='/' />;
    };

    return (
        <>
            <Breadcrumb title='My Account'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>My Account</li>
            </Breadcrumb>
            {isFetching ? (
                <Loading />
            ) : (
                <div className='section section-margin'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='myaccount-page-wrapper'>
                                    <div className='row'>
                                        <div className='col-lg-3 col-md-4'>
                                            <div className='myaccount-tab-menu nav' role='tablist'>
                                                <a href='#dashboad' className='active' data-bs-toggle='tab'>
                                                    <i className='fa fa-dashboard'></i>
                                                    Dashboard
                                                </a>
                                                <a href='#orders' data-bs-toggle='tab'>
                                                    <i className='fa fa-cart-arrow-down'></i> Orders
                                                </a>

                                                <a href='#address-edit' data-bs-toggle='tab'>
                                                    <i className='fa fa-map-marker'></i> address
                                                </a>
                                                <a href='#account-info' data-bs-toggle='tab'>
                                                    <i className='fa fa-user'></i> Account Details
                                                </a>
                                                <a href='javascript:void;' onClick={() => handleLogout()}>
                                                    <i className='fa fa-sign-out'></i> Logout
                                                </a>
                                            </div>
                                        </div>

                                        <div className='col-lg-9 col-md-8'>
                                            <div className='tab-content' id='myaccountContent'>
                                                <Dashboard name={data?.result.name as string} handleLogout={handleLogout} />
                                                <Order />
                                                <Address />
                                                <AccountDetail user={data?.result as UserModel}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

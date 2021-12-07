import React, { ReactElement } from 'react'

interface Props {
    name: string;
    handleLogout: () => void;
}

export default function Dashboard({ name, handleLogout }: Props): ReactElement {
    const lastName = name.split(' ')[name.split(' ').length - 1];

    return (
        <div className='tab-pane fade show active' id='dashboad' role='tabpanel'>
            <div className='myaccount-content'>
                <h3 className='title'>Dashboard</h3>
                <div className='welcome'>
                    <p>
                        Hello, <strong>{name}</strong> (If Not <strong>{lastName} !</strong>
                        <a href='javascript:void;' className='logout' onClick={() => handleLogout()}>
                            {' '}
                            Logout
                        </a>
                        )
                    </p>
                </div>
                <p className='mb-0'>
                    From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and edit your password and account details.
                </p>
            </div>
        </div>
    );
}

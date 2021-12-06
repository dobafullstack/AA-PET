import React, { ReactElement } from 'react'

interface Props {
    
}

export default function Dashboard({}: Props): ReactElement {
    return (
      <div className='tab-pane fade show active' id='dashboad' role='tabpanel'>
        <div className='myaccount-content'>
          <h3 className='title'>Dashboard</h3>
          <div className='welcome'>
            <p>
              Hello, <strong>Alex Aya</strong> (If Not <strong>Aya !</strong>
              <a href='login.html' className='logout'>
                {' '}
                Logout
              </a>
              )
            </p>
          </div>
          <p className='mb-0'>From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and edit your password and account details.</p>
        </div>
      </div>
    );
}

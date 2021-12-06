import React, { ReactElement } from 'react'

interface Props {
    
}

export default function Address({}: Props): ReactElement {
    return (
      <div className='tab-pane fade' id='address-edit' role='tabpanel'>
        <div className='myaccount-content'>
          <h3 className='title'>Billing Address</h3>
          <address>
            <p>
              <strong>Alex Aya</strong>
            </p>
            <p>
              1234 Market ##, Suite 900 <br />
              Lorem Ipsum, ## 12345
            </p>
            <p>Mobile: (123) 123-456789</p>
          </address>
          <a href='#' className='btn btn btn-dark btn-hover-primary rounded-0'>
            <i className='fa fa-edit me-2'></i>Edit Address
          </a>
        </div>
      </div>
    );
}

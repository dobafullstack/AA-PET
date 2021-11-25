import React from 'react'
import { DashboardColorImg } from '../assets/images';
import { LargeBox, TopTitle } from '../components/Common';

interface Props {
    
}

export const Product = (props: Props) => {
    return (
        <div className='product-wrapper'>
            <TopTitle
                img={DashboardColorImg}
                title='Product'
                subTitle='Display all products'
            />
            <LargeBox show_btn_add>

            </LargeBox>
        </div>
    );
}

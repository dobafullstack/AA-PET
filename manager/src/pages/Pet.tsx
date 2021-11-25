import React from 'react'
import { DashboardColorImg } from '../assets/images';
import { LargeBox, TopTitle } from '../components/Common';

interface Props {
    
}

export const Pet = (props: Props) => {
    return (
        <div className='category-detail-wrapper'>
            <TopTitle
                img={DashboardColorImg}
                title='Pet'
                subTitle='Display all pets'
            />
            <LargeBox show_btn_add>
                
            </LargeBox>
        </div>
    );
}

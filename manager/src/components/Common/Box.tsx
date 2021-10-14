import React from 'react'
import '../../assets/sass/components/box.scss'

interface BoxProps{
    children: React.ReactNode
    title: string;
    img: string;
}

export const Box = ({children, title, img}: BoxProps) => {
    return (
        <div className='box-wrapper'>
            <div className='title-top'>
                <div className='d-flex align-items-center'>
                    <img src={img} alt='' />
                    <span>{title}</span>
                </div>
            </div>
            {children}
        </div>
    );
}

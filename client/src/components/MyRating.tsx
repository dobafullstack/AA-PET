import React, { useState } from 'react';
import ReactStars from 'react-rating';

interface IProps {
    onChange: (point: number) => void;
    value: number;
    readonly?: boolean
}

export default function MyRating({ onChange, value, readonly }: IProps) {

    return (
        <div className='d-flex justify-content-center'>
            <ReactStars
                start={0}
                stop={5}
                step={1}
                initialRating={value}
                readonly={readonly}
                onChange={onChange}
                emptySymbol={<i className='far fa-star' style={{ color: '#f6ab49' }}></i>}
                fullSymbol={<i className='fas fa-star' style={{ color: '#f6ab49' }}></i>}
            />
        </div>
    );
}

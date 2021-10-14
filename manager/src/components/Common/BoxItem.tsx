import React from "react";

interface BoxItemProps {
    img: string;
    title: string;
    mainText: string;
    className?: string;
}

export const BoxItem = ({ img, title, mainText, className }: BoxItemProps) => {
    return (
        <div className='box-item'>
            <div className={`img-wrapper ${className}`}>
                <img src={img} alt='' />
            </div>
            <div className='text-wrapper'>
                <span>{title}</span>
                <p>{mainText}</p>
            </div>
        </div>
    );
};

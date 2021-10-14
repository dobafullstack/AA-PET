import React from "react";
import "../../assets/sass/components/title-top.scss";

interface TopTitleProps {
    img: string;
    title: string;
    subTitle: string;
}

export function TopTitle({ img, title, subTitle }: TopTitleProps) {
    return (
        <div className="top-title-wrapper">
            <img src={img} alt='' />
            <div className="text-wrapper">
                <p>{title}</p>
                <span>{subTitle}</span>
            </div>
        </div>
    );
}

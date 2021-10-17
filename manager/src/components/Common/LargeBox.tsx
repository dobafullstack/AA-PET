import React from "react";
import "../../assets/sass/components/large-box.scss";

interface Props {
    children: React.ReactNode;
}

export const LargeBox = (props: Props) => {
    return <div className='large-box-wrapper'>{props.children}</div>;
};

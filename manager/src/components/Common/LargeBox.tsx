import React from "react";
import "../../assets/sass/components/large-box.scss";

interface Props {
    children: React.ReactNode;
    show_btn_add?: boolean;
    onBtnAddClick?: () => void;
}

export const LargeBox = (props: Props) => {
    return (
        <div className='large-box-wrapper'>
            {props.show_btn_add ? (
                <div
                    className='add-btn-wrapper'
                    onClick={props.onBtnAddClick}>
                    <i className='fal fa-plus'></i>
                </div>
            ) : null}
            {props.children}
        </div>
    );
};

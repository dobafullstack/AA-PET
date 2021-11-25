import React, { useState } from "react";
import { Col, Input, Row } from "reactstrap";
import { DashboardColorImg } from "../assets/images";
import { LargeBox, TopTitle } from "../components/Common";
import MyModal from "../components/Common/MyModal";

interface Props {}

export const Category = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const onBtnAddClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='category-wrapper'>
            <TopTitle
                img={DashboardColorImg}
                title='Category'
                subTitle='Display all categories'
            />
            <MyModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title='Create new category'
                body={<ModalBody />}
                ok={() => console.log("object")}
            />

            <LargeBox show_btn_add onBtnAddClick={onBtnAddClick}>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className='text-center'>Name</th>
                            <th className='text-end'>Edit</th>
                            <th className='text-end'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td className='text-center'>Food</td>
                            <td className='text-end'>
                                <i className='fal fa-edit text-primary'></i>
                            </td>
                            <td className='text-end'>
                                <i className='fas fa-trash text-danger'></i>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td className='text-center'>Food</td>
                            <td className='text-end'>
                                <i className='fal fa-edit text-primary'></i>
                            </td>
                            <td className='text-end'>
                                <i className='fas fa-trash text-danger'></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </LargeBox>
        </div>
    );
};

const ModalBody = () => {
    return (
        <>
            <Input placeholder="Category name"/>
        </>
    )
}

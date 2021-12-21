import React, { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { ModalLayout } from "../components";
import Td from "../components/Common/Td";
import { CommonLayout } from "../Layout/AppLayout";

interface Props {}

interface ModalProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    selectedItem: string;
}

export default function Attributes({}: Props): ReactElement {

    return (
        <CommonLayout
            AddModal={AddModal}
            onDelete={() => null}
            EditModal={EditModal}
            onReload={() => null}>
            <h4 className='card-title'>Striped Table</h4>
            <div className='table-responsive'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>First name</th>
                            <th>Progress</th>
                            <th>Amount</th>
                            <th>Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Td className='py-1'>
                                <img
                                    src='../../assets/images/faces/face1.jpg'
                                    alt='image'
                                />{" "}
                            </Td>
                            <Td>Herman Beck</Td>
                            <Td>
                                <div className='progress'>
                                    <div
                                        className='progress-bar bg-success'
                                        role='progressbar'
                                        style={{ width: "25%" }}
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                </div>
                            </Td>
                            <Td>$ 77.99</Td>
                            <Td>May 15, 2015</Td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </CommonLayout>
    );
}

function AddModal({
    isOpen,
    setIsOpen,
    selectedItem,
}: ModalProps): ReactElement {
    const onSubmit = () => console.log("asgfaga");

    return (
        <ModalLayout isOpen={isOpen} setIsOpen={setIsOpen} onSubmit={onSubmit}>
            {selectedItem}
        </ModalLayout>
    );
}

function EditModal({
    isOpen,
    setIsOpen,
    selectedItem,
}: ModalProps): ReactElement {
    const onSubmit = () => console.log("asgfaga");

    return (
        <ModalLayout isOpen={isOpen} setIsOpen={setIsOpen} onSubmit={onSubmit}>
            {selectedItem}
        </ModalLayout>
    );
}

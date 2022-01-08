import React, { ReactElement, useState } from "react";
import { ContextMenu, MenuItem } from "react-contextmenu";
import { Outlet, useLocation } from "react-router-dom";
import { ModalLayout, Navbar, Sidebar } from "../components";

interface Props {
    children: React.ReactNode;
    AddModal?: any;
    EditModal?: any;
    DetailModal?: any;
    onReload: () => void;
    onDelete: (id: string) => void;
}

export default function AppLayout(): ReactElement {
    return (
        <>
            <Navbar />
            <div className='container-fluid page-body-wrapper'>
                <Sidebar />
                <div className='main-panel'>
                    <div className='content-wrapper'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export function CommonLayout({
    children,
    AddModal,
    EditModal,
    onReload,
    onDelete,
    DetailModal,
}: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("");
    const location = useLocation();

    const handleClick = (data: any, action: any) => {
        setSelectedItem(action.target.id);
        if (action.action === "edit") setIsEditOpen(!isEditOpen);
        if (action.action === "delete") setIsDeleteOpen(!isDeleteOpen);
        if (action.action === "detail") setIsDetailOpen(!isDeleteOpen);
    };

    return (
        <div className='row'>
            <div className='col-lg-12 grid-margin'>
                <div className='card'>
                    <div className='card-body'>
                        {!location.pathname.includes("order") ? !location.pathname.includes("bill") ? (
                                <button
                                    type='button'
                                    className='btn btn-success btn-rounded btn-icon mb-3'
                                    onClick={() => setIsOpen(!isOpen)}>
                                    <i className='mdi mdi-plus'></i>
                                </button>
                            ) : null : null}
                        <button
                            type='button'
                            className='btn btn-info ml-3 btn-rounded btn-icon mb-3'
                            onClick={() => onReload()}>
                            <i className='mdi mdi-reload'></i>
                        </button>
                        {children}
                    </div>
                </div>
            </div>

            <ContextMenu
                id='same_unique_identifier'
                style={{
                    backgroundColor: "white",
                    boxShadow: "1px 1px 4px rgba(0,0,0,0.3)",
                }}
                className='p-3 rounded'>
                {location.pathname.includes("order") ||
                location.pathname.includes("bill") ? (
                    <>
                        <MenuItem
                            data={{ action: "detail" }}
                            onClick={handleClick}>
                            <div
                                className='d-flex align-items-center text-warning'
                                style={{
                                    gap: 10,
                                    fontSize: 16,
                                    cursor: "pointer",
                                }}>
                                <i className='mdi mdi-information-outline'></i>
                                <p style={{ fontSize: 16 }} className='mb-0'>
                                    Detail
                                </p>
                            </div>
                        </MenuItem>
                    </>
                ) : (
                    <>
                        <MenuItem
                            data={{ action: "edit" }}
                            onClick={handleClick}>
                            <div
                                className='d-flex align-items-center text-primary'
                                style={{
                                    gap: 10,
                                    fontSize: 16,
                                    cursor: "pointer",
                                }}>
                                <i className='mdi mdi-pencil'></i>
                                <p style={{ fontSize: 16 }} className='mb-0'>
                                    Edit
                                </p>
                            </div>
                        </MenuItem>
                        <hr />

                        <MenuItem
                            data={{ action: "delete" }}
                            onClick={handleClick}>
                            <div
                                className='d-flex align-items-center text-danger'
                                style={{
                                    gap: 10,
                                    fontSize: 16,
                                    cursor: "pointer",
                                }}>
                                <i className='mdi mdi-delete'></i>
                                <p style={{ fontSize: 16 }} className='mb-0'>
                                    Delete
                                </p>
                            </div>
                        </MenuItem>
                    </>
                )}
            </ContextMenu>

            {AddModal && (
                <AddModal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    selectedItem={selectedItem}
                />
            )}
            {EditModal && (
                <EditModal
                    isOpen={isEditOpen}
                    setIsOpen={setIsEditOpen}
                    selectedItem={selectedItem}
                />
            )}
            {location.pathname.includes("order") ||
            location.pathname.includes("bill") ? (
                <DetailModal
                    isOpen={isDetailOpen}
                    setIsOpen={setIsDetailOpen}
                    selectedItem={selectedItem}
                />
            ) : null}
            <ModalLayout
                isOpen={isDeleteOpen}
                setIsOpen={setIsDeleteOpen}
                onSubmit={() => {
                    onDelete(selectedItem);
                    setIsDeleteOpen(false);
                }}>
                Do you want to delete it?
            </ModalLayout>
        </div>
    );
}

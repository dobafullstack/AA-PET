import React, { Dispatch, ReactElement, SetStateAction } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

interface Props {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    onSubmit: (values?: any) => void;
    children: React.ReactNode;
    formik?: boolean
}

export default function ModalLayout({
    isOpen,
    setIsOpen,
    onSubmit,
    children,
    formik
}: Props): ReactElement {
    return (
        <Modal toggle={() => setIsOpen(!isOpen)} isOpen={isOpen}>
            <ModalHeader
                close={
                    <button
                        className='close'
                        onClick={() => setIsOpen(!isOpen)}>
                        ×
                    </button>
                }>
                Modal title
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            {!formik && (
                <ModalFooter>
                    <Button color='primary' onClick={() => onSubmit()}>
                        Submit
                    </Button>{" "}
                    <Button color='danger' onClick={() => setIsOpen(!isOpen)}>
                        Cancel
                    </Button>
                </ModalFooter>
            )}
        </Modal>
    );
}

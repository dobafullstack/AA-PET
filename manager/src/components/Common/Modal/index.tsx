import React, { Dispatch, ReactElement, SetStateAction } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

interface Props {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    onSubmit: () => void;
    children: React.ReactNode;
}

export default function ModalLayout({
    isOpen,
    setIsOpen,
    onSubmit,
    children,
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
            <ModalFooter>
                <Button color='primary' onClick={() => onSubmit()}>
                    Submit
                </Button>{" "}
                <Button color='danger' onClick={() => setIsOpen(!isOpen)}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
}

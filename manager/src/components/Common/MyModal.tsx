import { ok } from 'assert';
import React, { SetStateAction } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

interface Props {
    title: string;
    body: React.ReactNode;
    isOpen: boolean;
    setIsOpen: React.Dispatch<SetStateAction<boolean>>;
    ok: () => void;
}

export default function MyModal({body, isOpen, ok, setIsOpen, title} : Props) {
    return (
        <>
            <Modal
                isOpen={isOpen}
                centered
                fullscreen='lg'
                size='lg'
                toggle={() => setIsOpen(!isOpen)}>
                <ModalHeader
                    toggle={() => setIsOpen(!isOpen)}
                    close={
                        <button
                            className='close text-danger'
                            style={{
                                border: "none",
                                backgroundColor: "white",
                                fontSize: "1.5rem",
                            }}
                            onClick={function noRefCheck() {}}>
                            ×
                        </button>
                    }>
                    {title}
                </ModalHeader>
                <ModalBody>{body}</ModalBody>
                <ModalFooter>
                    <Button
                        color='primary'
                        onClick={() => {
                            ok();
                            setIsOpen(!isOpen);
                        }}>
                        Add
                    </Button>{" "}
                    <Button color='danger' onClick={() => setIsOpen(!isOpen)}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

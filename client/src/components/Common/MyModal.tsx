import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { MyRating } from './index';

interface MyModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MyModal = ({ isOpen, setIsOpen }: MyModalProps) => {
    const [point, setPoint] = useState(0);
    const [comment, setComment] = useState('');

    const toggle = () => setIsOpen(!isOpen);

    const closeBtn = (
        <button className="close" onClick={toggle} style={style.btnClose}>
            <i className="fal fa-times"></i>
        </button>
    );

    // Reset point & comment when close the modal
    useEffect(() => {
        setPoint(0);
        setComment('');
    }, [isOpen]);

    return (
        <Modal isOpen={isOpen} toggle={toggle} style={{ fontFamily: 'Spartan' }}>
            <ModalHeader toggle={toggle} close={closeBtn}>
                Write a comment
            </ModalHeader>
            <ModalBody>
                <Input
                    type="textarea"
                    className="mb-3"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <div className="d-flex justify-content-center">
                    <MyRating
                        readonly={false}
                        point={point}
                        onChange={(value: number) => setPoint(value)}
                    />
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="success" onClick={toggle}>
                    Write
                </Button>{' '}
                <Button color="danger" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

const style = {
    btnClose: {
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
    },
};

import React from 'react';
import { Button, Modal, } from 'react-bootstrap';

const NewModal = (props) => {
    return (
        <Modal
            size={props.size}
            show={props.show}
            onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
            <Modal.Footer>
                {
                    props.buttons ? props.buttons.map((btn, index) =>
                        <Button key={index} variant={btn.color} onClick={btn.onClick}>{btn.label}</Button>
                    ) :
                        <Button
                            variant="secondary"
                            style={{ backgroundColor: "#333" }}
                            {...props}
                            className="btn-sm"
                            onClick={props.onSubmit}>Save</Button>
                }
            </Modal.Footer>
        </Modal>
    );
};

export default NewModal;
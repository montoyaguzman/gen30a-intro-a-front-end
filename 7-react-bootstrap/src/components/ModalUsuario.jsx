import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalUsuario({ isShow = false, onHide, user = {} }) {
    return (
        <>
            <Modal show={isShow} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>{user?.firstName} {user?.lastName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={user?.image} alt={user?.firstName} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onHide}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export { ModalUsuario }
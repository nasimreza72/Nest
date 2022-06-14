import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./LegalName.scss"

export default function LegalName() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        

        <Modal.Body>
            <div className="header">
                <Modal.Title>Legal name</Modal.Title>
                <Button className="link" variant="link" onClick={handleClose}>
                    Cancel
                </Button>
            </div>
            <div className="modalBody">
                This is the name on your travel document, which could be a license or a passport.
                <form action="">
                    <input className="firstName" type="text" placeholder="First name" />
                    <input className="lastName" type="text" placeholder="Last name" />
                </form>
                <div className="saveButton">
                    <Button variant="dark" size="l">Save</Button>
                </div>
            </div>
        </Modal.Body>
    </Modal>
    </>
  );
}


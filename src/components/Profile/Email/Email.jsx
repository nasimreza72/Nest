import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Email() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [email, setEmail] = useState(null)
  
    const valueSelect = (e) => {
      console.log(email)
      handleClose()
    }
  
    
    return (
      <>
        <Button variant="light" onClick={handleShow}>
          Edit
        </Button>
  
      <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          
          <Modal.Body>
              <div className="modalBody">
                  <div className="header">
                  <Modal.Title>Email</Modal.Title>
                      <Button className="link" variant="link" onClick={handleClose}>
                      Cancel
                  </Button>
                  </div>
                  <form action="">
                    <input className="firstName" type="text" 
                           placeholder="E-Mail" 
                           onChange={ e => setEmail(e.target.value)} />
                  </form>
                  <div className="saveButton">
                      <Button variant="dark" size="l" onClick={valueSelect}>Save</Button>
                  </div>
                 
              </div>
                
          </Modal.Body>
      </Modal>
      </>
    );
  }
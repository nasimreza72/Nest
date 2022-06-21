import "./Gender.scss"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


export default function Gender() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [gender, setGender] = useState("")

  const valueSelect = (e) => {
    console.log(gender)
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
                <Modal.Title>Gender</Modal.Title>
                    <Button className="link" variant="link" onClick={handleClose}>
                    Cancel
                </Button>
                </div>
                <Form.Select placeholder="Gender" aria-label="Default select example" 
                             className="select"
                             onChange={(e) => setGender(e.target.value)}>
                    <option>Select Gender</option>
                    <option value="He">He</option>
                    <option value="She">She</option>
                    <option value="Other">Other</option>
                </Form.Select>
                <div className="saveButton">
                    <Button variant="dark" size="l" onClick={valueSelect}>Save</Button>
                </div>
               
            </div>
              
        </Modal.Body>
    </Modal>
    </>
  );
}

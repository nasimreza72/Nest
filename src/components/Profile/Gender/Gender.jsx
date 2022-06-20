import "./Gender.scss"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';

const options = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' },
  ];

export default function Gender() {
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                <div className="selectContainer" classNamePrefix="innerElements">
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                    />
                </div>
                <div className="saveButton">
                    <Button variant="dark" size="l">Save</Button>
                </div>
               
            </div>
              
        </Modal.Body>
    </Modal>
    </>
  );
}

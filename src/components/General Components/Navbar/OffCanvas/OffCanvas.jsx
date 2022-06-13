import {useState, useRef} from "react";
import {Offcanvas} from "react-bootstrap";
import "./OffCanvas.scss";
import BigNav from "../BigNav/BigNav.jsx";

function OffcanvasNav({showOffCanvas, handleCloseOffCanvas, active, setActive, where,handleCloseModal}) {
    return (
      <>
        <Offcanvas scroll show={showOffCanvas}  onHide={handleCloseOffCanvas} placement="top" > 
        {/* <Offcanvas.Header> */}
        {/* </Offcanvas.Header> */}
          <Offcanvas.Body >
           <BigNav where={where} active={active} setActive={setActive} handleCloseModal={handleCloseModal}/>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  export default OffcanvasNav;
import {Offcanvas} from "react-bootstrap";
import BigNav from "../BigNav/BigNav.jsx";
import { Link } from "react-router-dom";
import RightMenuIcon from "../RightMenuIcon/RightMenuIcon.jsx";
import RightMenu1 from "../RightMenu1/RightMenu1.jsx";
import RightMenu2 from "../RightMenu2/RightMenu2.jsx";
import "./OffCanvas.scss";

function OffcanvasNav({showOffCanvas, handleCloseOffCanvas, active, setActive, where,handleCloseModal,handleShowModal,handleCloseAll}) {
    
    // it will come from Context
    const activeUser={name:"Ömer"}

    return (
      <>
        <Offcanvas scroll show={showOffCanvas}  onHide={handleCloseOffCanvas} placement="top" > 
          <Offcanvas.Body id="body">
          <div className="logo-container">
            <Link to="/">
              <img src="https://www.nest-mv.de/images/nest-logo-web-negativ.svg"/>
            </Link>
          </div>
          <BigNav where={where} active={active} setActive={setActive} handleCloseModal={handleCloseModal} handleShowModal={handleShowModal} handleCloseAll={handleCloseAll}/>
          <div className="right-menu-container">
            <RightMenuIcon/>
            <RightMenu1/>
          </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  export default OffcanvasNav;
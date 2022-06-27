import {useContext} from "react";
import { houseContext } from "../../../Context/HouseContext.jsx";
import { Offcanvas, Button } from "react-bootstrap" 
import {HouseCarousel } from "../";
import "./Slider.scss";

export const Slider = ()=>{
    
    const {show,handleClose} = useContext(houseContext);

    return(
        <div className="slider-container">
            <Offcanvas id="slider" show={show} onHide={handleClose} placement="bottom">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                  <HouseCarousel/>
              </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}
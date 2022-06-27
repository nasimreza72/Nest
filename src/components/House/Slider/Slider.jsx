import {useContext} from "react";
import { houseContext } from "../../../Context/HouseContext.jsx";
import { Offcanvas } from "react-bootstrap" 
// import {HouseCarousel } from "../";
import {BsArrowRightCircle, BsArrowLeftCircle} from "react-icons/bs"
import "./Slider.scss";

export const Slider = ()=>{
    
    const {show, setShow, handleClose, images,counter, setCounter} = useContext(houseContext);
    

    return(
        <div className="slider-container">
            <Offcanvas id="slider" show={show} onHide={handleClose} placement="bottom">
              <Offcanvas.Header id="header">
                {/* <Offcanvas.Title></Offcanvas.Title> */}
                <div>
                  <span onClick={()=>setShow(false)}>X  Close</span>
                </div>
                <div className="img-number">{counter} / {images.length}</div>
                <div></div>
              </Offcanvas.Header>
              <Offcanvas.Body id="body">
                  <div>
                    {counter > 1 ? <BsArrowLeftCircle className="icon" id="icon" onClick={()=> setCounter(counter-1)}/>:null}
                  </div>
                  <div>
                    <img src={images[counter-1]}/>
                  </div>
                  <div>
                    {counter < images.length ? <BsArrowRightCircle className="icon" onClick={()=>setCounter(counter+1)}/> : null}
                  </div>
              </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}
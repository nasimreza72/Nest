import {Offcanvas} from "react-bootstrap";
import "./SearchByRegion.scss";
import WhereComp from "../WhereComp/WhereComp.jsx";
import WhenComp from "../WhenComp/WhenComp.jsx";
import WhoComp from "../WhoComp/WhoComp.jsx";

function SearchByRegion({showModal, handleCloseAll, active}) {
  const whoStyle={
    width:"20rem", 
    left:"50rem", 
    height:"18rem",
    textAlign:"center"
    // display:"flex",
    // justifyContent:"center"
  }
  return (
    <Offcanvas id="offcanvas" style={ active===2 ? whoStyle:null} scroll show={showModal}  onHide={handleCloseAll} placement="top" > 
    {/* <Offcanvas.Header> */}
    {/* </Offcanvas.Header> */}
      <Offcanvas.Body id="offcanvas-body" >
        {active === 0 ? <WhereComp/> :null}
        {active === 1 ? <WhenComp/> :null}
        {active === 2 ? <WhoComp/> :null}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

  export default SearchByRegion;
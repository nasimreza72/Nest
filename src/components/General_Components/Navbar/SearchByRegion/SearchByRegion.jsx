import {useRef,useEffect} from "react";
import WhereComp from "../WhereComp/WhereComp.jsx";
import WhenComp from "../WhenComp/WhenComp.jsx";
import WhoComp from "../WhoComp/WhoComp.jsx";
import "./SearchByRegion.scss";

function SearchByRegion({showModal, handleCloseAll, active, bigNavRef, setShowModal,showOffCanvas}) {

  const offCanvas = useRef();

  const whoStyle={
    width:"20rem", 
    left:"50%", 
    height:"18rem",
    textAlign:"center"
  }

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
        if(!offCanvas.current.contains(e.target) && !bigNavRef.current.contains(e.target) )
          {
            handleCloseAll();
            document.classList.add({})
          }
    })
  }, [])

  return(
    <div ref={offCanvas}   id="offcanvas" style={Object.assign(showModal ? {opacity:1} : {}, active === 2 ? whoStyle: {})  }>
      {active === 0 ? <WhereComp/> :null}
      {active === 1 ? <WhenComp/> :null}
      {active === 2 ? <WhoComp/> :null}
    </div>
  )
}

  export default SearchByRegion;
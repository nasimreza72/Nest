import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import SearchByRegion from "./SearchByRegion/SearchByRegion.jsx";
import BigNav from "./BigNav/BigNav.jsx";
import { BiSearch } from "react-icons/bi";
import RightMenuIcon from "./RightMenuIcon/RightMenuIcon.jsx";
import RightMenu1 from "./RightMenu1/RightMenu1.jsx";
import RightMenu2 from "./RightMenu2/RightMenu2.jsx";
import "./Navbar.scss";


const Navbar=()=>{
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // const [isBigNav, setIsBigNav] = useState(false);

  //active Menu where,when,who
  const [active, setActive] = useState(null);
  const [rightMenu, setRightMenu] = useState(false);
  
  
  // const [isMainActive, setIsMainActive] = useState(true);
  const where = useRef();
  const bigNavRef = useRef();
  
  const handleShowOffCanvas = () => setShowOffCanvas(true);
  // const handleCloseOffCanvas = () => setShowOffCanvas(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  
  
  const handleCloseAll=()=>{
    console.log("handleCloseAll")
    setShowModal(false)
    setShowOffCanvas(false);
  }

  const anyClick=(menu)=>{
    handleShowOffCanvas(); 
    handleShowModal(); 
    setActive(menu)
    where?.current?.focus()
  }

   // it will come from Context
   const activeUser={name:"Ömer"}
  //const activeUser=null;

   const bigNavStyle={
    height:"6.5rem",
    zIndex:1,
    transition:"height .3s"
   }

  return(
      <div className="navbar-container" style={ showOffCanvas ? bigNavStyle:null}>
          <div className="logo-container">
            <Link to="/">
              <img alt="logo" src="https://www.nest-mv.de/images/nest-logo-web-negativ.svg"/>
            </Link>
          </div>
          { showOffCanvas ? 
         <BigNav bigNavRef={bigNavRef} where={where} active={active} setActive={setActive} handleCloseModal={handleCloseModal} handleShowModal={handleShowModal} handleCloseAll={handleCloseAll}/>
          :
          <div className="main-nav">
            <button onClick={()=>anyClick(0)}>Anywhere</button>
            <button onClick={()=>anyClick(1)}>Any week</button>
            <button onClick={()=>anyClick(2)}>Add guests</button>
            <button className="search-button"><BiSearch/></button>
          </div>
          }
          <div className="right-menu-container">
            <Link className="switch-to-hosting" to="hostingPage1">Switch to Hosting</Link>
            <RightMenuIcon setRightMenu={setRightMenu}/>
            {activeUser ? rightMenu && <RightMenu2 setRightMenu={setRightMenu}/> : rightMenu && <RightMenu1 setRightMenu={setRightMenu}/>}
          </div>
          <SearchByRegion bigNavRef={bigNavRef} showOffCanvas={showOffCanvas} showModal={showModal} setShowModal={setShowModal} handleCloseAll={handleCloseAll} active={active}/>
      </div>
    )
  }
export default Navbar;

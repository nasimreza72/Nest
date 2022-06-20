import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import OffcanvasNav from "./OffCanvas/OffCanvas.jsx";
import SearchByRegion from "./SearchByRegion/SearchByRegion.jsx";
import { BiSearch } from "react-icons/bi";
import RightMenuIcon from "./RightMenuIcon/RightMenuIcon.jsx";
import RightMenu1 from "./RightMenu1/RightMenu1.jsx";
import RightMenu2 from "./RightMenu2/RightMenu2.jsx";
import "./index.scss";


const Navbar=()=>{
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const [showModal, setShowModal] = useState(false);
  //active Menu where,when,who
  const [active, setActive] = useState(null);
  const [rightMenu, setRightMenu] = useState(false);
  
  
  // const [isMainActive, setIsMainActive] = useState(true);
  const where = useRef();
  
  const handleShowOffCanvas = () => setShowOffCanvas(true);
  const handleCloseOffCanvas = () => setShowOffCanvas(false);

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
    console.log('where 2:>> ', where?.current );
    setActive(menu)
    where?.current?.focus()
  }

   // it will come from Context
  // const activeUser={name:"Ömer"}
   const activeUser=null;

  return(
      <div className="navbar-container">
          <OffcanvasNav  
            showOffCanvas={showOffCanvas} 
            handleCloseOffCanvas={handleCloseOffCanvas}
            active={active}
            setActive={setActive}
            where={where}
            handleCloseModal={handleCloseModal}
            handleShowModal={handleShowModal}
            handleCloseAll={handleCloseAll}
            rightMenu={rightMenu}
            setRightMenu={setRightMenu}
          />
          <div className="logo-container">
            <Link to="/">
              <img src="https://www.nest-mv.de/images/nest-logo-web-negativ.svg"/>
            </Link>
          </div>
          <div className="main-nav">
            <button onClick={()=>anyClick(0)}>Anywhere</button>
            <button onClick={()=>anyClick(1)}>Any week</button>
            <button onClick={()=>anyClick(2)}>Add guests</button>
            <button className="search-button"><BiSearch/></button>
          </div>
          <div className="right-menu-container">
            <Link className="switch-to-hosting" to="hostingPage1">Switch to Hosting</Link>
            <RightMenuIcon setRightMenu={setRightMenu} rightMenu={rightMenu}/>
            {activeUser ? rightMenu && <RightMenu2 setRightMenu={setRightMenu}/> : rightMenu && <RightMenu1 setRightMenu={setRightMenu}/>}
          </div>

         {/*  <nav>
              <Link className="mr-4 text-amber-800" to="/">Home</Link>
              <Link className="mr-4 text-amber-800" to="houses">Houses</Link>
              <Link className="mr-4 text-amber-800" to="house">House</Link>
              <Link className="mr-4 text-amber-800" to="messages">Messages</Link>
              <Link className="mr-4 text-amber-800" to="hostingPage1">HP1</Link>
          </nav>
         */}
          <SearchByRegion showModal={showModal} handleCloseAll={handleCloseAll} active={active}/>
      </div>
    )
  }
export default Navbar;

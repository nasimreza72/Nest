import { useContext, useState, useRef } from "react";
import { loginContext } from "../../../Context/LoginContext.jsx"
import { Link } from "react-router-dom";
import OffcanvasNav from "./OffCanvas/OffCanvas.jsx";
import "./index.scss";
import SearchByRegion from "./SearchByRegion/SearchByRegion.jsx";
import { BiSearch } from "react-icons/bi";
import {IoReorderThreeOutline} from "react-icons/io5";
import {FaUser} from "react-icons/fa";



const Navbar=()=>{
  const where = useRef();
  console.log('where 1:>> ', where?.current);

  const {login, setLogin, register, setRegister} = useContext(loginContext);
  // const [isMainActive, setIsMainActive] = useState(true);

  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const handleShowOffCanvas = () => setShowOffCanvas(true);
  const handleCloseOffCanvas = () => setShowOffCanvas(false);

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  //active Menu where,when,who
  const [active, setActive] = useState(null);

  const handleCloseAll=()=>{
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

  return(
      <div className="container">
          <OffcanvasNav  
            showOffCanvas={showOffCanvas} 
            handleCloseOffCanvas={handleCloseOffCanvas}
            active={active}
            setActive={setActive}
            where={where}
            handleCloseModal={handleCloseModal}
          />
          {/* <Modal/> */}
          {/* <Modal show={show}/> */}
          <div className="logo">
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
            <div className="menu">
              <IoReorderThreeOutline className="three-line"/>
              <div className="user-container">
                <FaUser/>
              </div>
            </div>
          </div>

          {/* <nav>
              <Link className="mr-4 text-amber-800" to="/">Home</Link>
              <Link className="mr-4 text-amber-800" to="houses">Houses</Link>
              <Link className="mr-4 text-amber-800" to="house">House</Link>
              <Link className="mr-4 text-amber-800" to="hostingPage1">HostingPage1</Link>
              <Link className="mr-4 text-amber-800" to="messages">Messages</Link>
          </nav>
          <button onClick={ e => setLogin(!login)}>Login</button>
          <button onClick={ e => setRegister(!register)}>Register</button> */}
          <SearchByRegion showModal={showModal} handleCloseAll={handleCloseAll} active={active}/>
      </div>
    )
  }
export default Navbar;
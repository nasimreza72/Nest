import { useContext, useState, useRef } from "react";
import { loginContext } from "../../../Context/LoginContext.jsx"
import { Link } from "react-router-dom";
import OffcanvasNav from "./OffCanvas/OffCanvas.jsx";
import "./index.scss";

import SearchByRegion from "./SearchByRegion/SearchByRegion.jsx";
import { BiSearch } from "react-icons/bi";
import {IoReorderThreeOutline} from "react-icons/io5";
import {FaUser} from "react-icons/fa";


const BigNav = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="big-nav">
      <div className="section1">
        <button>Stays</button>
        <button>Experiences</button>
        <button>Online Experiences</button>
      </div>
      <div className="section2">
        <div
          style={
            active == 0
              ? {
                  boxShadow: "0px 0px 10px 4px #DBDBDB",
                  backgroundColor: "white",
                }
              : null
          }
        >
          <h6>Where</h6>
          <input
            onClick={() => setActive(0)}
            style={active == 0 ? { backgroundColor: "white" } : null}
            type="text"
            placeholder="Search destinations"
          />
        </div>
        <div
          style={
            active == 1
              ? {
                  boxShadow: "0px 0px 10px 4px #DBDBDB",
                  backgroundColor: "white",
                }
              : null
          }
        >
          <h6>When</h6>
          <input
            onClick={() => setActive(1)}
            style={active == 1 ? { backgroundColor: "white" } : null}
            type="text"
            placeholder="Any week"
          />
        </div>
        <div
          style={
            active == 2
              ? {
                  boxShadow: "0px 0px 10px 4px #DBDBDB",
                  backgroundColor: "white",
                }
              : null
          }
        >
          <h6>Who</h6>
          <input
            onClick={() => setActive(2)}
            style={active == 2 ? { backgroundColor: "white" } : null}
            type="text"
            placeholder="Add guests"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};


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

          <nav>
              <Link className="mr-4 text-amber-800" to="/">Home</Link>
              <Link className="mr-4 text-amber-800" to="houses">Houses</Link>
              <Link className="mr-4 text-amber-800" to="house">House</Link>
              <Link className="mr-4 text-amber-800" to="hostingPage1">HostingPage1</Link>
              <Link className="mr-4 text-amber-800" to="messages">Messages</Link>
              <Link className="mr-4 text-amber-800" to="hostingPage1">
          HP1
        </Link>
        <Link className="mr-4 text-amber-800" to="hostingPage2">
          HP2
        </Link>
        <Link className="mr-4 text-amber-800" to="hostingPage3">
          HP3
        </Link>
        <Link className="mr-4 text-amber-800" to="hostingPage4">
          HP4
        </Link>
        <Link className="mr-4 text-amber-800" to="hostingPage5">
          HP5
        </Link>
        <Link className="mr-4 text-amber-800" to="hostingPage6">
          HP6
        </Link>
        <Link className="mr-4 text-amber-800" to="hostingPage7">
          HP7
        </Link>
        <Link className="mr-4 text-amber-800" to="hostingPage8">
          HP8
        </Link>
        <Link className="mr-4 text-amber-800" to="hostingPage9">
          HP9
        </Link>
        <Link className="mr-4 text-amber-800" to="hostaccount">
          Host Account
        </Link>
          </nav>
          <button onClick={ e => setLogin(!login)}>Login</button>
          <button onClick={ e => setRegister(!register)}>Register</button>
          <SearchByRegion showModal={showModal} handleCloseAll={handleCloseAll} active={active}/>
      </div>
    )
  }
export default Navbar;

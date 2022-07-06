import { useContext } from "react";
import { Link } from "react-router-dom";
import SearchByRegion from "./SearchByRegion/SearchByRegion.jsx";
import BigNav from "./BigNav/BigNav.jsx";
import { BiSearch } from "react-icons/bi";
import RightMenuIcon from "./RightMenuIcon/RightMenuIcon.jsx";
import RightMenu1 from "./RightMenu1/RightMenu1.jsx";
import RightMenu2 from "./RightMenu2/RightMenu2.jsx";
import { navbarContext } from "../../../Context/NavbarContext.jsx";
import { loginContext } from "../../../Context/LoginContext.jsx";
import "./Navbar.scss";

const Navbar=()=>{
  const {showOffCanvas, anyClick, rightMenu} = useContext(navbarContext);
  const {activeUser} = useContext(loginContext);

  // const [isBigNav, setIsBigNav] = useState(false);
  // const [isMainActive, setIsMainActive] = useState(true);
  // const handleCloseOffCanvas = () => setShowOffCanvas(false);

   // it will come from Context

  //  const activeUser=null;
  //  const activeUser={name:"Ömer"}
   
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
         <BigNav/>
          :
          <div className="main-nav">
            <button onClick={()=>anyClick(0)}>Anywhere</button>
            <button onClick={()=>anyClick(1)}>Any week</button>
            <button onClick={()=>anyClick(2)}>Add guests</button>
            <button className="search-button"><BiSearch/></button>
          </div>
          }
          <div className="right-menu-container">
            {activeUser?.role ==="host" ? <Link className="switch-to-hosting" to="hostingPage1">Switch to Hosting</Link>:null}
            <RightMenuIcon />
            {activeUser ? rightMenu && <RightMenu2 /> : rightMenu && <RightMenu1/>}
          </div>
          <SearchByRegion/>
      </div>
    )
  }
export default Navbar;

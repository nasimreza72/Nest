import { useContext } from "react";
import { navbarContext } from "../../../../Context/NavbarContext.jsx";
import {FaUser} from "react-icons/fa";
import {IoReorderThreeOutline} from "react-icons/io5";
import "./RightMenuIcon.scss";

const RightMenuIcon = () => {

  const {setRightMenu} = useContext(navbarContext);

  return (
    <div className="menu-container" onClick={()=>setRightMenu(true)}>
      <div className="menu">
        <IoReorderThreeOutline className="three-line" />
        <div className="user-container">
          <FaUser />
        </div>
      </div>
    </div>
  );
};

export default RightMenuIcon;
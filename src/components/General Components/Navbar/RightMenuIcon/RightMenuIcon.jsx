import {FaUser} from "react-icons/fa";
import {IoReorderThreeOutline} from "react-icons/io5";
import "./RightMenuIcon.scss";

const RightMenuIcon = () => {
  return (
    <div className="menu-container">
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
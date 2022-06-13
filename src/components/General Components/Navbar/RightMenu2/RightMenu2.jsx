import "./RightMenu2.scss";
import { Link } from "react-router-dom";

const RightMenu2 = ()=>{
    return(
        <div className="right-menu2-container">
            <ul>
                <li><Link to="messages">Messages</Link></li>
                <li><Link to="hostaccount">Profile</Link></li>
                <li>Logout</li>
            </ul>
        </div>
    )
}

export default RightMenu2;
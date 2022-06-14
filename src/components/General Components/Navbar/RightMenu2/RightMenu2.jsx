import "./RightMenu2.scss";
import { Link } from "react-router-dom";

const RightMenu2 = ({setRightMenu})=>{
    return(
        <div className="right-menu2-container">
            <ul>
                <Link onClick={()=>setRightMenu(false)} className="link" to="messages">Messages</Link>
                <Link onClick={()=>setRightMenu(false)} className="link" to="hostaccount">Profile</Link>
                <Link onClick={()=>setRightMenu(false)} className="link" to="/">Logout</Link>
            </ul>
        </div>
    )
}

export default RightMenu2;
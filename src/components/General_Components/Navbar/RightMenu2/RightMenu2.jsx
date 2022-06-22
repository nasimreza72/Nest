import { useEffect, useRef, useContext } from "react";
import { navbarContext } from "../../../../Context/NavbarContext.jsx";
import { Link } from "react-router-dom";
import "./RightMenu2.scss";

const RightMenu2 = ()=>{

    const {setRightMenu} = useContext(navbarContext);
    const rightMenu2 = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            if(!rightMenu2.current.contains(e.target) )
              setRightMenu(false);
        })
      }, [])
    return(
        <div ref={rightMenu2} className="right-menu2-container">
            <ul>
                <Link onClick={()=>setRightMenu(false)} className="link" to="messages">Messages</Link>
                <Link onClick={()=>setRightMenu(false)} className="link" to="hostaccount">Profile</Link>
                <Link onClick={()=>setRightMenu(false)} className="link" to="/">Logout</Link>
            </ul>
        </div>
    )
}

export default RightMenu2;
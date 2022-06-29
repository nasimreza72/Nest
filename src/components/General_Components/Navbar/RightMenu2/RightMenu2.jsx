import { useRef, useContext, useEffect } from "react";
import { navbarContext } from "../../../../Context/NavbarContext.jsx";
import { loginContext } from "../../../../Context/LoginContext.jsx";
import { Link } from "react-router-dom";
import "./RightMenu2.scss";

const RightMenu2 = ()=>{

    const {setRightMenu} = useContext(navbarContext);
    const {setActiveUser} = useContext(loginContext);

    const rightMenu2 = useRef();

    const logout = ()=>{
        console.log("logout");
        setRightMenu(false);
        setActiveUser(null);
    }
    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            const x = document.querySelector(".right-menu2-container")
            if(!x)return
            if(!x.contains(e.target)) setRightMenu(false);
        })
      }, [])
    return(
        <div ref={rightMenu2} className="right-menu2-container">
            <ul>
                <Link onClick={()=>setRightMenu(false)} className="link" to="messages">Messages</Link>
                <Link onClick={()=>setRightMenu(false)} className="link" to="hostaccount">Profile</Link>
                <Link onClick={logout} className="link" to="/">Logout</Link>
            </ul>
        </div>
    )
}

export default RightMenu2;
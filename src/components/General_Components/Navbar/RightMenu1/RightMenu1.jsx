import {useContext,useRef, useEffect} from "react";
import { loginContext } from "../../../../Context/LoginContext.jsx";
import { navbarContext } from "../../../../Context/NavbarContext.jsx";
import "./RightMenu1.scss";

const RightMenu1 = () => {
    const {loginModal, setLoginModal, register, setRegister} = useContext(loginContext);
    const {setRightMenu} = useContext(navbarContext);

    const rightMenu1 = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            const x = document.querySelector(".right-menu1-container")
            if(!x)return
            if(!x.contains(e.target) ) {
                setRightMenu(false);
                console.log("2");
            }
        })
      }, [])

      console.log("login-----------------------" + loginModal)
    return(
        <div ref={rightMenu1} className="right-menu1-container">
            <ul>
                <li onClick={ e => { console.log("1"); setLoginModal(true); setRightMenu(false) }}>Log in</li>
                <li onClick={ e => { setRegister(!register); setRightMenu(false)}}>Register</li>
            </ul>
        </div>
    )
}

export default RightMenu1;
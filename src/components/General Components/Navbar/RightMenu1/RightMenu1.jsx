import {useContext} from "react";
import { loginContext } from "../../../../context/LoginContext.jsx";
import "./RightMenu1.scss";

const RightMenu1 = ({setRightMenu})=>{
    const {login, setLogin, register, setRegister} = useContext(loginContext);
    return(
        <div className="right-menu1-container">
            <ul>
                <li onClick={ e => { setLogin(!login); setRightMenu(false) }}>Log in</li>
                <li onClick={ e => { setRegister(!register); setRightMenu(false)}}>Register</li>
            </ul>
        </div>
    )
}

export default RightMenu1;
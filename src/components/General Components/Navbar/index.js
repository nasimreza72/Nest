import {Link} from "react-router-dom";
import { useContext, useState } from "react";
import { loginContext } from "../../../Context/LoginContext.jsx"

const Navbar=()=>{

    const {login, setLogin, register, setRegister} = useContext(loginContext)
    
    const clickHandler = (e) => {
        // Verb.............
    }
    
    return(
        <div>
            <nav>
                <Link className="mr-4 text-amber-800" to="/">Home</Link>
                <Link className="mr-4 text-amber-800" to="houses">Houses</Link>
                <Link className="mr-4 text-amber-800" to="house">House</Link>
            </nav>
            <button onClick={ e => setLogin(!login)}>Login</button>
            <button onClick={ e => setRegister(!register)}>Register</button>

        </div>
    )
}

export default Navbar;
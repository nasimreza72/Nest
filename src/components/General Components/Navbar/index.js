import {Link} from "react-router-dom";
import { useContext, useState } from "react";
import { loginContext } from "../../../Context/LoginContext.jsx"

const Navbar=()=>{

    const {login, setLogin} = useContext(loginContext)
    
    console.log(login)
    
    return(
        <div>
            <nav>
                <Link className="mr-4 text-amber-800" to="/">Home</Link>
                <Link className="mr-4 text-amber-800" to="houses">Houses</Link>
                <Link className="mr-4 text-amber-800" to="house">House</Link>
                <Link className="mr-4 text-amber-800" to="hostingPage1">HostingPage1</Link>
                <Link className="mr-4 text-amber-800" to="messages">Messages</Link>
            </nav>
            <button onClick={ e => setLogin(!login)}>Login</button>

        </div>
    )
}

export default Navbar;
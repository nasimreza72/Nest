import {Link} from "react-router-dom";
const Navbar=()=>{
    return(
        <div className="navbar">
            <nav>
                <Link className="link m-l16 mr-4 text-amber-800" to="/"> <p className="h3Search"> Home</p></Link>
                                <div className="vl"></div>

                <Link className="link m-l16 mr-4 text-amber-800" to="houses"><p className="h3Search">Houses </p></Link>
                                <div className="vl"></div>

                <Link className="link m-l16 mr-4 text-amber-800" to="house"><p className="h3Search" >House </p></Link>
                <div className="vl"></div>
                <Link className="link m-l16 mr-4 text-amber-800" to="guests"><p className="h3Search"> Guests</p></Link>
            </nav>

        </div>
    )
}

export default Navbar;
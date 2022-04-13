import {Link} from "react-router-dom";
const Navbar=()=>{
    return(
        <div>
            <nav>
                <Link className="mr-4 text-amber-800" to="/">Home</Link>
                <Link className="mr-4 text-amber-800" to="hauses">Hauses</Link>
                <Link className="mr-4 text-amber-800" to="hause">Hause</Link>
            </nav>
        </div>
    )
}

export default Navbar;
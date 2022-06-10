import { useContext, useState } from "react";
import { loginContext } from "../../../Context/LoginContext.jsx";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import "./index.scss";
import { Offcanvas, Button } from "react-bootstrap";

// const MainNav = ({setIsMainActive}) => {
//   return (

//   );
// };

const BigNav = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="big-nav">
      <div className="section1">
        <button>Stays</button>
        <button>Experiences</button>
        <button>Online Experiences</button>
      </div>
      <div className="section2">
        <div
          style={
            active == 0
              ? {
                  boxShadow: "0px 0px 10px 4px #DBDBDB",
                  backgroundColor: "white",
                }
              : null
          }
        >
          <h6>Where</h6>
          <input
            onClick={() => setActive(0)}
            style={active == 0 ? { backgroundColor: "white" } : null}
            type="text"
            placeholder="Search destinations"
          />
        </div>
        <div
          style={
            active == 1
              ? {
                  boxShadow: "0px 0px 10px 4px #DBDBDB",
                  backgroundColor: "white",
                }
              : null
          }
        >
          <h6>When</h6>
          <input
            onClick={() => setActive(1)}
            style={active == 1 ? { backgroundColor: "white" } : null}
            type="text"
            placeholder="Any week"
          />
        </div>
        <div
          style={
            active == 2
              ? {
                  boxShadow: "0px 0px 10px 4px #DBDBDB",
                  backgroundColor: "white",
                }
              : null
          }
        >
          <h6>Who</h6>
          <input
            onClick={() => setActive(2)}
            style={active == 2 ? { backgroundColor: "white" } : null}
            type="text"
            placeholder="Add guests"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button> */}

      <div className="main-nav">
        <button onClick={handleShow}>Anywhere</button>
        <button onClick={handleShow}>Any week</button>
        <button onClick={handleShow}>Add guests</button>
        <button className="search-button">
          <BiSearch />
        </button>
      </div>

      <Offcanvas show={show} onHide={handleClose} {...props}>
        {/* <Offcanvas.Header>
      </Offcanvas.Header> */}
        <Offcanvas.Body className="off-canvas-body">
          <BigNav />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      {/* {['start', 'end', 'top', 'bottom'].map((placement, idx) => ( */}
      <OffCanvasExample placement="top" name="top" />
      {/* ))} */}
    </>
  );
}

const Navbar = () => {
  const { login, setLogin, register, setRegister } = useContext(loginContext);
  const [isMainActive, setIsMainActive] = useState(true);

  console.log(login);

  return (
    <div>
      <nav>
        <Link className="mr-4 text-amber-800" to="/">
          Home
        </Link>
        <Link className="mr-4 text-amber-800" to="houses">
          Houses
        </Link>
        <Link className="mr-4 text-amber-800" to="house">
          House
        </Link>
        <Link className="mr-4 text-amber-800" to="hostingPage1">
          HP1
        </Link>
        <Link className="mr-4 text-amber-800" to="hostingPage2">
          HP2
        </Link>{" "}
        <Link className="mr-4 text-amber-800" to="hostingPage3">
          HP3
        </Link>
        <Link className="mr-4 text-amber-800" to="messages">
          Messages
        </Link>
      </nav>
      <button onClick={(e) => setLogin(!login)}>Login</button>
      <button onClick={(e) => setRegister(!register)}>Register</button>
    </div>
  );
};
export default Navbar;

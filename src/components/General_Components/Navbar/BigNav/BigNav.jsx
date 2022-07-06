import {useContext} from "react";
import { BiSearch } from "react-icons/bi";
import {Link} from "react-router-dom";
import { navbarContext } from "../../../../Context/NavbarContext.jsx";
import { housesContext } from "../../../../Context/HousesContext.jsx";
import cities from 'cities.json';
import "./BigNav.scss";

const BigNav=()=>{
    const {active, setActive,where,handleCloseModal,handleShowModal,handleCloseAll, bigNavRef, filteredCities, setFilteredCities}=useContext(navbarContext);
    const {getHousesByCity} = useContext(housesContext);
    const filterCities = () =>{
        const filteredCitiesVar = cities.filter(city=>city.name.toLowerCase().startsWith(where.current.value.toLowerCase()));
        if(filteredCitiesVar.length>5) setFilteredCities(filteredCitiesVar.slice(0,5));
        else setFilteredCities(filteredCitiesVar.slice(0,filteredCitiesVar.length));
    }

    const searchClickHandler = () =>{
        handleCloseAll();
        getHousesByCity();
    }
    return(
        <div ref={bigNavRef} className="big-nav">
            <div className="section1">
                <button onClick={handleCloseModal}>Stays</button>
                <button onClick={handleCloseModal}>Experiences</button>
                <button>Online Experiences</button>
            </div>
            <div className="section2">
                <div className="menu" onClick={()=>{setActive(0); handleShowModal()}} style={active===0 ? {boxShadow:"0px 0px 10px 4px #DBDBDB", backgroundColor:"white"} :null}>
                    <h6>Where</h6>
                    <input ref={where} onKeyUp={filterCities}  style={active===0 ? {backgroundColor:"white"}:null} type="text" placeholder="Search destinations"/>
                </div>
                <div  className="menu" onClick={()=>{setActive(1); handleShowModal()}} style={active===1 ? {boxShadow:"0px 0px 10px 4px #DBDBDB", backgroundColor:"white"} :null}>
                    <h6>When</h6>
                    <p  style={active===1 ? {backgroundColor:"white"}:null} type="text">Any week</p>
                </div>
                <div className="menu search-container" onClick={()=>setActive(2)} style={active===2 ? {boxShadow:"0px 0px 10px 4px #DBDBDB", backgroundColor:"white"} :null}>
                    <div>
                        <h6>Who</h6>
                        <p style={active===2 ? {backgroundColor:"white"}:null} type="text">Add guests</p>
                    </div>
                    <Link onClick={searchClickHandler} className="search" to="houses">
                        <BiSearch className="search-icon"/>
                        <span>Search</span>
                    </Link>
                </div>
            </div>
            {/* <SearchByRegion/> */}
        </div>
    )
  }

  export default BigNav;
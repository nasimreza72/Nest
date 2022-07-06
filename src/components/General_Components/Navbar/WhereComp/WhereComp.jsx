import {useContext, useEffect} from "react"; 
import { Button } from "react-bootstrap";
import {BsClock } from "react-icons/bs"
import { navbarContext } from "../../../../Context/NavbarContext.jsx";
import { housesContext } from "../../../../Context/HousesContext.jsx";
import "./WhereComp.scss";

const WhereComp = ()=>{
    const {where, filteredCities} = useContext(navbarContext);
    const {setActiveCity,activeCity} = useContext(housesContext);

    const regions=[{
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Germany_in_Europe_%28-rivers_-mini_map%29.svg/701px-Germany_in_Europe_%28-rivers_-mini_map%29.svg.png?20160712194932",
        text:"Germany"
    },
    {
        src: "https://ukmap360.com/img/1200/united%20kingdom%20(uk)-map-europe.jpg",
        text:"United Kingdom"
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/France_in_Europe.svg/701px-France_in_Europe.svg.png?20160712071110",
        text:"France"
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Netherlands_in_Europe.svg/701px-Netherlands_in_Europe.svg.png",
        text:"Netherlands"
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Switzerland_in_Europe.svg/640px-Switzerland_in_Europe.svg.png",
        text:"Switzerland"
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/United_States_in_North_America_%28-mini_map_-rivers%29.svg/2041px-United_States_in_North_America_%28-mini_map_-rivers%29.svg.png",
        text:"USA"
    }]

    const recentResearches=[{
        city:"Berlin.Stays",
        date:"Any week"
    },
    {
        city:"Africa.Stays",
        date:"Any week, 1 guest"
    },
    {
        city:"Athens.Stays",
        date:""
    }]

    const cityClickHandler = (city) => {
        console.log('city :>> ', city);
        setActiveCity(city);
    }

    useEffect(()=>{
        localStorage.setItem("activeCity",JSON.stringify(activeCity));
    },[activeCity])
    return(
        <div className="container">
            <div className="recent-researches">
                <h6>Recent searches</h6>
                {where?.current?.value ?
                    filteredCities.map(city=>
                    <div>
                        <div className="city-row">
                            {/* <span className="country">{city.country}</span> */}
                            <span className="city" onClick={()=>cityClickHandler(city)}>{city.name}</span>
                        </div>
                    </div>) 
                    : 
                    recentResearches.map((research)=>
                    <div className="recent">
                        <div className="clock-container"><BsClock/></div>
                        <div>
                        <p>{research.city}</p>
                        <h6>{research.date}</h6>
                        </div>
                    </div>
                )
                } 
            </div>
            <div className="search-by-region-container">
                    <h6>Search by region</h6>
                    <div className="search-by-region">
                        {regions.map((region)=>
                            <div className="region">
                                <Button variant="light" id="region-button">
                                    <img src={region.src}/>
                                </Button>
                                    <h6>{region.text}</h6>
                            </div>
                        )}
                    </div>
            </div>
        </div>
    )
}

export default WhereComp;
import "./Main.scss"
import  { WeProvideHousing, Locations, AboutUs, InfoUponEntering,CardOne, CardTwo, CardThree, HostQuestions} from "../../../components/Home";
import Login from "../../Login/Login.jsx" 
import  { useState, useContext } from "react";
import { loginContext } from "../../../Context/LoginContext.jsx"

 




export const Main=()=>{

    const {login, setLogin} = useContext(loginContext)


    return(

        <div className="Home">
            <div className="grid-container">

                <div className="blackBox"></div>

                {login ?  <Login /> : null}
                               
                <div className="firstLargeImage">
                    <WeProvideHousing/>
                </div>

                <h2>Locations with available housing</h2>

                <div className="carousel">
                    <Locations />
                </div>

                <div className="about-us">
                    <AboutUs />
                </div>
                
                <div className="imageAboutUs"></div>

                <div className="InfoUponEnter">
                    <InfoUponEntering />
                </div>
                
                <div className="cardOne cards">
                    <CardOne />
                </div>
                <div className="cardTwo cards">
                    <CardTwo />
                </div>
                <div className="cardThree cards">
                    <CardThree />
                </div>

                <div className="askSuperHost"></div>
                <div className="filterSuperHost">
                    <HostQuestions />
                </div>
            </div>
        </div>
    )
}


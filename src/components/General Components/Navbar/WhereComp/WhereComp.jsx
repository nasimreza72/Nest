import "./WhereComp.scss";
import { Button } from "react-bootstrap";
import {BsClock } from "react-icons/bs"

const WhereComp = ()=>{
    const regions=[{
        src: "https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg",
        text:"I’m flexible"
    },
    {
        src: "https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320",
        text:"United States"
    },
    {
        src: "https://a0.muscache.com/im/pictures/ea5598d7-2b07-4ed7-84da-d1eabd9f2714.jpg?im_w=320",
        text:"Italy"
    },
    {
        src: "https://a0.muscache.com/im/pictures/66355b01-4695-4db9-b292-c149c46fb1ca.jpg?im_w=320",
        text:"Middle East"
    },
    {
        src: "https://a0.muscache.com/im/pictures/f0ece7c0-d9b2-49d5-bb83-64173d29cbe3.jpg?im_w=320",
        text:"France"
    },
    {
        src: "https://a0.muscache.com/im/pictures/7e9673a5-4164-4708-a047-8d281b5980e7.jpg?im_w=320",
        text:"Africa"
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
    return(
        <div className="container">
            <div className="recent-researches">
                <h6>Recent searches</h6>
                {recentResearches.map((research)=>
                <div className="recent">
                    <div className="clock-container"><BsClock/></div>
                    <div>
                        <p>{research.city}</p>
                        <h6>{research.date}</h6>
                    </div>
                </div>
                )}
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
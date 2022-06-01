import "./Main.scss"

export const Main=()=>{

    return(

        <div className="Home">
            <div className="grid-container">

                <div className="blackBox"></div>
                <div className="refugeeBanner">
                    <h1>Help house 100,000 refugees fleeing Ukraine</h1>
                    <button>Learn More</button>
                </div>
                <div className="firstLargeImage">
                    <h2>Let your curiosity do the booking</h2>
                    <button>I`m flexible</button>
                </div>

                <h2>Inspiration for your next trip</h2>
                
                <div className="inspirationOne"></div>
                <div className="locations">
                    <h3>Berlin</h3>
                    <p>0 kilometets away</p>
                </div>

                <div className="inspirationTwo"></div>
                <div className="locations">
                    <h3>Rostock</h3>
                    <p> 195 kilometets away</p>
                </div>

                <div className="inspirationThree"></div>
                <div className="locations">
                    <h3>Hamburg</h3>
                    <p>255 kilometets away</p>
                </div>

                <div className="inspirationFour"></div>
                <div className="locations">
                    <h3>Usedom</h3>
                    <p>155 kilometets away</p>
                </div>

                <h2>Discover Airbnb Experiences</h2>

                <div className="doOnYourTripImage"></div>

                <div className="filterDoTripStuff doStuff">
                    <div>
                        <h3>Things to do</h3>
                        <h3 id="secondHThree">on your trip</h3>
                        <button>Experiences</button>
                    </div>
                </div>
                
                <div className="doHomeImage doStuff"></div>
                <div className="filterDoHomeStuff doStuff">
                    <div>
                        <h3>Things to do</h3>
                        <h3 id="secondHThree">from home</h3>
                        <button>Online Experiences</button>
                    </div>
                </div>

                <div className="giftCardsText">
                    <h2>Shop Airbnb</h2>
                    <h2 id="secondHTwo">gift cards</h2>
                    <button>Learn more</button>
                </div>
                

                <div className="cardOne"></div>
                <div className="cardTwo"></div>
                <div className="cardThree"></div>

                <div className="askSuperHost"></div>
                <div className="filterSuperHost">
                    <div className="text">
                        <h2>Questions</h2>
                        <h2>about</h2>
                        <h2>hosting?</h2>
                    </div>
                    <button>Ask a Superhost</button>
                </div>
                


                
               
            

            </div>


        </div>
    )
}


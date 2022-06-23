import "./PersonalinfoHost.scss"
import { GrFormNext } from 'react-icons/gr';
import LegalName from "../../components/Profile/LegalName/LegalName.jsx"
import Gender from "../../components/Profile/Gender/Gender.jsx"
import { useContext } from "react";
import { profileContext } from "../../Context/ProfileContext";



export default function HostProfile (){
    const { legalName, setLegalName } = useContext(profileContext)
    console.log(legalName)
    return(
        <div className="PersonalinfoHost">
            <section>
                <div className="smallNavBar">
                    <a href="http://localhost:3000/">Home</a>
                    <GrFormNext className="nextIcon" color="#808080"/>
                    <div>Personal info</div>
                </div>
                <div>
                    <h1>Personal Info</h1>
                </div>
                <div className="flexContainerInfoAndSideBar">
                    <div className="InfoContainer">
                        <div className="InfoAndButton">
                            <div className="infoCells">
                                <h2>Legal name</h2>
                                <div className="nameInput">Ronny Korneli</div>
                            </div>
                            <button onClick={e => setLegalName(true)}>Edit</button> 
                            {legalName ?  <LegalName /> : null }
                        </div>
                        <div className="InfoAndButton">
                            <div className="infoCells">
                                <h2>Gender</h2>
                                <div className="nameInput">Male</div>
                            </div>
                            <Gender />
                        </div>
                        <div className="InfoAndButton">
                            <div className="infoCells">
                                <h2>Date of birth</h2>
                                <div className="nameInput">25.03.1977</div>
                            </div>
                            <button>Edit</button>
                        </div>
                        <div className="InfoAndButton">
                            <div className="infoCells">
                                <h2>Email address</h2>
                                <div className="nameInput">ronnykorneli@gmail.com</div>
                            </div>
                            
                        </div>
                        <div className="InfoAndButton">
                            <div className="infoCells">
                                <h2>Phone number</h2>
                                <div className="nameInput">0176 732 54255</div>
                            </div>
                            <button>Edit</button>
                        </div>
                        <div className="InfoAndButton">
                            <div className="infoCells">
                                <h2>Goverment ID</h2>
                                <div className="nameInput">46358</div>
                            </div>
                            <button>Edit</button>
                        </div>
                        <div className="InfoAndButton">
                            <div className="infoCells">
                                <h2>Address</h2>
                                <div className="nameInput">Richardplatz 5, 12055 Berlin</div>
                            </div>
                            <button>Edit</button>
                        </div>
                        <div className="InfoAndButton">
                            <div className="infoCells">
                                <h2>Interests</h2>
                                <div className="nameInput">Love soccer and Inline Skating</div>
                            </div>
                            <button>Edit</button>
                        </div>
                        <div className="InfoAndButton" id="lastInfoCell">
                            <div className="infoCells" >
                                <h2>Why do I want to Host</h2>
                                <div className="nameInput">I want to help and meet other cultures</div>
                            </div>
                            <button>Edit</button>
                        </div>
                        
                    </div>
                    

                    <div className="sideBarInfo">
                        
                    </div>
                </div>
               
            </section>
        </div>
    )

}
import "./PersonalinfoHost.scss"
import { GrFormNext } from 'react-icons/gr';
import LegalName from "../../components/Profile/LegalName/LegalName.jsx"
import Gender from "../../components/Profile/Gender/Gender.jsx"
import DateOfBirth from "../../components/Profile/DateOfBirth/DateOfBirth.jsx"
import EmailAddresse from "../../components/Profile/EmailAdresse/EmailAddress.jsx"
import PhoneNumber from "../../components/Profile/PhoneNumber/PhoneNumber.jsx"
import Address from "../../components/Profile/Address/Address.jsx"
import Interests from "../../components/Profile/Interests/Interests.jsx"
import WhyHost from "../../components/Profile/WhyHost/WhyHost.jsx"
import { useContext } from "react";
import { profileContext } from "../../Context/ProfileContext";



export default function HostProfile (){
    const { legalName, setLegalName, gender, setGender, 
            dateOfBirth, setDateOfBirth,
            emailAddresse, setEmailAdresse,
            phoneNumber, setPhoneNumber,
            address, setAddress,
            interestModal, setInterestModal,
            whyHostModal, setWhyHostModal  } = useContext(profileContext)


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
                            <button onClick={e => setGender(true)}>Edit</button> 
                            {gender ?  <Gender /> : null }

                        </div>
                        <div className="InfoAndButton">
                            <div className="infoCells">
                                <h2>Date of birth</h2>
                                <div className="nameInput">25.03.1977</div>
                            </div>
                            <button onClick={e => setDateOfBirth(true)}>Edit</button>
                            {dateOfBirth ?  <DateOfBirth /> : null }

                        </div>
                        <div className="InfoAndButton">
                            <div className="infoCells">
                                <h2>Email address</h2>
                                <div className="nameInput">ronnykorneli@gmail.com</div>
                            </div>
                            <button onClick={e => setEmailAdresse(true)}>Edit</button>
                            {emailAddresse ?  <EmailAddresse /> : null }
                        </div>
                        <div className="InfoAndButton">
                            <div className="infoCells">
                                <h2>Phone number</h2>
                                <div className="nameInput">0176 732 54255</div>
                            </div>
                            <button onClick={ e => setPhoneNumber(true)}>Edit</button>
                            { phoneNumber ? <PhoneNumber /> : null }
                        </div>
                        <div className="InfoAndButton">
                            <div className="infoCells">
                                <h2>Address</h2>
                                <div className="nameInput">Richardplatz 5, 12055 Berlin</div>
                            </div>
                            <button onClick={ e => setAddress(true)}>Edit</button>
                            { address ? <Address /> : null }
                        </div>
                        <div className="InfoAndButton">
                            <div className="infoCells">
                                <h2>Interests</h2>
                                <div className="nameInput">Love soccer and Inline Skating</div>
                            </div>
                            <button onClick={ e => setInterestModal(true)}>Edit</button>
                            { interestModal ? <Interests /> : null }
                        </div>
                        <div className="InfoAndButton" id="lastInfoCell">
                            <div className="infoCells" >
                                <h2>Why do I want to Host</h2>
                                <div className="nameInput">I want to help and meet other cultures</div>
                            </div>
                            <button onClick={ e => setWhyHostModal(true)}>Edit</button>
                            { whyHostModal ? <WhyHost /> : null }
                        </div>
                        
                    </div>
                    

                    <div className="sideBarInfo">
                        
                    </div>
                </div>
               
            </section>
        </div>
    )

}
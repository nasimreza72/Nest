import "./PersonalinfoHost.scss"
import LegalName from "../../components/Profile/LegalName/LegalName.jsx"
import Gender from "../../components/Profile/Gender/Gender.jsx"
import DateOfBirth from "../../components/Profile/DateOfBirth/DateOfBirth.jsx"
import EmailAddresse from "../../components/Profile/EmailAdresse/EmailAddress.jsx"
import PhoneNumber from "../../components/Profile/PhoneNumber/PhoneNumber.jsx"
import Address from "../../components/Profile/Address/Address.jsx"
import Interests from "../../components/Profile/Interests/Interests.jsx"
import WhyHost from "../../components/Profile/WhyHost/WhyHost.jsx"
import DescribeSituation from "../../components/Profile/DescribeSituation/DescribeSituation.jsx"
import { useContext } from "react";
import { profileContext } from "../../Context/ProfileContext";
import { loginContext } from "../../Context/LoginContext.jsx";
import { AiFillLock } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { GrFormNext } from 'react-icons/gr';





export default function HostProfile (){
    const { legalName, setLegalName, gender, setGender, 
            dateOfBirth, setDateOfBirth,
            emailAddresse, setEmailAdresse,
            phoneNumber, setPhoneNumber,
            address, setAddress,
            interestModal, setInterestModal,
            whyHostModal, setWhyHostModal,
            describeSituationModal, setDescribeSituationModal
          } = useContext(profileContext)

    const { activeUser } = useContext(loginContext)

    console.log('activeUser !!!!!!:>> ', activeUser)
    return (
        
        <div className="PersonalinfoHost">
            <section>
                <div className="smallNavBar">
                    <a href="http://localhost:3000/">Home</a>
                    <GrFormNext className="nextIcon" color="#808080"/>
                    <div>Personal info</div>
                </div>
                <div className="headline">
                    <h1>Personal Info</h1>
                </div>
                <div className="flexContainerInfoAndSideBar">
                    <div className="InfoContainer">
                        <div className="InfoAndButton">
                            <div className="infoCells">
                                <h2>Legal name</h2>
                                <div className="nameInput"> 
                                    { 
                                        activeUser && activeUser.firstName && activeUser.lastName ? 
                                        `${activeUser.firstName} ${activeUser.lastName}` 
                                        : null 
                                    }
                                </div>
                            </div>
                            <button onClick={e => setLegalName(true)}>Edit</button> 
                            {legalName ?  <LegalName /> : null }
                        </div>
                        <div className="InfoAndButton">
                            <div className="infoCells">
                                <h2>Gender</h2>
                                <div className="nameInput"> { activeUser && activeUser.gender ? activeUser.gender : null} </div>
                            </div>
                            <button onClick={e => setGender(true)}>Edit</button> 
                            {gender ?  <Gender /> : null }

                        </div>
                        <div className="InfoAndButton">
                            <div className="infoCells">
                                <h2>Date of birth</h2>
                                <div className="nameInput"> { activeUser && activeUser.dateOfBirth ? activeUser.dateOfBirth : null} </div>
                            </div>
                            <button onClick={e => setDateOfBirth(true)}>Edit</button>
                            {dateOfBirth ?  <DateOfBirth /> : null }

                        </div>
                        <div className="InfoAndButton">
                            <div className="infoCells">
                                <h2>Email address</h2>
                                <div className="nameInput"> { activeUser && activeUser.loginInfo.email ? activeUser.loginInfo.email : null } </div>
                            </div>
                            <button onClick={e => setEmailAdresse(true)}>Edit</button>
                            {emailAddresse ?  <EmailAddresse /> : null }
                        </div>
                        <div className="InfoAndButton">
                            <div className="infoCells">
                                <h2>Phone number</h2>
                                <div className="nameInput"> { activeUser && activeUser.phoneNumbers ? activeUser.phoneNumbers : null} </div>
                            </div>
                            <button onClick={ e => setPhoneNumber(true)}>Edit</button>
                            { phoneNumber ? <PhoneNumber /> : null }
                        </div>
                        <div className="InfoAndButton">
                            <div className="infoCells">
                                <h2>Address</h2>
                                <div className="nameInput">
                                    


                                   
                                        

                                    {   
                                        activeUser ?

                                        `${activeUser.address.street}, ${activeUser.address.houseNumber}, ${activeUser.address.zip } ${activeUser.address.city}, ${activeUser.address.country.label}` 
                                        : null
                                    }
                                    
                                    
                                </div>
                            </div>
                            <button onClick={ e => setAddress(true)}>Edit</button>
                            { address ? <Address /> : null }
                        </div>
                        <div className="InfoAndButton">
                            <div className="infoCells">
                                <h2>Interests</h2>
                                <div className="nameInput"> { activeUser && activeUser.interests ? activeUser.interests : null} </div>
                            </div>
                            <button onClick={ e => setInterestModal(true)}>Edit</button>
                            { interestModal ? <Interests /> : null }
                        </div>

                        { activeUser.role === "host" ?  
                        <div className="InfoAndButton" id="lastInfoCell">
                            <div className="infoCells" >
                                <h2>Why do I want to Host</h2>
                                <div className="nameInput"> { activeUser && activeUser.reasonForHosting ? activeUser.reasonForHosting : null} </div>
                            </div>
                            <button onClick={ e => setWhyHostModal(true)}>Edit</button>
                            { whyHostModal ? <WhyHost /> : null }
                        </div>
                        : 
                        <div className="InfoAndButton" id="lastInfoCell">
                            <div className="infoCells" >
                                <h2>My situation as a refugee</h2>
                                <div className="nameInput"> { activeUser && activeUser.describeSituation ? activeUser.describeSituation : null} </div>
                            </div>
                            <button onClick={ e => setDescribeSituationModal(true)}>Edit</button>
                            { describeSituationModal ? <DescribeSituation /> : null }
                        </div> }
                       
                        
                    </div>
                    

                    <div className="sideBarInfoContainer">
                        <div className="topInfo sideInfo">
                            <AiFillLock className="lockIcon"/>
                            <h3>Which details can be edited?</h3>
                            <p>Details Nest uses to verify your identity can’t be changed. 
                               Contact info and some personal details can be edited, but we 
                               may ask you verify your identity the next time you book or create a listing.
                            </p>
                        </div>
                        <div className="sideInfo">
                        <AiFillEye className="lockIcon"/>
                        <h3>What info is shared with others?</h3>
                            <p>Details Nest uses to verify your identity can’t be changed. 
                               Contact info and some personal details can be edited, but we 
                               may ask you verify your identity the next time you book or create a listing.
                            </p>
                        </div>
                    </div>
                </div>
               
            </section>
        </div>
    )

}
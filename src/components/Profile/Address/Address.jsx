import React, { useMemo, useState, useRef, useContext, useEffect } from 'react';
import { profileContext } from '../../../Context/ProfileContext';
import { loginContext } from '../../../Context/LoginContext';
import "./Address.scss"
import Select from 'react-select'
import countryList from 'react-select-country-list'



export default function Address() {
  const { address, setAddress } = useContext(profileContext)
  const { activeUser, setActiveUser } = useContext(loginContext)

  const [country, setCountry] = useState('')
  const [street, setStreet] = useState("")
  const [houseNumber, setHouseNumber] = useState("")
  const [zip, setZip] = useState("")
  const [city, setCity] = useState("")
  const options = useMemo(() => countryList().getData(), [])

  console.log('active User Addres.jsx  :>> ', activeUser );
  console.log("this typeof country", typeof country)
  
  // Belongs to the react-select-country-list................
  const changeHandler = country => {
    setCountry(country)
  }
///////////////////////////////////////////////////////////////

const clickHandler = (e) => {

  const temporaryUser = {...activeUser}
    temporaryUser.address.country = country
    temporaryUser.address.street = street
    temporaryUser.address.houseNumber = houseNumber
    temporaryUser.address.zip = zip
    temporaryUser.address.city = city

    console.log("this uis temp +++++++++++++++##++++++++++ ", temporaryUser)

  const payload = {
   address : {
      street: street,
      houseNumber:houseNumber,
      zip:zip,
      city:city,
      country: country.label
   }
  }
  const url = `${process.env.REACT_APP_URL}/api/user/` + activeUser._id
        const config ={
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json',
                'Authorization': 'bearer ' + activeUser.token
            },
            body: JSON.stringify(payload)
        }
        fetch(url, config)
            .then(response => response.json())
            .then(data => {setActiveUser(temporaryUser)
              console.log("+++++++++++++++++++++++++",data)
            })

        setAddress(false)
}
  return(
    
    <div className="Address">
      <div className="modalBodey">
          <div className="topContaine">
            <div className="topElements">
              <h5>Address</h5>
              <button onClick={ e => setAddress(false)}>Cancel</button>
            </div>
          </div>
          <Select 
              options={options} 
              value={country} 
              onChange={changeHandler}
              className="countrySelect" 
              />

              <form action="" >
                <input
                  type="text" 
                  className="streetName"
                  placeholder="Street address" 
                  value={street} 
                  onChange={e => setStreet(e.target.value)} 
                  />
                  <input 
                    type="text" 
                    className="houseNumber"
                    placeholder="House number" 
                    value={houseNumber} 
                    onChange={e => setHouseNumber(e.target.value)}
                  />
                  <div className="flexBoxInputs">
                    <input 
                      type="text"
                      className="city"
                      placeholder="City" 
                      value={city} 
                      onChange={e => setCity(e.target.value)} />

                    <input 
                      type="text" 
                      className="zip"
                      placeholder="Zip code" 
                      value={zip} 
                      onChange={e => setZip(e.target.value)} /> 
                  </div>
              </form>
         
          <button className="buttonAddress" onClick={clickHandler}>Save</button>
      </div>
    </div>
  )

}
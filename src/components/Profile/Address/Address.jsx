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

  // Belongs to the react-select-country-list................
  const changeHandler = country => {
    setCountry(country)
  }
///////////////////////////////////////////////////////////////

const clickHandler = (e) => {
console.log(country)
  const payload = {
   address : {
      street: street,
      houseNumber:houseNumber,
      zip:zip,
      city:city,
      country: country
   }
  }

  const url = `http://localhost:7777/api/user/` + activeUser._id
        const config ={
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json',
                'Authorization': 'bearer ' + activeUser.password
            },
            body: JSON.stringify(payload)
        }
        fetch(url, config)
            .then(response => response.json())
            .then(data => console.log(data))
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
                  type="text" 
                  placeholder="Street address" 
                  value={street} 
                  onChange={e => setStreet(e.target.value)} 
                  />
                  <input 
                    type="text" 
                    className="houseNumber"
                    type="text" 
                    placeholder="House number" 
                    value={houseNumber} 
                    onChange={e => setHouseNumber(e.target.value)}
                  />
                  <div className="flexBoxInputs">
                    <input 
                      type="text"
                      className="city"
                      type="text" 
                      placeholder="City" 
                      value={city} 
                      onChange={e => setCity(e.target.value)} />

                    <input 
                      type="text" 
                      className="zip"
                      type="text" 
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
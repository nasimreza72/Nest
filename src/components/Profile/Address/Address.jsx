import React, { useRef, useContext, useEffect } from 'react';
import { profileContext } from '../../../Context/ProfileContext';
import "./Address.scss"
import Select from 'react-select'
import countryList from 'react-select-country-list'



export default function Address() {
  const { address, setAddress } = useContext(profileContext)
  let menuRef = useRef()


  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
        if(!menuRef.current.contains(e.target))
        setAddress(false)
    })
}, [address])


  
  
  return(
    
    <div className="Address">
      <div className="modalBodey" ref={menuRef}>
          <div className="topContaine">
            <div className="topElements">
              <h5>Address</h5>
              <button onClick={ e => setAddress(false)}>Cancel</button>
            </div>
            <p>Use a permanent address where you can receive mail.</p>
          </div>
         
         
          <button className="buttonAddress">Save</button>
      </div>
    </div>
  )

}
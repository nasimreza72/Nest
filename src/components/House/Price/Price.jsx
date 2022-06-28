import { useEffect, useState, useContext } from 'react';
import { AiTwotoneStar,AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import {IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { houseContext } from '../../../Context/HouseContext.jsx'; 
import "./Price.scss";

export const Dropdown = ({guests,setGuests})=>{

    const [adult,setAdult] = useState(1);
    const [children, setChildren] = useState(0);
    const [infant, setInfant] = useState(0);
    const [pets, setPets] = useState(0);
    
    const minus = (value, setValue,min)=>{
        if(value>min){
            setValue(value-1);
        }
        console.log('guests :>> ', guests);
    }

    useEffect(()=>{
        const text1 = adult+children === 1 ? "1 guest" : adult + children+" guests";
        const text2 = text1+ (infant>0 ? infant === 1 ? ", 1 infant" : ", "+infant+" infants":"");
        const tempGuests = text2 + (pets>0 ? pets === 1 ? ", 1 pet" : ", "+pets+" pets":"");
        setGuests(tempGuests);
    },[adult,children,infant,pets])
    
    return(
        <div className='dropdown-container'>
            <div className='section'>
                <div className='key'>
                    <h3>Adults</h3>
                    <p>Age 13+</p>
                </div>
                <div className='values'>
                    <button style={adult === 1 ? {cursor:"not-allowed", }:null} onClick={()=>minus(adult,setAdult,1)}>
                        <AiOutlineMinusCircle className='icon'/>
                    </button>
                    <span>{adult}</span>
                    <button onClick={()=>setAdult(adult+1)}>
                        <AiOutlinePlusCircle className='icon'/>
                    </button>
                </div>
            </div>
            <div className='section'>
                <div className='key'>
                    <h3>Children</h3>
                    <p>Ages 2–12</p>
                </div>
                <div className='values'>
                    <button style={children === 0 ? {cursor:"not-allowed"}:null} onClick={()=>minus(children,setChildren,0)}>
                        <AiOutlineMinusCircle className='icon'/>
                    </button>
                    <span>{children}</span>
                    <button onClick={()=>setChildren(children+1)}>    
                        <AiOutlinePlusCircle className='icon'/>
                    </button>
                </div>
            </div>
            <div className='section'>
                <div className='key'>
                    <h3>Infants</h3>
                    <p>Under 2</p>
                </div>
                <div className='values'>
                    <button style={infant === 0 ? {cursor:"not-allowed"}:null} onClick={()=>minus(infant,setInfant,0)}>
                        <AiOutlineMinusCircle className='icon'/>
                    </button>
                    <span>{infant}</span>
                    <button onClick={()=>setInfant(infant+1)}> 
                        <AiOutlinePlusCircle className='icon'/>
                    </button>   
                </div>
            </div>
            <div className='section'>
                <div className='key'>
                    <h3>Pets</h3>
                    <p></p>
                </div>
                <div className='values'>
                    <button style={pets === 0 ? {cursor:"not-allowed"}:null} onClick={()=>minus(pets,setPets,0)}>
                        <AiOutlineMinusCircle className='icon'/>
                    </button>
                        <span>{pets}</span>
                    <button onClick={()=>setPets(pets+1)}>
                        <AiOutlinePlusCircle className='icon'/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export const Price=()=>{
    const [toggle, setToggle] = useState(false);
    const [guests,setGuests] = useState("1 guest");
    const {house} = useContext(houseContext);

    return(
        <div className='preis-container'>            
            <div className="preis">
                <div className='section-1'>
                    <h2>Add dates for prices</h2>
                    <div>
                        <AiTwotoneStar className='star'/>
                        <span>{house.rating}</span>
                        <a href="#">{house?.reviews?.length} reviews</a>  
                    </div>
                </div>
                <div className='section-2'>
                    <div className='add-date'>
                        <div>
                            <h5>START DATE</h5>
                            <p>Add date</p>
                        </div>
                        <div >
                            <h5>ENDING</h5>
                            <p>Add date</p>
                        </div>
                    </div>
                    <div className='add-guest'>
                        <div>
                            <h5>GUESTS</h5>
                            <p>{guests}</p>
                        </div>
                        <div className='toggle'>
                            {!toggle && <IoIosArrowDown className="toggle-icon" onClick={()=>setToggle(!toggle)}/>}
                            {toggle &&<IoIosArrowUp className="toggle-icon" onClick={()=>setToggle(!toggle)}/>}
                        </div>
                    </div>
                    <input type="submit" value="Send Request"/>
                    <p>Enter your travel dates to see the total price per night.</p>
                </div>
            </div>
            <div className='dropdown'>
                {toggle && <div>
                    <Dropdown guests={guests} setGuests={setGuests}/>
                    <div className='sub-info'>
                        <p>This place has a maximum of 8 guests, not including infants. Pets aren't allowed.</p>
                    </div>
                    <div className='close-container'>
                        <a href="#">Close</a>
                    </div> 
                </div>
                }
            </div>
        </div>
    )
}
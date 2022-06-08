import { useRef, useState, useEffect } from "react"
import {motion} from "framer-motion"
import { Berlin, Hamburg, Usedom, Rostock } from "./arrayOfImages.js"
import "./Locations.scss"





export default function Locations(){

    const citiesAndApartements = {
        "Berlin": "4 Apartements",
        "Köln": "41 Apartements",
        "Hamburg": "47 Apartements",
        "Frisco": "10 Apartements",
        "Stalingrad": "6 Apartements",
        "Leningrad": "11 Apartements",
        "Stockholm": "20 Apartements",
        "Kristiansand": "35 Apartements",
        "Leipzig": "200 Apartements",
        "New york": "59 Apartements",
        "Lublin": "2 Apartements",
        "Bernd": "10 Apartements",
        "Kiel": "6 Apartements",
        "Mandal": "128 Apartements",
        "Brandenburg": "357 Apartements"
}

// all these values are hardcoded for the sake of testing.......................
    const arrayOfCities = Object.keys(citiesAndApartements)
    const numberOfApartements = Object.values(citiesAndApartements)

    const arrayOfImages = [Berlin, Hamburg , Usedom, Rostock, Berlin, 
                           Hamburg , Usedom, Rostock, Berlin, Hamburg , Usedom, Rostock,
                           Berlin, Hamburg , Usedom
                          ]
///////////////////////////////////////////////////////////////////////////////////////

    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
        setArrayLength(Object.keys(citiesAndApartements).length)

},[citiesAndApartements])

    const carousel = useRef()
    const [width, setWidth] = useState(0)
    const [arrayLength, setArrayLength] = useState(0)
    //const [arrayOfCities, setArrayOfCities] = useState("")
    //const [numberOfApartements, setNumberOfApartements] = useState(0)



    return(
        <div>
             <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
                <motion.div drag="x" dragConstraints={{right:0, left: -width}} className="innerCaousel">

                    {[...Array(arrayLength)].map((item, index) => {

                        return (
                            <motion.div className="item" key={index}>
                                
                                <img className="img" src={arrayOfImages[index]} /> 
                                <div className="divs">
                                    <h3>{arrayOfCities[index]}</h3>
                                    <p>{`${numberOfApartements[index]}`}</p>
                                </div>
                                
                            </motion.div>)
                    })}

                    
                </motion.div>
            </motion.div>
        </div>
    )
}
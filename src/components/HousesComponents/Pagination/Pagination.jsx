import { useContext } from "react";
import { housesContext } from "../../../Context/HousesContext.jsx";

const HousesPagination = () =>{
    const {setPageNumber,pageNumber,getHousesByCity, houseCount} = useContext(housesContext);

    console.log('Math.ceil(activeHouses.length/5) :>> ', Math.ceil(houseCount/5));
    console.log('pageNumber :>> ', pageNumber);
    console.log('pageNumber < Math.ceil(houseCount/5) :>> ', pageNumber < Math.ceil(houseCount/5));
    return (
        <div>
            {pageNumber > 1 ? <button onClick={()=>{setPageNumber(pageNumber-1)}}>Previous</button>: <div></div>}
            {pageNumber < Math.ceil(houseCount/5) ? <button onClick={()=>{setPageNumber(pageNumber+1)}}>Next</button> : <div></div> }
        </div>
      );
}

export default HousesPagination;
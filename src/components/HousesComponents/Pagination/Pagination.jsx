import "./Pagination.scss";

import { useContext } from "react";
import { housesContext } from "../../../Context/HousesContext.jsx";

const HousesPagination = () =>{
    const {setPageNumber,pageNumber,getHousesByCity, houseCount} = useContext(housesContext);

    console.log('Math.ceil(activeHouses.length/5) :>> ', Math.ceil(houseCount/5));
    console.log('pageNumber :>> ', pageNumber);
    console.log('pageNumber < Math.ceil(houseCount/5) :>> ', pageNumber < Math.ceil(houseCount/5));

    const next = ()=>{
        setPageNumber(pageNumber+1);
        getHousesByCity();
    }
    const previous = ()=>{
        setPageNumber(pageNumber-1);
        getHousesByCity();
    }
    return (
        <div className="pagination">
            {pageNumber > 1 ? <button className="back" onClick={previous}>Back</button>: <div></div>}
            {pageNumber < Math.ceil(houseCount/5) ? <button  className="next" onClick={next}>Next</button> : <div></div> }
        </div>
      );
}

export default HousesPagination;
import "./hosting.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { housesContext } from "../../../Context/HousesContext.jsx";
import { loginContext } from "../../../Context/LoginContext.jsx";

export default function HostingPage1() {
  let navigate = useNavigate();
  const {createHouse} = useContext(housesContext);
  const {activeUser} = useContext(loginContext);

  const houseObject={
    hostID:activeUser._id,
    title:" ",
    description:"lökölk",
    guests: {
        beds: 0,
        kids: 0,
        adult: 0
    },
    conversations:[]
  }
  const updateHouseObj = (typeofPlace)=>{
    houseObject.typeofPlace = typeofPlace;
    console.log('houseObject :>> ', houseObject);
  }

   const next=()=>{
     createHouse(houseObject);
    navigate("../hostingPage2", { replace: true });
   } 

  return (
    <div className="hostingPage1">
      <div className="mainLeft">
        <h1>What kind of place will you host?</h1>
      </div>
      <div className="mainRight">
        <div className="subMainRight">
          <div className="subMainRightDiv" onClick={()=>updateHouseObj("Apartment")}>
            <div className="leftWrapper">Apartment</div>
            <div className="apartmentImage">
              <img
                src="https://a0.muscache.com/im/pictures/eadbcbdb-d57d-44d9-9a76-665a7a4d1cd7.jpg?im_w=240"
                alt=""
                width={60}
              />
            </div>
          </div>

          <div className="subMainRightDiv" onClick={()=>updateHouseObj("House")}>
            <div className="leftWrapper">House</div>
            <div className="apartmentImage">
              <img
                src="https://a0.muscache.com/im/pictures/d1af74db-58eb-46bf-b3f5-e42b6c9892db.jpg?im_w=240"
                alt=""
                width={60}
              />
            </div>
          </div>

          <div className="subMainRightDiv" onClick={()=>updateHouseObj("Private Room")}>
            <div className="leftWrapper">Private Room</div>
            <div className="apartmentImage">
              <img
                src="https://a0.muscache.com/im/pictures/d52fb4e7-39a4-46df-9bf9-67e56d35eeca.jpg?im_w=240"
                alt=""
                width={60}
              />
            </div>
          </div>

          <div className="subMainRightDiv" onClick={()=>updateHouseObj("Shared Room")}>
            <div className="leftWrapper">Shared Room</div>
            <div className="apartmentImage">
              <img
                src="https://a0.muscache.com/im/pictures/a2c9ad21-b159-4fd2-b417-d810fb23c6a9.jpg?im_w=240"
                alt=""
                width={60}
              />
            </div>
          </div>

          <div className="subMainRightDiv" onClick={()=>updateHouseObj("Attic")}>
            <div className="leftWrapper">Attic</div>
            <div className="apartmentImage">
              <img
                src="https://cdnb.artstation.com/p/assets/images/images/038/712/203/large/selami-bektas-attic-bedroom-01.jpg?1623851279"
                alt=""
                width={60}
              />
            </div>
          </div>
        </div>
        <div className="subMainRightBottom">
          <div className="bottomPart">
            <div className="back">
              <button>
                <u>Back</u>
              </button>
            </div>
            <div className="next">
              <button
                onClick={next}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useContext } from "react";
import { houseContext } from "../../../Context/HouseContext.jsx";
import "./Images.scss";

export const Images=()=>{

    const {setShow} = useContext(houseContext);

    return(
            <div className="images-container">
                <div className="images-left-container">
                    <img onClick={()=>setShow(true)} src="https://a0.muscache.com/im/pictures/8a4568c9-4b46-4bac-8e15-3a3b53707472.jpg?im_w=1200" alt="" />
                </div>
                <div className="images-right-container">
                        <div><img onClick={()=>setShow(true)} src="https://a0.muscache.com/im/pictures/9dd13789-8644-436d-af02-ff1920ca269a.jpg?im_w=720" alt="" /></div>
                        <div><img onClick={()=>setShow(true)} className="rounded-img" src="https://a0.muscache.com/im/pictures/07431e42-dd3a-446f-b583-07a61e29a73b.jpg?im_w=720" alt="" /></div>
                        <div><img onClick={()=>setShow(true)} src="https://a0.muscache.com/im/pictures/11c3d235-6256-4a0d-91a3-ea478836c9e6.jpg?im_w=720" alt="" /></div>
                        <div><img onClick={()=>setShow(true)} className="rounded-img" src="https://a0.muscache.com/im/pictures/70efc7b7-afc9-4583-97bb-5079e6591c64.jpg?im_w=720" alt="" /></div>
                </div>
            </div>
    )
}
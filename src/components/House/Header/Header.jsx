import {useContext} from "react";
import { AiTwotoneStar, AiOutlineHeart } from 'react-icons/ai';
import {IoShareOutline} from "react-icons/io5"
import { houseContext } from "../../../Context/HouseContext.jsx";
import "./Header.scss";

export const Header = ()=>{
    const {house} = useContext(houseContext);
    return(
        <div className='header-container'>
            <div className='first-line'>
                <h2>{house.title}</h2>
            </div>
            <div className='second-line'>
                <div className='second-line-left'>
                    <AiTwotoneStar className='star'/>
                    <span>{house.rating}</span>
                    <a href="#">{house?.reviews?.length} reviews</a>  
                    <a href="#">{house?.address?.city}, {house?.address?.country}</a>
                </div>
                <div className='second-line-right'>
                    <div className='share'>
                        <IoShareOutline className='icon'/>
                        <a href="#">Share</a>
                    </div>
                    <div className='save'>
                        <AiOutlineHeart className='icon'/>
                        <a href="#">Save</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
import { AiTwotoneStar, AiOutlineHeart } from 'react-icons/ai';
import {IoShareOutline} from "react-icons/io5"
import "./Header.scss";

export const Header = ()=>{
    return(
        <div className='header-container'>
            <div className='first-line'>
                <h2>Bed in 6 Bed Dorm Ensuite</h2>
            </div>
            <div className='second-line'>
                <div className='second-line-left'>
                    <AiTwotoneStar className='star'/>
                    <span>4.57</span>
                    <a href="#">435 reviews</a>  
                    <a href="#">Berlin, Germany</a>
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
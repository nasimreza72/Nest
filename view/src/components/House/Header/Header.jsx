import { AiTwotoneStar, AiOutlineHeart } from 'react-icons/ai';
import {IoShareOutline} from "react-icons/io5"
import "./Header.scss";

export const Header = ()=>{
    return(
        <div className='flex flex-col items-center row-start-2 md:row-start-1 mt-5'>
            <div className=' w-full'>
                <h2 className=' text-2xl mb-4 text-left '>Bed in 6 Bed Dorm Ensuite</h2>
            </div>
            <div className='w-full flex justify-between'>
                <div className='flex items-center'>
                    <AiTwotoneStar className=' text-red-600 mr-2'/>
                    <span>4.57</span>
                    <a href="" className=' mr-5 ml-5 underline'>435 reviews</a>  
                    <a href="" className=' underline'>Berlin, Germany</a>
                </div>
                <div className='flex'>
                    <div className='hidden mr-5 md:flex items-center'>
                        <IoShareOutline className='mr-2'/>
                        <a href="" className=' underline'>Share</a>
                    </div>
                    <div className='hidden md:flex items-center'>
                        <AiOutlineHeart className='mr-2'/>
                        <a href="" className=' underline'>Save</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
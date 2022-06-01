import { AiTwotoneStar } from 'react-icons/ai';
import {IoIosArrowDown } from "react-icons/io"
export const Price=()=>{
    return(
        <div className='ml-10 mt-10 hidden md:block md:w-4/12 lg:w-[24rem]'>            
            <div className="p-6 border-2 rounded-lg shadow-2xl">
                <div>
                    <h2 className=' text-left text-2xl'>Add dates for prices</h2>
                    <div className=' flex items-center mt-3 mb-3'>
                        <AiTwotoneStar className=' text-red-600 mr-2'/>
                        <span>4.57</span>
                        <a href="" className=' mr-5 ml-5 underline'>435 reviews</a>  
                    </div>
                </div>
                <div className='rounded-lg'>
                    <div className=' flex text-left'>
                        <div className='w-1/2 border-2 p-2 rounded-tl-lg'>
                            <h5 className=' text-xs'>CHECK-IN</h5>
                            <p className=' text-sm'>Add date</p>
                        </div>
                        <div className='w-1/2 border-2 p-2 rounded-tr-lg'>
                            <h5 className=' text-xs'>CHECKOUT</h5>
                            <p className=' text-sm'>Add date</p>
                        </div>
                    </div>
                    <div className=' p-2 border-2 rounded-b-lg flex justify-between items-center'>
                        <div>
                            <h5 className=' text-xs'>GUESTS</h5>
                            <p className=' text-sm'>Add date</p>
                        </div>
                        <div>
                            <IoIosArrowDown className=' text-2xl'/>
                        </div>
                    </div>
                    <input className=' bg-red-600 text-white p-4 mt-3 w-full font-medium rounded-xl mb-3' type="submit" value="Check availability"/>
                    <p className=' text-sm'>Enter your travel dates to see the total price per night.</p>
                </div>
            </div>
        </div>
    )
}
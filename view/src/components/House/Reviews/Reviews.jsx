import { AiTwotoneStar } from 'react-icons/ai';
import {Button} from "../"

const ProgressBar = ({percent})=>{
    return(
        <div class=" w-52 bg-gray-200 h-1">
            <div class=" bg-gray-800 h-1" style={{width: percent+"%"}}></div>
        </div>
    )
}

const Review = ({src})=>{
    return(
        <div className=' mt-10'>
            <div className=' flex'>
                <div className=' mr-5'>
                    <img src={src} class="rounded-full w-16 h-16" alt="Avatar"/>
                </div>
                <div className=' flex justify-center flex-col'>
                    <h4>Alex</h4>
                    <h5>April 2022</h5>
                </div>
            </div>
            <p className=' text-left mt-4'>Super Laden he</p>
        </div>
    )
}

export const Reviews = () =>{
    return(
        <div className="border-b-2 mb-10">
            <div>
                <div className='flex items-center mb-5'>
                    <AiTwotoneStar className=' text-red-600 mr-2'/>
                    <h1 className=' text-2xl'>4.57 ( 455 reviews )</h1>
                </div>
                <div className='flex justify-between'>
                    <div className='hidden md:block w-1/2 text-left mr-24'>
                        <div className='mb-2 flex items-center justify-between'>
                            <span>Cleanliness</span>
                            <ProgressBar percent={45}/>
                        </div>
                        <div className='mb-2 flex items-center justify-between'>
                            <span>Communication</span>
                            <ProgressBar percent={45}/>
                        </div>
                        <div className='mb-2 flex items-center justify-between'>
                            <span>Check-in</span>
                            <ProgressBar percent={45}/>
                        </div>
                    </div>
                    <div className='hidden md:block w-1/2 text-left'>
                        <div className='mb-2 flex items-center justify-between'>
                            <span>Accuracy</span>
                            <ProgressBar percent={45}/>
                        </div>
                        <div className='mb-2 flex items-center justify-between'>
                            <span>Location</span>
                            <ProgressBar percent={45}/>
                        </div>
                        <div className='mb-2 flex items-center justify-between'>
                            <span>Value</span>
                            <ProgressBar percent={45}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' flex justify-between flex-col lg:flex-row'>
                <div className='w-full lg:w-2/5'>
                    <Review src={'https://a0.muscache.com/im/pictures/user/c3cf9d2b-0e00-4235-a698-689e23eaa995.jpg?im_w=240'}/>
                    <Review src={"https://a0.muscache.com/im/pictures/user/a8476f49-1458-46a5-9978-bbe831632ed3.jpg?im_w=240"}/>
                    <Review src={"https://a0.muscache.com/im/pictures/user/16922f48-08ab-4d18-89ae-41548e02f6e3.jpg?im_w=240"}/>
                </div>
                <div className='w-full lg:w-2/5'>
                    <Review src={"https://a0.muscache.com/im/pictures/user/11370ce4-0557-4d31-848d-4c84a7f3a12d.jpg?im_w=240"}/>
                    <Review src={"https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240"}/>
                    <Review src={"https://a0.muscache.com/im/pictures/user/fdf72bfb-16fa-44d3-8466-54ca6f46a08d.jpg?im_w=240"}/>
                </div>
            </div>
            <Button text={`Show all 455 reviews`}/>
        </div>
    )
}
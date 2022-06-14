import { AiTwotoneStar } from 'react-icons/ai';
import {StyledButton} from "../../General Components"
import "./Reviews.scss";


const Review = ({src})=>{
    return(
        <div className='review-container'>
            <div className='review'>
                <div className='img-container'>
                    <img src={src} alt="Avatar"/>
                </div>
                <div className='text'>
                    <h4>Alex</h4>
                    <p>April 2022</p>
                </div>
            </div>
            <p>Super Laden he</p>
        </div>
    )
}

export const Reviews = () =>{
    return(
        <div className="reviews-container">
            <div>
                <div className='header'>
                    <AiTwotoneStar className='icon'/>
                    <h1 >4.57 ( 455 reviews )</h1>
                </div>
            </div>
            <div className='reviews'>
                <div className='reviews1'>
                    <Review src={'https://a0.muscache.com/im/pictures/user/c3cf9d2b-0e00-4235-a698-689e23eaa995.jpg?im_w=240'}/>
                    <Review src={"https://a0.muscache.com/im/pictures/user/a8476f49-1458-46a5-9978-bbe831632ed3.jpg?im_w=240"}/>
                    <Review src={"https://a0.muscache.com/im/pictures/user/16922f48-08ab-4d18-89ae-41548e02f6e3.jpg?im_w=240"}/>
                </div>
                <div className='reviews1'>
                    <Review src={"https://a0.muscache.com/im/pictures/user/11370ce4-0557-4d31-848d-4c84a7f3a12d.jpg?im_w=240"}/>
                    <Review src={"https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240"}/>
                    <Review src={"https://a0.muscache.com/im/pictures/user/fdf72bfb-16fa-44d3-8466-54ca6f46a08d.jpg?im_w=240"}/>
                </div>
            </div>
            <StyledButton text={`Show all 455 reviews`}/>
        </div>
    )
}
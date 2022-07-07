import { useRef, useContext } from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import {StyledButton} from "../../General_Components";
import { houseContext } from '../../../Context/HouseContext.jsx';
import { loginContext } from '../../../Context/LoginContext.jsx';
import "./Reviews.scss";


const Review = ({reviewItem})=>{
    return(
        <div className='review-container'>
            <div className='review'>
                <div className='img-container'>
                    {/* todo: we can add profile picture, or from a website random pictures */}
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkpclgdZQ3ZHBh6xTt4wlROP30NE_GY7MdVw&usqp=CAU" alt="Avatar"/>
                </div>
                <div className='text'>
                    <h4>{reviewItem.authorId.loginInfo.email}</h4>
                    <p>{new Date(reviewItem.createdAt).getMonth()} {new Date(reviewItem.createdAt).getFullYear()}</p>
                </div>
            </div>
            <p>{reviewItem.text}</p>
        </div>
    )
}

export const Reviews = () =>{

    const {createReview, house, setHouse} = useContext(houseContext);
    const {activeUser} = useContext(loginContext);

    const reviewText = useRef();
    const sendReview = ()=>{
        const reviewObj = {
            authorId:activeUser._id,
            houseId:house._id,
            rate:5,
            text:reviewText.current.value
        }
        console.log('reviewObj :>> ', reviewObj);
        createReview(reviewObj);
        
        // added last review to the state to see it directly
        const tempReviewObj ={
            authorId:{
                _id:activeUser._id,
                loginInfo:{
                    email:activeUser?.loginInfo?.email
                }
            },
            createdAt : Date.now(),
            houseId:house._id,
            rate:5,
            text:reviewText.current.value
        };
        console.log('tempReviewObj :>> ', tempReviewObj);
        const tempHouse = {...house};
        tempHouse.reviews.push(tempReviewObj);
        setHouse(tempHouse);

        reviewText.current.value="";
    }

    return(
        <div className="reviews-container">
            <div>
                <div className='header'>
                    <AiTwotoneStar className='icon'/>
                    <h1 >4.57 ( 455 reviews )</h1>
                </div>
            </div>
            <div className='reviews'>
                {house?.reviews?.map((reviewItem, index)=>{
                    if (index > 5) return;
                    // <Review src={'https://a0.muscache.com/im/pictures/user/c3cf9d2b-0e00-4235-a698-689e23eaa995.jpg?im_w=240'}/>
                    return <Review reviewItem={reviewItem}/>
                })}
            </div>
            {house?.reviews?.length > 6 ? <StyledButton text={`Show all ${house.reviews.length} reviews`}/> : null}
            <div className='create-review-container'>
                <textarea ref={reviewText} placeholder='write your review...' rows={5} />
                <input  onClick={sendReview} className='save-button' type="button" value="Save"/>
            </div>
        </div>
    )
}
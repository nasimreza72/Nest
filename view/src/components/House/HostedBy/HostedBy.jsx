import { AiTwotoneStar } from 'react-icons/ai';
import {MdVerifiedUser} from "react-icons/md";
import {Button} from "../Button/Button";

export const HostedBy = () => {
  return (
    <div>
      <div className=" mt-10">
        <div className=" flex">
          <div className=" mr-5">
            <img
              src="https://a0.muscache.com/im/users/16702596/profile_pic/1402587009/original.jpg?im_w=240"
              class="rounded-full w-16 h-16"
              alt="Avatar"
            />
          </div>
          <div className=" flex justify-center flex-col">
            <h4>Hosted by Sonja</h4>
            <h5>Joined April 2022</h5>
          </div>
        </div>
      </div>
      <div className='flex items-center mt-3 mb-5'>
          <AiTwotoneStar/><span className=' ml-2 mr-5' >70 Reviews</span> 
          <MdVerifiedUser/><span className=' ml-2 mr-5'>Identity verified</span>
      </div>
      <div className=' text-left'>
          <h4 className=' text-lg'>During your stay</h4>
          <p className=' mb-2'>Personal arrangements by phone or text are desired.</p>
          <p className=' mb-2'>Policy number: 03/Z/AZ/004432-19</p>
          <p className=' mb-2'>Languages: English, Français, Deutsch</p>
          <p className=' mb-2'>Response rate: 100%</p>
          <p className=' mb-2'>Response time: within an hour</p>
          <Button text={"Contact Host"}/>
      </div>
    </div>
  );
};

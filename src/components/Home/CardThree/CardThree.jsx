import { GiReceiveMoney } from 'react-icons/gi'


export default function CardThree(){

    return(
        <div className="CardThree">
             <div className='iconAndNumberContainerThree'>
                <div className='numberThree'>3</div>
                <GiReceiveMoney id="money"/>
            </div>
            <p> We can help you find ways to pay your rent. 
                Keep in mind, you don’t have to pay the 
                rent yourself.
            </p>
        </div>
    )


}
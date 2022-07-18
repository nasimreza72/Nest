import { MdOutlineConnectWithoutContact } from 'react-icons/md'


export default function CardTwo(){

    return(
        <div className="CardTwo">
            <div className='iconAndNumberContainerTwo'>
                <div className='numberTwo'>2</div>
                <MdOutlineConnectWithoutContact id="connect"/>
            </div>
            <p>
                We will put you in touch with a local 
                buddy who will liaise with you and a refugee.
            </p>
        </div>
    )


}
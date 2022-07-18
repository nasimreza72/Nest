import { AiOutlineLaptop } from 'react-icons/ai'


export default function CardOne(){

    return(
        <div className="CardOne">
            
            <div className='iconAndNumberContainerOne'>
                <div className='numberOne'>1</div>
                <AiOutlineLaptop id="laptop"/>
            </div>
            <p>Register your flatshare and provide us basic information about your accomodation.</p>
        </div>
    )
}
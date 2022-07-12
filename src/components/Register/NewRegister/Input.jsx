import { Field, ErrorMessage } from 'formik'  
import TextError from './TextError.jsx';
import "./NewRegister.scss"


function Input(props) {
    
    const { label, name, ...rest } = props

    return ( 
        <div className='formControl'>
            {/* <label htmlFor={name}></label> */}
            <Field 
                id={name} 
                name={name} 
                {...rest} 
            />
            <ErrorMessage name={name} component={TextError} />
        </div>
     );
}

export default Input;
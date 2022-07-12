import React from 'react';
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError.jsx';
import "./HostOrUser.scss"

function Select(props) {

    const { label, name,options, ...rest } = props

    return ( 
        <div className="select-control">
            <label htmlFor={name}></label>
            <Field 
                className="select-field"
                as='select' 
                id={name} 
                name={name} 
                {...rest} 
            >
                {
                    options.map( option=> {
                        return(
                            <option className="options" key={option.value} value={option.value}>
                                {option.key}
                            </option>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
     );
}

export default Select;
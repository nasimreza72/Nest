import React from 'react';
import Select from './Select.jsx';

function FormikControl(props) {

    const { control, ...rest } = props

    switch(control) {
      
        case 'select': return <Select {...rest}/>
        default: return null
    }  
}

export default FormikControl;
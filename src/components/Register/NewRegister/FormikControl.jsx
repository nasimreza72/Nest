import React from 'react';
import Input from './Input.jsx';
import Select from './Select.jsx';
import TextArea from './TextArea.jsx';

function FormikControl(props) {

    const { control, ...rest } = props

    switch(control) {
        case 'select': return <Select {...rest}/>
        case 'input': return <Input {...rest} />
        default: return null
    }  
}

export default FormikControl;
import React from 'react';
import { Formik, Form } from "formik"
import * as Yup from "yup"
import FormikControl from './FormikControl.jsx';



function FormikContainer() {

        const dropdownOptions = [
            { key:'Select gender', value:'' },
            { key:'She', value:'She' },
            { key:'He', value:'He' },
            { key:'Other', value:'Other' }
        ]

        const initialValues = {
            selectOption:''
        }
        const validationSchema = Yup.object({

            selectOption: Yup.string().required('Required')
        })
        const onSubmit = values => console.log("form data", values)



    return ( 
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}

        >
            {
                formik => 
                <Form>
                    <FormikControl 
                        control='select'
                        label='Select a topic'
                        name='selectOption'
                        options={dropdownOptions}
                    /> 
                </Form>
            }
        </Formik>
     );
}

export default FormikContainer ;































/* import React, { useState, useContext, useEffect } from 'react'
import { loginContext } from '../../../Context/LoginContext'
import "./HostOrUser.scss"


export default function HostOrUser(){
    
    const { hostOrUser, setHostOrUser } = useContext(loginContext)

    console.log(hostOrUser)
     
    return(
        
        <select className="HostOrUser" 
            value={hostOrUser} 
            onChange={e => setHostOrUser(e.target.value)}
        >
            <option id="placeholder" value="" disabled selected  >Host or User?</option>
            <option value="host">Host</option>
            <option value="user">User</option>
       
        </select>   
    )
} */